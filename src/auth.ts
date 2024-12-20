import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials"

import { User } from "./model/user-model";
import bcrypt from "bcryptjs"
import { dbConnect } from "./lib/mongo";
import { NextResponse } from "next/server";


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
                            credentials.password as string,
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
                 if (error instanceof Error) {
                     return NextResponse.json({ error: error.message || "Server error" }, { status: 500 });
                   } else {
                     return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
                   }
            }
             }
        })
     
    ]
});