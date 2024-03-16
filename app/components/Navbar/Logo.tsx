'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"


const Logo = () => {
    const router = useRouter();
  return (
    <div className="cursor-pointer saturate-200">
       <Image onClick={()=>router.push('/')} src="/images/logo.png" alt="logo" width="160" height="100"/>
     
    </div>
  )
}

export default Logo
