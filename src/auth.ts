import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials"

import { User } from "./model/user-model";
import bcrypt from "bcryptjs"
import { dbConnect } from "./lib/mongo";


export const {
    handlers,
    auth,
    signIn,
    signOut,
} = NextAuth({
 
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
             authorize: async(credentials)=>{
               await dbConnect()
                if (credentials === null) return null;
                
                try {
                    const user = await User.findOne({
                        email: credentials?.email
                    })
                    console.log(user);
                    if (user) {
                        const isMatch = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );

                        if (isMatch) {
                            return user;
                        } else {
                            throw new Error("Email or Password is not correct");
                        }
                    } else {
                        throw new Error("User not found");
                    }
                } catch (error) {
                    throw new Error(error);
                }
            },
        }),
     
    ],
});