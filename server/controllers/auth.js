const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {prisma} = require('../utils/prismaClient');

process.env.GOOGLE_CLIENT_ID = "1083204699374-fp62oduhl2uojdftsfg5r7j7pc9smvfo.apps.googleusercontent.com";
process.env.GOOGLE_CLIENT_SECRET = "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";


passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/callback"
    },
    async function(accessToken, refreshToken, profile, done) {
        const slug = await slugify(profile?.displayName);
        const user = await prisma.user.upsert ({
            where: {
                email: profile?.emails[0]?.value,
            },
            update: {
                profileImage: profile?.photos[0]?.value,
            },
            create: {
                email: profile?.emails[0]?.value,
                profileImage: profile?.photos[0]?.value,
                slug: slug,
                userName: profile?.displayName,
                firstName: profile?.name?.givenName,
                lastName: profile?.name?.familyName,
            },
        });

        return done(null, user);

        
    }
));

const slugify = async (string, num = 0) => {
    const newSlug = num > 0 ? `${string}-${num}` : string;
    newSlug.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
  
    const user = await prisma.user.findUnique({
      where: {
        slug: newSlug,
      },
    });
  
    if (user) {
      return slugify(string, num + 1);
    } else {
      return newSlug;
    }
  };
  
  
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    prisma.user.findUnique({
        where: {
            id: id,
        },
    }).then((user) => {
        done(null, user);
    }).catch((err) => {
        done(err, null);
    });
});


module.exports = passport;

