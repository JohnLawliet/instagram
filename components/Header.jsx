import Image from 'next/image'
import { 
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import Sidebar from './Sidebar'
import { useState } from 'react'
import { Transition } from '@headlessui/react'
import ProfileDropdown from './ProfileDrop'

// use plugin @tailwindcss/forms to override default forms styles
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    

    return (
        <div className="shadow-sm border-b bg-white sticky top-0 z-50 ">            
            <Sidebar 
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />            
            <nav className="max-w-6xl mx-1 sm:mx-5 xl:mx-auto flex justify-between items-center bg-white cursor-pointer">
                <div>
                    <div className="relative h-24 w-24 hidden lg:inline-grid cursor-pointer">
                        <Image 
                            src="https://links.papareact.com/ocw"
                            layout="fill"
                            objectFit="contain"
                            priority
                        />
                    </div>
                    <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
                        <Image 
                            src="https://links.papareact.com/jjm"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>

                <div className="max-w-sm">
                    <div className="relative mt-1 p-3 rounded-md">
                        <div className="absolute inset-y-0 pl-3 flex items-center cursor-pointer">
                            <SearchIcon className="h-5 w-5 text-gray-500"/>
                        </div>
                        <input 
                            type="text"
                            placeholder="Search"
                            className="bg-gray-50 block pl-10 w-full rounded-md border-gray-100 focus:ring-black focus:border-black sm:text-sm"
                        />
                    </div>            
                </div>

                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon className="navBtn"/>
                    <MenuIcon className="h-6 md:hidden flex-shrink-0 cursor-pointer" onClick={() => setIsOpen(isOpen => !isOpen)}/>                    
                    <div className="relative navBtn">
                        <PaperAirplaneIcon className=" rotate-45"/>
                        <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">3
                        </div>
                    </div>
                    
                    <UserGroupIcon className="navBtn" />
                    <PlusCircleIcon className="navBtn" />
                    <HeartIcon className="navBtn" /> 
                    <ProfileDropdown />
                </div>
            </nav>
        </div>
    )
}

export default Header
