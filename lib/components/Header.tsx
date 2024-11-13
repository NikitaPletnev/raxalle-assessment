"use client";
import Link from "next/link";

export default function Header() {
    return (
        <div className="flex space-x-4 mb-8">
            <Link href="/gallery" legacyBehavior>
                <a className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300">
                    Gallery
                </a>
            </Link>
            <Link href="/processor" legacyBehavior>
                <a className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300">
                    JSON Processor
                </a>
            </Link>
        </div>
    )
}
