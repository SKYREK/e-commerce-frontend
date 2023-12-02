import { Fragment , useState } from "react";
import { FaRegUser } from "react-icons/fa";
import {Menu , Transition} from "@headlessui/react"

const dropDownNotUser = [
  {
    name: "Sign in",
    href: "/",
  },
  {
    name: "Create account",
    href: "/",
  },
]

export default function UserDropdown() {
  const [dropDown, setDropDown] = useState(dropDownNotUser);
  
  return (
    <Menu as="div" className="relative inline-block text-left z-[100] mx-4">
      <div>
        <Menu.Button className="inline-flex justify-center w-full  font-medium text-black     focus-visible:ring-2 ">
          <FaRegUser className="text-2xl lg:text-4xl hover:text-primary" />          
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
          <Menu.Items className="absolute right-0 w-[100px] mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 z-[100]">
            {dropDown.map((item , index) => (<Menu.Item key={index}>
                  {({ active }) => (
                    <a
                      
                      href="/"
                      className={`${
                        active ? "bg-gray-100 text-red-900" : "text-gray-700"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm z-[100]`}
                    >
                      Sign out
                    </a>
                  )}
                </Menu.Item>))
              }
            </div>
          </Menu.Items>
      </Transition>
    </Menu>
  )
}