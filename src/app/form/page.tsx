'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { FormData } from '@/types';

export default function FormPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Validate plan query parameter
  const planParam = searchParams.get('plan');
  const validPlans = ['basic', 'pro'];
  const isValidPlan = planParam && validPlans.includes(planParam.toLowerCase());
  
  // If plan parameter is invalid or missing, show 404
  if (!isValidPlan) {
    notFound();
  }
  
  const selectedPlan = planParam!.toLowerCase();
  
  const [formData, setFormData] = useState<FormData>({
    plan: selectedPlan,
    signerName: '',
    isAnonymous: false,
    recipientName: '',
    email: '',
    image: null,
    text: ''
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [showImageWarning, setShowImageWarning] = useState(false);
  const [showMessageWarning, setShowMessageWarning] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
    // Clear signer name error when anonymous is toggled
    if (field === 'isAnonymous' && errors.signerName) {
      setErrors(prev => ({ ...prev, signerName: '' }));
    }
    // Clear signer name when anonymous is selected
    if (field === 'isAnonymous' && value === true) {
      setFormData(prev => ({ ...prev, signerName: '' }));
    }
    // Clear content error when text is added or image is attached
    if ((field === 'text' || field === 'image') && errors.content) {
      setErrors(prev => ({ ...prev, content: '' }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      // Clear content error when image is attached
      if (errors.content) {
        setErrors(prev => ({ ...prev, content: '' }));
      }
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    // Plan validation
    if (!formData.plan) {
      newErrors.plan = 'Please select a plan';
    }

    // Signer name validation (unless anonymous)
    if (!formData.isAnonymous && !formData.signerName.trim()) {
      newErrors.signerName = 'Please enter signer name or check anonymous';
    }

    // Recipient name validation
    if (!formData.recipientName.trim()) {
      newErrors.recipientName = 'Please enter recipient name';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your valid e-mail address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid e-mail address';
    }

    // Message or image validation
    if (!formData.text.trim() && !formData.image) {
      newErrors.content = 'Please write a message or attach an image';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Check for warnings
    if (!formData.image && !showImageWarning) {
      setShowImageWarning(true);
      return;
    }

    if (!formData.text.trim() && !showMessageWarning) {
      setShowMessageWarning(true);
      return;
    }

    // If we get here, proceed with submission
    console.log('Form submitted:', formData);
    router.push(`/payment?plan=${formData.plan}`);
  };

  const handleConfirmSubmit = () => {
    setShowImageWarning(false);
    setShowMessageWarning(false);
    console.log('Form submitted:', formData);
    router.push(`/payment?plan=${formData.plan}`);
  };

  const handleCancelSubmit = () => {
    setShowImageWarning(false);
    setShowMessageWarning(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Create Your Page
        </h1>

        <h2 className="text-2xl text-white text-center mb-2">
          Selected Plan: <span className="text-purple-400 capitalize">{selectedPlan}</span>
        </h2>

        <h3 className="text-xl text-white text-left mb-4">
          Fill in the fields below to create a page
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Plan Selection */}
              <div>
                <label className="block text-white font-semibold mb-3">
                  Select Plan
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="relative cursor-pointer">
                    <input
                      type="radio"
                      name="plan"
                      value="basic"
                      checked={formData.plan === 'basic'}
                      onChange={(e) => handleInputChange('plan', e.target.value)}
                      className="sr-only"
                    />
                    <div className={`p-4 rounded-lg border-2 transition-all ${
                      formData.plan === 'basic' 
                        ? 'border-purple-500 bg-purple-500/20' 
                        : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
                    }`}>
                      <div className="text-white font-medium">Basic Plan</div>
                      <div className="text-gray-300 text-sm">$9.99</div>
                    </div>
                  </label>
                  <label className="relative cursor-pointer">
                    <input
                      type="radio"
                      name="plan"
                      value="pro"
                      checked={formData.plan === 'pro'}
                      onChange={(e) => handleInputChange('plan', e.target.value)}
                      className="sr-only"
                    />
                    <div className={`p-4 rounded-lg border-2 transition-all ${
                      formData.plan === 'pro' 
                        ? 'border-purple-500 bg-purple-500/20' 
                        : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
                    }`}>
                      <div className="text-white font-medium">Pro Plan</div>
                      <div className="text-gray-300 text-sm">$19.99</div>
                    </div>
                  </label>
                </div>
                {errors.plan && (
                  <div className="text-red-400 text-sm mt-2">{errors.plan}</div>
                )}
              </div>

              {/* Signer's Name with Anonymous Toggle */}
              <div>
                <label className="block text-white font-semibold mb-3">
                  Signer&apos;s Name
                </label>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={formData.signerName}
                    onChange={(e) => handleInputChange('signerName', e.target.value)}
                                          placeholder={formData.isAnonymous ? "Anonymous" : "Enter signer's name"}
                      className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors ${
                        errors.signerName ? 'border-red-500' : 'border-gray-600'
                      }`}
                    disabled={formData.isAnonymous}
                  />
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.isAnonymous}
                      onChange={(e) => handleInputChange('isAnonymous', e.target.checked)}
                      className="w-4 h-4 text-purple-500 bg-gray-800 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
                    />
                    <span className="text-white">Keep anonymous</span>
                  </label>
                </div>
                {errors.signerName && (
                  <div className="text-red-400 text-sm mt-2">{errors.signerName}</div>
                )}
              </div>

              {/* Recipient's Name */}
              <div>
                <label className="block text-white font-semibold mb-3">
                  Recipient&apos;s Name
                </label>
                <input
                  type="text"
                  value={formData.recipientName}
                  onChange={(e) => handleInputChange('recipientName', e.target.value)}
                                      placeholder="Enter recipient's name"
                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors ${
                      errors.recipientName ? 'border-red-500' : 'border-gray-600'
                    }`}
                />
                {errors.recipientName && (
                  <div className="text-red-400 text-sm mt-2">{errors.recipientName}</div>
                )}
              </div>

              {/* Email Field */}
              <div>
                <div className="mb-3">
                  <label className="block text-white font-semibold">
                    Your E-mail
                  </label>
                  <p className="text-gray-300 text-sm italic">
                    (to receive the Page Link and QR Code)
                  </p>
                </div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                                      placeholder="Enter your e-mail address"
                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-600'
                    }`}
                />
                {errors.email && (
                  <div className="text-red-400 text-sm mt-2">{errors.email}</div>
                )}
              </div>

              {/* Image Attachment */}
              <div>
                <label className="block text-white font-semibold mb-3">
                  Image Attachment
                </label>
                <div className="flex items-center gap-4">
                  {imagePreview && (
                    <div className="flex-shrink-0">
                      <img src={imagePreview} alt="Preview" className="w-32 h-32 object-cover rounded-lg" />
                    </div>
                  )}
                  <div className="flex-1 border-2 border-dashed border-gray-400 rounded-lg p-6 text-center hover:border-purple-500 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      multiple={false}
                      onChange={handleImageChange}
                      className="hidden"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload" className="cursor-pointer">
                      <div className="text-gray-300 mb-2">
                        <svg className="mx-auto h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="text-white font-medium">
                        {imagePreview ? 'Click to change the image' : 'Click to upload a image'}
                      </div>
                      <div className="text-gray-400 text-sm">PNG, JPG, GIF up to 10MB</div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Text Field */}
              <div>
                <label className="block text-white font-semibold mb-3">
                  Your Message
                </label>
                <textarea
                  value={formData.text}
                  onChange={(e) => handleInputChange('text', e.target.value)}
                                      placeholder="Write a message..."
                    rows={4}
                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none ${
                      errors.content ? 'border-red-500' : 'border-gray-600'
                    }`}
                />
                {errors.content && (
                  <div className="text-red-400 text-sm mt-2">{errors.content}</div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full cursor-pointer bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105"
              >
                Create Page
              </button>
            </form>
          </div>

          {/* Preview Section */}
          <div className="flex flex-col items-center">
            {/* Preview Title */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Page Preview</h2>
              <p className="text-gray-300 text-sm">Generated from your form</p>
            </div>
            
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-80 h-[600px] rounded-[3rem] p-1 shadow-2xl bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900">
                <div className="w-full h-full bg-gradient-to-t from-purple-900 to-gray-900 rounded-[2.5rem] p-3">
                  {/* Phone Screen */}
                  <div className="w-full h-full bg-gray rounded-[2rem] overflow-hidden relative">
                  {/* Browser Header */}
                  <div className="bg-gray-100 h-12 flex items-center justify-between px-4 border-b">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-white rounded-lg px-3 py-1 text-xs text-gray-600 border">
                        https://myapp.com/...
                      </div>
                    </div>
                    <div className="w-6 h-6">
                      <svg className="w-full h-full text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </div>
                  </div>

                  {/* Document Content */}
                  <div className="p-6 space-y-4">

                    {/* Plan Info */}
                    {/* {formData.plan && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Selected Plan:</div>
                        <div className="font-semibold text-gray-800 capitalize">{formData.plan}</div>
                      </div>
                    )} */}

                    {/* Signer Info */}
                    {formData.signerName && !formData.isAnonymous && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">From:</div>
                        <div className="font-semibold text-gray-800">{formData.signerName}</div>
                      </div>
                    )}
                    {formData.isAnonymous && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">From:</div>
                        <div className="font-semibold text-gray-800">Anonymous</div>
                      </div>
                    )}

                    {/* Recipient Info */}
                    {formData.recipientName && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">To:</div>
                        <div className="font-semibold text-gray-800">{formData.recipientName}</div>
                      </div>
                    )}

                    {/* Image Preview */}
                    {imagePreview && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600 mb-2">Attached Image:</div>
                        <img src={imagePreview} alt="Preview" className="w-full h-32 object-cover rounded" />
                      </div>
                    )}

                    {/* Text Content */}
                    {formData.text && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600 mb-2">Message:</div>
                        <div className="text-gray-800 whitespace-pre-wrap">{formData.text}</div>
                      </div>
                    )}

                    {/* Placeholder when no data */}
                    {!formData.plan && !formData.signerName && !formData.recipientName && !formData.text && !imagePreview && (
                      <div className="text-center text-gray-500 py-8">
                        <div className="text-4xl mb-2">📄</div>
                        <div>Fill out the form to see preview</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

              {/* Phone Shadow */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-4 bg-black/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Warning Modal */}
      {showImageWarning && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 max-w-md mx-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No Image Attached</h3>
              <p className="text-gray-300 mb-6">Are you sure you don&apos;t want to include an image on your page?</p>
              <div className="flex gap-3">
                <button
                  onClick={handleCancelSubmit}
                  className="flex-1 px-4 py-2 cursor-pointer bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Go Back
                </button>
                <button
                  onClick={handleConfirmSubmit}
                  className="flex-1 px-4 py-2 cursor-pointer bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Message Warning Modal */}
      {showMessageWarning && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 max-w-md mx-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No Message Written</h3>
              <p className="text-gray-300 mb-6">Are you sure you don&apos;t want to write a message on your page?</p>
              <div className="flex gap-3">
                <button
                  onClick={handleCancelSubmit}
                  className="flex-1 px-4 py-2 cursor-pointer bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Go Back
                </button>
                <button
                  onClick={handleConfirmSubmit}
                  className="flex-1 px-4 py-2 cursor-pointer bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 