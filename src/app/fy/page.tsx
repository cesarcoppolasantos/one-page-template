'use client';

export default function FyPage() {
  // These values will be populated by the backend
  const letterData = {
    signerName: 'fhkokpokopkpokopksdpofkspdofkp',
    recipientName: 'fhkokpokopkpokopksdpofkspdofkp',
    image: 'https://placehold.co/1920x1080?text=Letter+Image',
    message: 'sdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdas'
  };

  return (
    <div className="min-h-[calc(100vh-150px)] bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-12 md:p-12 relative overflow-hidden flex items-center justify-center">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-300 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-purple-300 rounded-full"></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-purple-200 rounded-full"></div>
        <div className="absolute bottom-60 right-1/3 w-2 h-2 bg-purple-200 rounded-full"></div>
        <div className="absolute top-80 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
        <div className="absolute top-32 right-1/4 w-1 h-1 bg-purple-300 rounded-full"></div>
        <div className="absolute bottom-80 left-1/2 w-2 h-2 bg-purple-200 rounded-full"></div>
        <div className="absolute top-16 right-1/3 w-1.5 h-1.5 bg-purple-300 rounded-full"></div>
        <div className="absolute bottom-20 right-1/2 w-1 h-1 bg-purple-400 rounded-full"></div>
        <div className="absolute top-72 left-1/6 w-1 h-1 bg-purple-200 rounded-full"></div>
        <div className="absolute bottom-72 right-1/6 w-1.5 h-1.5 bg-purple-300 rounded-full"></div>
        <div className="absolute top-48 left-2/3 w-2 h-2 bg-purple-400 rounded-full"></div>
        <div className="absolute bottom-48 left-1/6 w-1 h-1 bg-purple-200 rounded-full"></div>
        <div className="absolute top-24 right-1/6 w-1.5 h-1.5 bg-purple-300 rounded-full"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10 w-full">
        {/* Header */}
        {/* <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Your Letter
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-gray-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-300 text-lg">
            A beautiful letter created just for you
          </p>
        </div> */}

        {/* Letter Display */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-white/20 max-w-sm md:max-w-2xl mx-auto shadow-2xl transform hover:scale-105 transition-all duration-500">
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-purple-400/20 to-purple-500/20 blur-xl"></div>
          
          <div className="relative space-y-3 md:space-y-4">
            {/* Signer's Name */}
            <div className="text-left transform hover:translate-x-2 transition-transform duration-300">
                <div className="text-white text-sm md:text-lg font-medium bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent flex justify-start items-center">
                    <span className="text-purple-300 text-sm md:text-lg w-12 md:w-16 text-right flex items-center justify-end">
                    <span className="mr-1">✨</span>From:
                    </span>
                    <span className="min-w-32 md:min-w-40 ml-3 md:ml-5 text-left font-medium whitespace-nowrap truncate">{letterData.signerName}</span>
                </div>
                </div>

                {/* Recipient's Name */}
                <div className="text-left transform hover:translate-x-2 transition-transform duration-300 mb-6 md:mb-8">
                <div className="text-white text-sm md:text-lg font-medium bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent flex justify-start items-center">
                    <span className="text-purple-300 text-sm md:text-lg w-12 md:w-16 text-right flex items-center justify-end">
                    <span className="mr-1">💌</span>To:
                    </span>
                    <span className="min-w-32 md:min-w-40 ml-3 md:ml-5 text-left font-medium whitespace-nowrap truncate">{letterData.recipientName}</span>
                </div>
                </div>

            {/* Animated Separator */}
            <div className="relative">
              <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto"></div>
              <div className="absolute inset-0 w-12 md:w-16 h-px bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400 mx-auto animate-pulse"></div>
            </div>

            {/* Image Display */}
            <div className="text-center mb-4 transform hover:scale-105 transition-transform duration-300">              
              <div className="relative group">
                <img 
                  src={letterData.image} 
                  alt="Letter attachment" 
                  className="w-full max-w-sm md:max-w-md h-auto mx-auto rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300 object-cover object-center"
                  style={{
                    maxHeight: '250px',
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
                {/* <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
              </div>
            </div>

            {/* Animated Separator */}
            {/* <div className="relative">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto"></div>
              <div className="absolute inset-0 w-16 h-px bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400 mx-auto animate-pulse"></div>
            </div> */}

            {/* Message */}
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-white text-lg md:text-xl lg:text-2xl whitespace-pre-wrap leading-relaxed font-bold break-words max-w-full overflow-hidden px-2">
                {letterData.message}
              </div>
            </div>
            

            {/* Date Created */}
            <div className="text-center transform hover:scale-105 transition-transform duration-300 mt-8 md:mt-12">
              <div className="text-gray-300 text-xs md:text-sm flex justify-center items-center">
                <span className="text-purple-300 text-xs md:text-sm mr-2">📅</span>
                <span className="italic">Send on {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
            </div>
            
          </div>
        </div>
        {/* Fy info */}
        <div className="text-center mt-12 md:mt-20">
          <p className="text-gray-400 text-xs md:text-sm">
            Do you also want to create a page like this? {' '}
            <a 
              href="/form" 
              className="text-purple-400 hover:text-purple-300 underline"
              onClick={(e) => {
                e.preventDefault();
                localStorage.removeItem('selectedPlan');
                window.location.href = '/form';
              }}
            >
              Click here!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
} 