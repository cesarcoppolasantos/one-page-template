'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export default function PaymentPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan') || 'Basic';
  
  // Debug log to see what plan is being received
  console.log('Payment page - Plan from URL:', plan);

  // Dynamic pricing based on plan
  const getPlanPrice = (planName: string) => {
    switch (planName.toLowerCase()) {
      case 'basic':
        return '$9.99';
      case 'pro':
        return '$19.99';
      default:
        return '$9.99'; // Default to Basic price
    }
  };

  const planPrice = getPlanPrice(plan);

  const handlePayment = () => {
    // Handle payment logic here
    console.log('Payment initiated');
    // You can integrate with your payment provider here
    // For now, we'll just show an alert
    alert('Payment processing... This would integrate with your payment provider.');
  };

  const handleBackToForm = () => {
    router.push(`/form?plan=${plan.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Payment Required
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-gray-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-300 text-md">
            You will receive your Page Link and QR Code immediately after making payment!
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
          {/* Success Icon */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Message */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Your page is almost ready!
            </h2>
          </div>

          {/* Payment Details */}
          <div className="bg-gray-800/50 rounded-lg p-6 mb-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-300">Plan:</span>
              <span className="text-white font-semibold capitalize">{plan} Plan</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-300">Service:</span>
              <span className="text-white font-semibold">Page Creation</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-300">Amount:</span>
              <span className="text-white font-semibold text-xl">{planPrice}</span>
            </div>
            <div className="border-t border-gray-600 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Total:</span>
                <span className="text-white font-bold text-2xl">{planPrice}</span>
              </div>
            </div>
          </div>

          {/* Payment Instruction */}
          <div className="text-center mb-4">
            <p className="text-gray-300 text-lg leading-relaxed">
              To finish, make the payment by clicking the button below.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleBackToForm}
              className="cursor-pointer bg-gray-600 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Form
              </div>
            </button>
            <button
              onClick={handlePayment}
              className="cursor-pointer bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                Make Payment
              </div>
            </button>
          </div>

          {/* Security Notice */}
          <div className="text-center mt-8">
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Secure payment processing
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Need help? Read our {' '}
            <a href="/#faq" className="text-purple-400 hover:text-purple-300 underline">
              FAQ
            </a>  or Contact us at {' '}
            <a href="mailto:support@myapp.com" className="text-purple-400 hover:text-purple-300 underline">
              support@myapp.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
} 