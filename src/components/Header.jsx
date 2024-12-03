import logo from '../assets/microsoft.png'; // Make sure this path is correct

function Header() {
    return (
        <>
            <nav className="bg-white-900">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-1">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button */}
                            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>

                                {/* Icon when menu is closed */}
                                <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                {/* Icon when menu is open */}
                                <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex shrink-0 items-center">
                                <a href="/" className="flex">
                                    <img className="h-6 w-auto" src={logo} alt="Microsoft Logo" />
                                </a>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {/* Navigation links */}
                                    <a href="/microsoft-365" className="rounded-md px-2 py-2 text-sm" aria-current="page">Microsoft 365</a>
                                    <a href="/teams" className="rounded-md px-1 py-2 text-sm">Teams</a>
                                    <a href="/copilot" className="rounded-md px-1 py-2 text-sm">Copilot</a>
                                    <a href="/windows" className="rounded-md px-1 py-2 text-sm">Windows</a>
                                    <a href="/surface" className="rounded-md px-1 py-2 text-sm">Surface</a>
                                    <a href="/xbox" className="rounded-md px-1 py-2 text-sm">Xbox</a>
                                    <a href="/support" className="rounded-md px-1 py-2 text-sm">Support</a>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button id="mega-menu-dropdown-button" data-dropdown-toggle="mega-menu-dropdown" class="flex items-center justify-between w-full py-2 px-3 text-sm text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:bg-transparent">
                                All Microsoft<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>

                            <a href="/search" className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm">
                                <span>Search</span>
                                <svg width="17px" height="17px" viewBox="0 0 22 22" id="meteor-icon-kit__regular-search" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.0944 14.3199L1.70711 19.7071C1.31658 20.0976 0.68342 20.0976 0.29289 19.7071C-0.09763 19.3166 -0.09763 18.6834 0.29289 18.2929L5.68014 12.9056C4.62708 11.551 4 9.8487 4 8C4 3.58172 7.5817 0 12 0C16.4183 0 20 3.58172 20 8C20 12.4183 16.4183 16 12 16C10.1513 16 8.449 15.3729 7.0944 14.3199zM12 14C15.3137 14 18 11.3137 18 8C18 4.68629 15.3137 2 12 2C8.6863 2 6 4.68629 6 8C6 11.3137 8.6863 14 12 14z" fill="#000000"></path></g></svg>
                            </a>

                            <a href="/cart" className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm">
                                <span>Cart</span>
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </a>


                            <a href="/sign-in" className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm">
                                <span>Sign in</span>
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 12H17M19 14L19 10" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> <path d="M3 19.1115C3 16.6984 4.69732 14.643 7.00404 14.2627L7.21182 14.2284C9.05892 13.9239 10.9411 13.9239 12.7882 14.2284L12.996 14.2627C15.3027 14.643 17 16.6984 17 19.1115C17 20.1545 16.1815 21 15.1719 21H4.82813C3.81848 21 3 20.1545 3 19.1115Z" stroke="#000000" stroke-width="1.5"></path> <path d="M14.0834 6.9375C14.0834 9.11212 12.2552 10.875 10 10.875C7.74486 10.875 5.91669 9.11212 5.91669 6.9375C5.91669 4.76288 7.74486 3 10 3C12.2552 3 14.0834 4.76288 14.0834 6.9375Z" stroke="#000000" stroke-width="1.5"></path> </g></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
