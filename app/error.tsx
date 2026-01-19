'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error occurred:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5E6D3] to-white px-6">
      <div className="w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Error Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="text-[120px] leading-none">⚠️</div>
          </motion.div>

          {/* Error Title */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl font-bold text-[#3E2723] mb-4"
          >
            Oops! Something Went Wrong
          </motion.h1>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <p className="text-lg text-[#2C2C2C] mb-4">
              We encountered an unexpected error. Don&apos;t worry, we&apos;re working on it!
            </p>
            {error.digest && (
              <p className="text-sm text-gray-500 font-mono bg-gray-100 px-4 py-2 rounded-lg inline-block">
                Error ID: {error.digest}
              </p>
            )}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => reset()}
              className="w-full sm:w-auto px-8 py-4 bg-[#3E2723] text-white text-lg font-semibold rounded-lg hover:bg-[#8D4004] transition-all shadow-lg hover:shadow-xl"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#3E2723] text-lg font-semibold rounded-lg hover:bg-[#F5E6D3] transition-all border-2 border-[#3E2723] text-center"
            >
              Back to Home
            </Link>
          </motion.div>

          {/* Additional Help */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-[#F5E6D3]"
          >
            <p className="text-sm text-gray-600">
              If the problem persists, please{' '}
              <Link href="/#contact" className="text-[#8D4004] hover:underline font-semibold">
                contact us
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
