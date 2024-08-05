import React from 'react'
import LightDarkToggle from './LightDarkToggle'
import { FaShoppingCart } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";


const Navbar = () => {
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar bg-base-300 w-full">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2 justify-between">
                        <div className="tooltip tooltip-right" data-tip="Shopping List">
                            <span className='flex flex-row gap-2 cursor-pointer'>
                                <FaShoppingCart />
                                <FaListUl />
                            </span>
                        </div>

                        <div className='flex flex-row gap-2 items-center'>
                            <LightDarkToggle />
                            <div className="avatar placeholder">
                                <div className="bg-neutral text-neutral-content w-8 rounded-full">
                                    <span className="text-xs">UI</span>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="hidden flex-none lg:block">


                        <ul className="menu menu-horizontal" >
                            {/* Navbar menu content here */}

                            <li><a>Navbar Item 1</a></li>
                            <li><a>Navbar Item 2</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar