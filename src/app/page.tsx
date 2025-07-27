'use client';

import { Plan, FAQ } from '@/types';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Handle hash navigation when page loads
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          // Small delay to ensure the page is fully loaded
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 100);
        }
      }
    }
  }, []);

  const handleGetStarted = () => {
    // Clear any previously selected plan from localStorage
    localStorage.removeItem('selectedPlan');
    router.push('/form');
  };

  const handleChoosePlan = (planName: string) => {
    // Set the selected plan in localStorage
    localStorage.setItem('selectedPlan', planName.toLowerCase());
    router.push('/form');
  };
  const plans: Plan[] = [
    {
      name: 'Basic',
      price: '$9',
      period: '/mo',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/mo',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
      mostChosen: true,
    },
  ];

  const faqs: FAQ[] = [
    {
      question: 'Question 1',
      answer: 'Answer 1'
    },
    {
      question: 'Question 2',
      answer: 'Answer 2'
    },
    {
      question: 'Question 3',
      answer: 'Answer 3'
    },
    {
      question: 'Question 4',
      answer: 'Answer 4'
    },
  ];
  
  return (
            <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-8 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Hero Section */}
      <section id="hero" className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8 py-8 mb-8">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-font-emphasis">
            Welcome to Your Next Big Thing
          </h1>
          <p className="text-xl md:text-2xl text-font-secondary max-w-xl">
            Streamline your <span className="text-font-emphasis italic">success</span> with our <span className="text-font-emphasis italic">simple</span>, <span className="text-font-emphasis italic">powerful</span> and <span className="text-font-emphasis italic">user-friendly</span> tools for businesses of all sizes. <span className="text-font-emphasis italic">Launch your idea today</span>.
          </p>
          <div className="flex justify-center w-full">
            <button
              type="button"
              onClick={handleGetStarted}
              className="bg-button-primary text-white font-semibold px-10 py-4 rounded shadow cursor-pointer hover:bg-button-hover transition-colors text-xl"
              aria-label="Get Started"
              tabIndex={0}
            >
              Get Started
            </button>
          </div>
        </div>
        {/* Right: Image Container */}
        <div className="flex-1 flex items-center justify-center">
          <img src="https://placehold.co/400x600?text=Preview+1" alt="img" />
        </div>
      </section>
      {/* Social Proof Section */}
      <section className="flex justify-center items-center h-16 mb-8 w-full max-w-5xl text-gray-400 text-sm [text-shadow:_0px_0px_5px_rgba(255,255,255,0.4)]">
        <span className="text-md whitespace-nowrap text-center">Enjoy it too! +1852 Pages Created</span>
      </section>
      {/* Examples Section */}
      <section id="examples" className="w-full max-w-5xl flex flex-col items-center mb-20">
        <h2 className="text-3xl font-bold text-font-primary mb-8">Examples</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <img src="https://placehold.co/200x400?text=Example+1" alt="Example 1" className="rounded-2xl shadow-lg border-3 border-button-primary w-[300px] h-[500px] object-cover" />
          <img src="https://placehold.co/200x400?text=Example+2" alt="Example 2" className="rounded-2xl shadow-lg border-3 border-button-primary w-[300px] h-[500px] object-cover" />
          <img src="https://placehold.co/200x400?text=Example+3" alt="Example 3" className="rounded-2xl shadow-lg border-3 border-button-primary w-[300px] h-[500px] object-cover" />
        </div>
      </section>
      {/* Pricing Section */}
      <section id="pricing" className="w-full max-w-5xl flex flex-col items-center mb-20">
        <h2 className="text-3xl font-bold text-font-primary mb-6">Pricing Plans</h2>
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-8 justify-center items-center">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative bg-purple-100 border-3 border-button-primary rounded-2xl shadow-lg flex flex-col items-center p-10 min-w-[360px] max-w-sm h-[420px] md:h-[460px]"
            >
              {plan.mostChosen && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-button-primary text-white shadow">⭐ More chosen</span>
                </div>
              )}
              <div className="flex justify-center w-full mb-4">
                <span className="text-4xl md:text-5xl">❤️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{plan.name}</h3>
              <div className="text-5xl font-extrabold text-button-primary mb-2">{plan.price}<span className="text-xl font-medium text-gray-500">{plan.period}</span></div>
              <ul className="text-gray-600 text-base mb-8 mt-3 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-button-hover rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => handleChoosePlan(plan.name)}
                className="mt-auto bg-button-primary text-white font-semibold px-8 py-3 rounded hover:bg-button-hover cursor-pointer transition-colors text-lg"
                aria-label={`Choose ${plan.name} plan`}
                tabIndex={0}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* CTA Section */}
      <section className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between text-center md:text-left mb-20 py-10 px-6 bg-background rounded-xl shadow gap-6 md:gap-0 border-3 border-button-primary">
        {/* Left: Image */}
        <div className="flex justify-center md:justify-start w-full md:w-auto mb-4 md:mb-0">
          <img src="https://placehold.co/80x160?text=CTA+Img" alt="CTA Preview" className="rounded-xl shadow border-3 border-button-primary w-[180px] h-[180px] object-cover" />
        </div>
        {/* Center: Sentence */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center px-0 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-font-emphasis">Ready to get started?</h2>
          <p className="text-font-secondary mb-0 max-w-xl"><span className="text-font-emphasis italic">Unleash</span> your <span className="text-font-emphasis italic">creativity</span> with <span className="text-font-emphasis italic">innovative tools</span> and a <span className="text-font-emphasis italic">supportive community</span>. Sign up now and pave the <span className="text-font-emphasis italic">way</span> to your <span className="text-font-emphasis italic">success</span>!</p>
        </div>
        {/* Right: CTA Button */}
        <div className="flex justify-center md:justify-end w-full md:w-auto mt-4 md:mt-0">
          <button
            type="button"
            onClick={handleGetStarted}
            className="bg-button-primary text-white font-semibold px-8 py-3 rounded shadow hover:bg-button-hover cursor-pointer transition-colors text-lg"
            aria-label="Get Started Now"
            tabIndex={0}
          >
            Get Started Now
          </button>
        </div>
      </section>
      {/* FAQ Section */}
      <section id="faq" className="w-full max-w-3xl flex flex-col items-center mb-20">
        <h2 className="text-3xl font-bold text-font-primary mb-8">Frequently Asked Questions</h2>
        <div className="w-full flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="bg-purple-100 border-3 border-button-primary rounded-lg p-4">
              <summary className="font-semibold text-gray-800 cursor-pointer rounded">
                {faq.question}
              </summary>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
