'use client'

import { AiOutlineMenu } from "react-icons/ai"
import Avatar from "../Avatar"
import { useCallback, useState } from "react"
import MenuItems from "./MenuItems"
import useRegisterModal from "../hooks/userRegisterModal"
import useLoginModal from "../hooks/userLoginModal"




const UserMenu = () => {

    const registerModal = useRegisterModal();
    const loginmodal = useLoginModal();

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);


    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div onClick={() => { }} className="hidden md:block py-3 px-4 font-semibold text-sm rounded-full hover:bg-neutral-100 transition cursor-pointer ">Airbnb your home</div>
                <div onClick={toggleOpen} className="border-[1px] border-neutral-200 rounded-full cursor-pointer hover:shadow-md md:py-1 md:px-2 flex flex-row items-center gap-3 transition">

                    <AiOutlineMenu size={18} />

                    <div className="hidden md:block">
                        <Avatar />
                    </div>

                </div>
            </div>

            {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
                    <div className="flex flex-col cursor-pointer">
                        <>
                            <MenuItems onClick={loginmodal.onOpen} label="Login" />
                            <MenuItems onClick={registerModal.onOpen} label="Sign up" />
                        </>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserMenu
