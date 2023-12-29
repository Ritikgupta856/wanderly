'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"


const Logo = () => {
    const router = useRouter();
  return (
    <div>
       <Image src="/images/logo.png" alt="logo" width="100" height="100"/>
    </div>
  )
}

export default Logo
