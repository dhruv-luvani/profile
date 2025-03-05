import { BsArrowLeft } from "react-icons/bs";
import { IoWarningOutline } from "react-icons/io5";
import { Link } from "react-router";

export default function Error404Page ({ statusCode = 404, message = "Page Not Found" }) {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-5 text-center flex flex-col items-center">
        {/* Error Code */}
        <IoWarningOutline className="text-9xl text-red-800" />
          <h1 className="text-9xl font-bold text-gray-900 dark:text-gray-100">
            {statusCode}
        </h1>

        {/* Message */}
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-gray-100">
          Oops! {message}
        </h2>

        {/* Description */}
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          {statusCode === 404
            ? "The page you're looking for doesn't exist or has been moved."
            : "Something went wrong. Please try again later."}
        </p>

        {/* Back to Home Button */}
        <div className="mt-10">
          <Link
            to="/"
            className="group inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            <BsArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
};