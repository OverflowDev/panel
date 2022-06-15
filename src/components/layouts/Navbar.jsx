import {Link} from 'react-router-dom'
import {useState} from 'react'

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='container'>
      <nav className='bg-gray-500 w-8/12 mx-auto rounded-lg my-6 py-3'>

        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-around">

            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <Link to='/' className='flex font-bold text-red-900 '>
                        Admin Panel
                    </Link>
                </div>
            </div>

            <div className="hidden md:block mx-auto ">
                <div className="ml-5 flex items-baseline space-x-4 ">
                    
                    <Link to='/dashboard' className='flex font-semibold text-white py-2 pr-4 pl-3 tracking-wider'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="text-red-600 h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                      Dashboard
                    </Link>

                    <Link to='/profile' className='flex font-semibold text-white py-2 pr-4 pl-3 tracking-wider'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="text-red-600 h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                      </svg>
                      Profile
                    </Link>

                    <Link to='/register' className='flex font-semibold text-white py-2 pr-4 pl-3 tracking-wider'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-red-600 h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                      Sign Up
                    </Link>

                    <Link to='/login' className='flex font-semibold text-white py-2 pr-4 pl-3 tracking-wider'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="text-red-600 h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                        Sign In
                    </Link>
                
                </div>
            </div>

            {/* menu Icon */}
            <div className="mr-2 flex md:hidden">
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    type='button'
                    className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                >

                    <span className='sr-only'>Main Men</span>
                    {!isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                      ) :
                      (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    )}

                </button>
            </div>
            {/* menu Icon */}

          </div>
        </div>

        {isOpen ? (
          <div className="md:hidden" id='mobile-menu'>
            <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <li>
                <Link to='/dashboard' className='flex font-semibold text-white py-2 pr-4 pl-3 tracking-wider'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-red-600 h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                  Dashboard
                </Link>
              </li>

              <li> 
                <Link to='/profile' className='flex font-semibold text-white py-2 pr-4 pl-3 tracking-wider'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-red-600 h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                  Profile
                </Link>
              </li>

              <li>
                <Link to='/register' className='flex font-semibold text-white py-2 pr-4 pl-3 tracking-wider'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-red-600 h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                    Sign Up
                </Link>
              </li>
              <li> 
                <Link to='/login' className='flex font-semibold text-white py-2 pr-4 pl-3 tracking-wider'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-red-600 h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                    Sign In
                </Link>
              </li>
            </ul>
          </div>
        ) : (
            <></>
        )}

      </nav>
    </div>
  )
}

export default Navbar