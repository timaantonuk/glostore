
import Image from "next/image";
import Link from "next/link";
import {APP_NAME} from "@/lib/constants";
import Menu from "@/components/shared/header/menu";


const Header = () => {
    return (
        <header className='w-full border-b'>
            <div className="wrapper flex-between">
                <div className="flex-start">
                    <Link href='/' className='flex-start'>
                        <Image
                            src='/images/logo.webp'
                            alt={`${APP_NAME} logo`}
                            height={48}
                            width={48}
                            priority={true}
                        />
                        <span className='hidden lg:block font-bold text-2xl ml-3'>
                            {APP_NAME}
                        </span>
                    </Link>
                </div>
                <div className="space-x-2">
                    <Menu/>
                </div>
            </div>
        </header>
    );
};

export default Header;