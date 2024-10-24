import { Link } from "react-router-dom"

const Login = () => {
  return (
    <>
      <section className="bg-gray-50 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold text-center pb-2 leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Login to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                  <input type="email" name="email" id="email" className="contact-in" placeholder="" required="" />
                </div>

                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" name="password" id="password" placeholder="" className="contact-in" required="" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required="" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500">Remember me</label>
                    </div>
                  </div>
                  <a href="#" className="text-sm font-medium text-primary-600 hover:underline">Forgot password?</a>
                </div>

                <div className="flex gap-5">
                  <button type="submit" className="btn-2">Register</button>
                  <button type="submit" className="btn-2 bg-gray-800">Cancel</button>
                </div>

                <p className="text-sm font-light text-gray-500 ">
                  Don&apos;t have an account yet? <Link to="/selfcare/register" className="font-medium text-primary-600 hover:underline ">Sign up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login

