'use server';

import {signInFormSchema} from "@/lib/validators";
import {signIn, signOut} from "@/auth";
import {isRedirectError} from "next/dist/client/components/redirect";

// Sign in the user with credentials

export async function signInWithCredentials() {

}

