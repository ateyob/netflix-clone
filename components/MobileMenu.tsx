import { useRouter } from "next/router";
import React from "react";

interface MobileMenuProps {
    visible?: boolean;
}

const MobileMenu : React.FC<MobileMenuProps> = ({ visible }) => {
    const router = useRouter();
    
    if (!visible) {
        return null;
    }
    
    

    return (
        <div className=" bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
            <div className=" flex flex-col gap-4">
                <div className=" px-3 text-center text-white hover:underline" onClick={() => router.push('/')}>
                    Home
                </div>
                <div className=" px-3 text-center text-white hover:underline" onClick={() => router.push('/series')}>
                    Series
                </div>
                <div className=" px-3 text-center text-white hover:underline" onClick={() => router.push('/films')}>
                    Films
                </div>
                <div className=" px-3 text-center text-white hover:underline" onClick={() => router.push('/newandpopular')}>
                    New & Popular
                </div>
                <div className=" px-3 text-center text-white hover:underline" onClick={() => router.push('/mylist')}>
                    My List
                </div>
                <div className=" px-3 text-center text-white hover:underline" onClick={() => router.push('/browsebylanguage')}>
                    Browse by Language
                </div>
            </div>
        </div>
    )
}

export default MobileMenu;