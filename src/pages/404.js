import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center p-8 bg-white shadow-xl rounded-xl">
        <h1 className="text-6xl font-extrabold text-blue-600">404</h1>
        <p className="mt-4 text-2xl text-gray-800 font-semibold">
          Oops! We lost that page!
        </p>
        <p className="mt-2 text-gray-600">
          It seems this page took a vacation... or maybe it never existed. 😅
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-300"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
