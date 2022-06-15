import Navbar from "../layouts/Navbar"

function Register() {
  return (
		<div className="container mx-auto relative">

        <div className="flex absolute inset-x-0 top-0">
          {/* <div className="w-11/12 h-96 md:w-96 md:h-96 py-4 px-6 my-16 rounded-lg shadow-md bg-white"></div> */}
          <Navbar />
        </div>

			<div className="flex items-center h-screen md:h-full md:flex md:items-center ">

				<div className="w-full flex mx-2 md:mx-10">

					<div
						className="h-screen md:block bg-gray-400 hidden md:w-5/12 bg-cover rounded-lg"
						style = {{backgroundImage: `url('https://images.pexels.com/photos/4045697/pexels-photo-4045697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}
					></div>
          
					<div className="md:flex-col md:self-center w-full lg:w-7/12 bg-white md:shadow-none md:border-0 border-2 border-gray-500 shadow-md p-5 rounded-lg">
					  <h3 className="pt-4 text-3xl text-center">Sign Up</h3>
            <h6 className="font-light tracking-wide text-center">Enter your email and password to register</h6>

            <form >
              <div className="flex flex-col mt-6">

                <div className="flex justify-center">
                  <input 
                    type="text" 
                    className="w-full md:w-3/6 px-3 py-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    placeholder="Name"
                  />
                </div>
                <div className="flex justify-center mt-3">
                  <input 
                    type="email" 
                    className="w-full md:w-3/6 px-3 py-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    placeholder="Email"
                  />
                </div>
                <div className="flex justify-center mt-3">
                  <input 
                    type="password" 
                    className="w-full md:w-3/6 px-3 py-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    placeholder="Password"
                  />
                </div>
                <div className="flex justify-center mt-3">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 rounded focus:ring-3 focus:ring-red-300 dark:bg-red-700 dark:border-gray-600 dark:focus:ring-red-600 dark:ring-offset-gray-800" required
                    id="remember"
                  />
                  <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">I agree the <span className="font-bold">Terms and Condition</span></label>
                </div>
                {/* Submit  */}
                <div className="flex justify-center mt-5">
                  <button
                    className="px-3 py-3 bg-red-600 hover:bg-red-800 text-white w-full md:w-3/6 rounded-md uppercase"
                  >
                    Sign Up
                  </button>
                </div>

                <div className="flex justify-center mt-5">
                  <p className="font-light tracking-wider">Already have an account? <span className="text-red-600 font-semibold">Sign In</span></p>
                </div>

              </div>
            </form>
						
					</div>

				</div>

			</div>
		</div>
  )
}

export default Register