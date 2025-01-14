import React from "react";

const LoginSignup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-pink-50 to-pink-100">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Login or Signup</h2>
        <form className="mt-6">
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
            Mobile Number
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="mobile"
              name="mobile"
              placeholder="+91 Mobile Number"
              className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            By continuing, I agree to the{" "}
            <a href="#" className="text-pink-600 hover:underline">
              Terms of Use
            </a>{" "}
            &{" "}
            <a href="#" className="text-pink-600 hover:underline">
              Privacy Policy
            </a>
          </p>
          <button
            type="submit"
            className="w-full mt-4 py-2 text-white bg-pink-500 hover:bg-pink-600 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400"
          >
            Continue
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-pink-600 hover:underline">
            Have trouble logging in? Get help
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
