import Navbar from "../layouts/Navbar"

function Login() {
  return (
    <div className="bg-gray-900 ">

        <div className="flex">
            {/* <div className="w-11/12 h-96 md:w-96 md:h-96 py-4 px-6 my-16 rounded-lg shadow-md bg-white"></div> */}
            <Navbar />
        </div>
        
        <div className="flex justify-center min-h-screen items-center">

            <div className="relative max-w-md w-11/12 h-96 md:w-96 md:h-96 py-4 px-6 rounded-lg shadow-md bg-white">
                <div className="absolute inset-x-7 md:inset-x-8 -top-6 w-5/6 h-24 md:w-5/6 md:h-24 rounded-lg shadow-md bg-red-500">
                    <h3 className="font-bold text-center text-white mt-3">Sign In</h3>
                    <div className="flex justify-center mt-2 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-6 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-6 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                    </div>

                    <div className="flex-col mt-16">
                        <form>
                            <div className="flex justify-center">
                                <input 
                                    type="email" 
                                    className="w-full px-3 py-3 text-sm leading-tight text-gray-700 border-2 border-gray-400 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="flex justify-center mt-3">
                                <input 
                                    type="password" 
                                    className="w-full px-3 py-3 text-sm leading-tight text-gray-700 border-2 border-gray-400 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="flex justify-center mt-3">
                                <input 
                                    type="checkbox" 
                                    className="w-4 h-4 rounded focus:ring-3 focus:ring-red-300 dark:bg-red-700 dark:border-gray-600 dark:focus:ring-red-600 dark:ring-offset-gray-800" required
                                    id="remember"
                                />
                                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">Remember Me</label>
                            </div>
                            {/* Submit  */}
                            <div className="flex justify-center mt-5">
                                <button
                                    className="px-3 py-3 bg-red-500 hover:bg-red-600 text-white w-full rounded-md uppercase"
                                >
                                    Sign In
                                </button>
                            </div>
                            <div className="flex justify-center mt-5">
                                <p className="font-light tracking-wider">Don't have an account? <span className="text-red-600 font-semibold">Sign Up</span></p>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default Login