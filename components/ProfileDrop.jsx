import { Menu, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { 
    UserCircleIcon,
    CogIcon,
    BookmarkIcon,
    RefreshIcon
} from "@heroicons/react/outline"
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

const userNavigation = [
    { name: 'Profile', href: '#', icon: UserCircleIcon },
    { name: 'Saved', href: '#', icon: BookmarkIcon },
    { name: 'Settings', href: '#', icon: CogIcon },
    { name: 'Switch Accounts', href: '#', icon: RefreshIcon }
]

const ProfileDropdown = () => {
    const {data: session} = useSession()
    console.log(session)
    return (
        <Menu as="div" className="relative">
        <div>
          <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span className="sr-only">Open user menu</span>
            <img className="h-8 w-8 rounded-full" src={session?.user.image} alt="" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            {userNavigation.map((item) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <a
                    href={item.href}
                    className={
                        `block px-4 py-2 text-sm text-gray-700 ${active ? 'bg-gray-100' : ''}` 
                    }
                  >
                    {item.name}
                  </a>
                )}
              </Menu.Item>
            ))}
            <Link href="">
              <a onClick={signOut} className="border-t border-gray-200 block px-4 py-2 text-sm text-gray-700">Log out</a>
            </Link>
          </Menu.Items>
        </Transition>
      </Menu>
    )
}

export default ProfileDropdown
