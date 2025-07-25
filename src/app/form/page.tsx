'use client';

import { useState } from 'react';
import { FormData } from '@/types';

export default function FormPage() {
  const [formData, setFormData] = useState<FormData>({
    plan: '',
    signerName: '',
    isAnonymous: false,
    recipientName: '',
    image: null,
    text: ''
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Create Your Document
        </h1>
        
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
                      <div className="text-gray-300 text-sm">$9.99/month</div>
                    </div>
                  </label>
                  <label className="relative cursor-pointer">
                    <input
                      type="radio"
                      name="plan"
                      value="premium"
                      checked={formData.plan === 'premium'}
                      onChange={(e) => handleInputChange('plan', e.target.value)}
                      className="sr-only"
                    />
                    <div className={`p-4 rounded-lg border-2 transition-all ${
                      formData.plan === 'premium' 
                        ? 'border-purple-500 bg-purple-500/20' 
                        : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
                    }`}>
                      <div className="text-white font-medium">Premium Plan</div>
                      <div className="text-gray-300 text-sm">$19.99/month</div>
                    </div>
                  </label>
                </div>
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
                    placeholder="Enter signer's name"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
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
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              {/* Image Attachment */}
              <div>
                <label className="block text-white font-semibold mb-3">
                  Image Attachment
                </label>
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-purple-500 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
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
                    <div className="text-white font-medium">Click to upload image</div>
                    <div className="text-gray-400 text-sm">PNG, JPG, GIF up to 10MB</div>
                  </label>
                </div>
                {imagePreview && (
                  <div className="mt-4">
                    <img src={imagePreview} alt="Preview" className="w-32 h-32 object-cover rounded-lg" />
                  </div>
                )}
              </div>

              {/* Text Field */}
              <div>
                <label className="block text-white font-semibold mb-3">
                  Additional Text
                </label>
                <textarea
                  value={formData.text}
                  onChange={(e) => handleInputChange('text', e.target.value)}
                  placeholder="Enter additional text..."
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105"
              >
                Create Document
              </button>
            </form>
          </div>

          {/* Preview Section */}
          <div className="flex justify-center items-start">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-8 border-gray-800">
                {/* Phone Screen */}
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                  {/* Browser Header */}
                  <div className="bg-gray-100 h-12 flex items-center justify-between px-4 border-b">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-white rounded-lg px-3 py-1 text-xs text-gray-600 border">
                        Document Preview
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
                    {/* Header */}
                    <div className="text-center border-b pb-4">
                      <h2 className="text-xl font-bold text-gray-800">Document Preview</h2>
                      <p className="text-gray-600 text-sm">Generated from your form</p>
                    </div>

                    {/* Plan Info */}
                    {formData.plan && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Selected Plan:</div>
                        <div className="font-semibold text-gray-800 capitalize">{formData.plan}</div>
                      </div>
                    )}

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

              {/* Phone Shadow */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-4 bg-black/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 