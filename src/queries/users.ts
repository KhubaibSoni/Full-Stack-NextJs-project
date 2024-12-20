import { User } from "@/model/user-model";



export async function createUser(user:{name:string , email:string , password:string}) {
  try{
    await User.create(user);
  } catch(error){
    if(error instanceof Error){
      throw new Error("error while creating user",error)
    }
  }
}