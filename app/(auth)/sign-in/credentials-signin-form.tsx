'use client'

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {signInDefaultValues} from "@/lib/constants";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {signInWithCredentials} from "@/lib/actions/user-actions";
import {useActionState} from "react";
import {useFormStatus} from 'react-dom'

const CredentialsSignInForm = ({}) => {

    const [data, action] = useActionState(signInWithCredentials, {
        success: false,
        message: '',
    })

    const SignInButton = () => {
        const {pending} = useFormStatus();

        return (
            <Button disabled={pending} className='w-full' variant='default'>
                {pending ? "Signing in..." : 'Sign in'}
            </Button>
        )
    }

    return (
        <form action={action}>
            <div className="space-y-6">
                <div>
                    <Label className='pl-2' htmlFor='email'>Email</Label>
                    <Input id='email' name='email' type='email' required autoComplete='email' defaultValue={signInDefaultValues.email}/>
                </div>

                <div>
                    <Label className='pl-2' htmlFor='password'>Password</Label>
                    <Input id='password' name='password' type='password' required autoComplete='password' defaultValue={signInDefaultValues.password}/>
                </div>

                <div>
                    <SignInButton/>
                </div>

                {data && !data.success && (
                    <div className='text-center text-destructive text-xs'>
                        {data.message}
                    </div>
                )}

                <div className="text-sm text-center text-muted-foreground">
                    Don&apos;t have an account?{' '}
                    <Link href='sign-up' target='_self' className='link'>
                        Sign Up
                    </Link>
                </div>
            </div>
        </form>
    );
};

export default CredentialsSignInForm;