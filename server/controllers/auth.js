const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const {prisma} = require('../utils/prismaClient');
const bcrypt = require('bcryptjs');
const jwt = require('../utils/jwt');

process.env.GOOGLE_CLIENT_ID = "1083204699374-fp62oduhl2uojdftsfg5r7j7pc9smvfo.apps.googleusercontent.com";
process.env.GOOGLE_CLIENT_SECRET = "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";


passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "https://post-pedia-server.onrender.com/auth/google/callback"
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

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, async (email, password, done) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        if(!user) {
            return done(null, false);
        }

        const isMatch = bcrypt.compareSync(password, user.password);
        
        if(!isMatch) {
            return done(null, false);
        }
        const token = await jwt.signAccessToken(user.id);
        if(!token) {
            return done(null, false);
        }

        return done(null, user, token);
    } catch (error) {
        
        return done(error, false);
    }
}
));


const slugify = async (string, num = 0) => {
    let  newSlug = string.toLowerCase().replace(/[^\w ]+/g, '').replace(/[ ]+/g, '-');
    newSlug = num > 0 ? `${newSlug}-` + num : newSlug;
  
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
    done(null, user.email);
});

passport.deserializeUser(function(email, done) {
    prisma.user.findUnique({
        where: {
            email: email,
        },
    }).then((user) => {
        const serializedUser = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            slug: user.slug,
            photoUrl: user.profileImage,
        }
        done(null, serializedUser);
    }).catch((err) => {
        done(err, null);
    });
});


const register = async (req, res, next) => {
    try {
        const {email, password, firstName, lastName, userName} = req.body;
        
        const requiredFields = ['email', 'password', 'firstName', 'lastName'];

        const fieldDisplayNames = {
            email: 'Email',
            password: 'Password',
            firstName: 'First name',
            lastName: 'Last name',
          };
          
          const missingFields = requiredFields.filter(field => !req.body[field]);
          
          if (missingFields.length > 0) {
            const errorMessage = missingFields.length === 1
              ? `${fieldDisplayNames[missingFields[0]]} is required`
              : `${missingFields.map(field => fieldDisplayNames[field]).join(', ')} are required`;
          
            return res.status(400).json({
              message: 'Validation error',
              errors: errorMessage,
            });
          }
          
        if (password.length < 6) {
            return res.status(400).json({
                message: 'Validation error',
                errors: 'Password must be at least 6 characters',
            });
        }
        

        const slug = await slugify(`${firstName} ${lastName}`);
        const userExists = await prisma.user.findUnique({
        where: {
            email: req.body.email,
        },
        });
        if (userExists) {
            return res.status(400).json({
                message: 'User already exists',
            });
        }

        
        const newUser = await prisma.user.upsert ({
            where: {
                email: email,
            },
            update: {
                password: bcrypt.hashSync(password, 10),
            },
            create: {
                email: email,
                password: bcrypt.hashSync(password, 10),
                slug: slug,
                userName: slug,
                firstName: firstName,
                lastName: lastName,
            },
        });

        if(!newUser) {
            return res.status(400).json({
                message: 'Error creating user',
            });
        }
        createdUser = {
            id: newUser.id,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            slug: newUser.slug,
        }

        return res.status(201).json({
            message: 'User created successfully',
            user: createdUser,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
    
}

module.exports =  {register, passport};


