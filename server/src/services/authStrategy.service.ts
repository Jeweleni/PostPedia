import express, {
    Request,
    RequestHandler,
    Response,
    NextFunction
} from 'express'
import passport from 'passport'
var GoogleStrategy = require('passport-google-oauth20');
import { prisma } from '../utils/prismaClient';
import { createId } from '@paralleldrive/cuid2';
import { UserProfile } from '../interfaces';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';



const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY,
};

passport.use(new JwtStrategy(jwtOptions, (payload, done) => {
    prisma.user.findUnique({
        where: { id: payload.sub }
    }).then((user) => {
        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    }).catch((err) => {
        done(err, false);
    })
}));

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "https://post-pedia-v1-six.vercel.app/auth/google/callback",
    scope: ['profile'],
    state: true
},
    function verify(accessToken: string, refreshToken: string, profile: UserProfile, cb: any) {
        prisma.user.upsert({
            where: { email: profile.emails[0].value },
            update: {},
            create: {
                id: createId() as string,
                userType: 'WRITER',
                createdAt: new Date(),
                updatedAt: new Date(),
                image: profile.photos[0].value,
                email: profile.emails[0].value,
                name: profile.displayName
            }
        }).then((user) => {
            cb(null, user);
        }).catch((err) => {
            cb(err, null);
        })
    }
));


export default passport;

