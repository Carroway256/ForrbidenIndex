
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require(".config/keys");

const app = express();

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.clientSecret,
    callbackURL: '/auth/google/callback'
}, (accesToken)=>{
    console.log(accesToken)

}));