'use client'
import Image from 'next/image'
import {APP_NAME} from "@/lib/constants";
import {Button} from "@/components/ui/button";

const NotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <div className='p-6 w-1/3 rounded-lg shadow-md text-center bg-accent flex flex-col justify-center items-center gap-4'>
            <Image className='bg-accent' src='/images/logo.webp' width={48} height={48} alt={`${APP_NAME}`} priority={true} />
                <h1 className='text-3xl font-bold'>
                    Not Found
                </h1>
                <p className="text-destructive">
                    Could not find requested page
                </p>
                <Button variant='outline' onClick={() => (window.location.href = '/')}>
                    Back to Home
                </Button>
            </div>
        </div>
    );
};

export default NotFound;