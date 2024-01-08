import type { Metadata } from 'next'
import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from '@/app/components/Navbar/Navbar'
import RegisterModal from './components/modal/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './components/modal/LoginModal'
import getCurrenUser from './actions/getCurrentUser'
import RentModal from './components/modal/RentModal'
import SearchModal from './components/modal/SearchModal'

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {

  title: 'Airbnb | Holiday rentals, cabins, beach houses & more',
  description: 'Booking Website',
}

export default async function RootLayout({ children, }: { children: React.ReactNode }) {
  const currentUser = await getCurrenUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider/>
        <SearchModal/>
        <RentModal/>
        <Navbar currentUser = {currentUser}/>
        <LoginModal/>
        <RegisterModal/>
        <div className='pb-20 pt-28'>
        {children}
        </div>
      
      </body>
    </html>
  )
}
