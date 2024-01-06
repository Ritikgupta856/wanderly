'use client'

import { AiOutlineMenu } from "react-icons/ai"
import Avatar from "../Avatar"
import { useCallback, useState } from "react"
import MenuItems from "./MenuItems"
import useRegisterModal from "../hooks/userRegisterModal"
import useLoginModal from "../hooks/userLoginModal"
import { signOut } from "next-auth/react"
import useRentModal from "../hooks/useRentModal"
import { useRouter } from "next/navigation"
import { SafeUser } from "@/app/types"




interface UserMenuProps{
    currentUser?: SafeUser | null;
}

const UserMenu:React.FC<UserMenuProps> = ({
    currentUser
}) => {

    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const rentModal = useRentModal();
    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);


    const onRent = useCallback(()=>{
        if(!currentUser){
         return loginModal.onOpen();
        }

        rentModal.onOpen();

    },[currentUser,loginModal,rentModal])





    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div onClick={onRent} className="hidden md:block py-3 px-4 font-semibold text-sm rounded-full hover:bg-neutral-100 transition cursor-pointer ">Airbnb your home</div>
                <div onClick={toggleOpen} className="border-[1px] border-neutral-200 rounded-full cursor-pointer hover:shadow-md md:py-1 md:px-2 flex flex-row items-center gap-3 transition">

                    <AiOutlineMenu size={18} />

                    <div className="hidden md:block">
                        <Avatar src={currentUser?.image}/>
                    </div>

                </div>
            </div>

            {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
                    <div className="flex flex-col cursor-pointer">
                        {currentUser ? (
                               <>
                               <MenuItems onClick={()=>router.push(`/trips`)} label="My trips" />
                               <MenuItems onClick={()=>{}} label="My reservations" />
                               <MenuItems onClick={()=>{router.push(`/properties`)}} label="My properties" />
                               <MenuItems onClick={onRent} label="Airbnb my home" />
                               <hr/>
                               <MenuItems onClick={()=>signOut()} label="Logout" />
                           
                           </>
                        ) : (
                            <>
                            <MenuItems onClick={loginModal.onOpen} label="Login" />
                            <MenuItems onClick={registerModal.onOpen} label="Sign up" />
                        </>
                        )
                        }
                     
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserMenu
