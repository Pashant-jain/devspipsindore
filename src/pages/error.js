import Link from "next/link";

export default function Custom500() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100">
      <div className="text-center p-10 bg-white shadow-lg rounded-lg">
        <h1 className="text-6xl font-extrabold text-red-600">500</h1>
        <p className="mt-4 text-2xl text-gray-800 font-semibold">
          Yikes! Our server took a nap.
        </p>
        <p className="mt-2 text-gray-600">
          We’re on it! (Well, someone is, probably...)
        </p>
        <div className="mt-6">
          <Link href="/">
            <a className="px-6 py-2 bg-red-500 text-white font-bold rounded-full hover:bg-red-600 transition ease-in-out duration-300">
              Go Back Home
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
