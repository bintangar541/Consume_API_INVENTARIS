import React from 'react';
import Navbar from './components/Navbar';

export default function App() {
    return (
        <>
            <Navbar />
            <div>
                {/* Hero Section */}
                <section className="bg-hero-image bg-cover bg-center h-screen dark:bg-gray-900">
                    <div className="flex items-center justify-center w-full h-full bg-opacity-50 bg-gray-900 dark:bg-opacity-50">
                        <div className="text-center">
                            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                                welcome to the inventory web
                            </h1>
                            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                                Our inventory management system helps you streamline operations, reduce costs, and increase efficiency. Get started today!
                            </p>
                            <div className="flex flex-col mb-8 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                                <a href="#" className="px-5 py-3 text-base font-medium text-center text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 focus:ring-4 focus:ring-gray-100 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
