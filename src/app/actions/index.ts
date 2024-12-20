'use server'
import { signIn, signOut } from "@/auth";

export async function doSocialLogin(formData : FormData) {
    const action = formData.get('action');
    if (typeof action === 'string' ) {
      await signIn(action, { redirectTo: "/home" });
    }else {
      throw new Error("Invalid action type: action must be a string");
    }
 
}

export async function doLogout() {
  await signOut();
}

export async function doCredentialLogin(formData:FormData) {
  console.log("formData", formData);

  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    return response;
  } catch (err) {
    throw err;
  }
}