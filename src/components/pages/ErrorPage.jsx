// src/components/ErrorPage.jsx
import React, { useEffect, useState } from "react";

const ErrorPage = () => {
    const [secondsLeft, setSecondsLeft] = useState(7);

    useEffect(() => {
        if (secondsLeft > 0) {
            const timer = setInterval(() => {
                setSecondsLeft((prev) => prev - 1);
            }, 1000);

            return () => clearInterval(timer);
        } else {
            // window.location.href = "/profile";
        }
    }, [secondsLeft]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-900 via-transparent to-cyan-700 bg-200 animate-bg-scroll">
            <div className="text-center p-6 max-w-lg bg-white rounded-lg shadow mx-5">
                <h1 className="text-4xl font-bold text-red-500">Page Not Found!</h1>
                <p className="mt-4 text-xl text-gray-600">
                    You'll be redirected to profile page in {secondsLeft} seconds.
                </p>
                <p className="mt-2 text-lg text-gray-500">If the page doesn't redirect, click below:</p>
                <button
                    onClick={() => window.location.href = "/profile"}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Go to Profile
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;
