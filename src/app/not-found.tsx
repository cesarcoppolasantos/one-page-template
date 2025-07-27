'use client';

import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4">
            404
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-gray-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-300 text-xl">
            Oops! Page not found
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
          {/* 404 Icon */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
          </div>

          {/* Message */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              The page you're looking for doesn't exist or has been moved. 
              Don't worry, you can easily get back on track!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <button
              onClick={handleGoBack}
              className="cursor-pointer bg-gray-600 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Go Back
              </div>
            </button> */}
            <button
              onClick={handleGoHome}
              className="cursor-pointer bg-button-primary hover:bg-button-hover text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Go Home
              </div>
            </button>
          </div>

          {/* Help Section */}
          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm mb-4">
              Need help? Here are some useful links:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <a 
                href="/" 
                className="text-purple-400 hover:text-purple-300 underline transition-colors"
              >
                Home
              </a>
              <a 
                href="/form" 
                className="text-purple-400 hover:text-purple-300 underline transition-colors"
              >
                Create Page
              </a>
              <a 
                href="/#pricing" 
                className="text-purple-400 hover:text-purple-300 underline transition-colors"
              >
                Pricing
              </a>
              <a 
                href="/#faq" 
                className="text-purple-400 hover:text-purple-300 underline transition-colors"
              >
                FAQ
              </a>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Still having trouble? Contact us at {' '}
            <a href="mailto:support@myapp.com" className="text-purple-400 hover:text-purple-300 underline">
              support@myapp.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
} 