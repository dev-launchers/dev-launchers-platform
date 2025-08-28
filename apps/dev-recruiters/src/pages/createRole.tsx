import React, { useState } from 'react';
import { ChevronLeft, Calendar, Clock, Link } from 'lucide-react';
import { Button } from '@devlaunchers/components/src/components/atoms';
import { useRouter } from 'next/router';

const NewRoleSubmission = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    estimatedStartDate: '',
    title: '',
    department: '',
    projectTeam: '',
    skillsRequired: '',
    timeCommitment: '',
    experienceLevel: 'Beginner',
    roleDescription: '',
    roleResponsibilities: [],
    whyJoin: '',
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field, value, checked) => {
    setFormData((prev) => ({
      ...prev,
      [field]: checked
        ? [...prev[field], value]
        : prev[field].filter((item) => item !== value),
    }));
  };

  const submitForm = () => {
    console.log('Form submitted:', formData);
  };

  const steps = [
    {
      title: 'New Role Submission',
      subtitle: 'Please fill out the form below',
      content: (
        <div className="space-y-6">
          <div>
            <label className="block text-white text-sm mb-2">
              Estimated Start Date
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="DD / MM / YYYY"
                className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400"
                value={formData.estimatedStartDate}
                onChange={(e) =>
                  handleInputChange('estimatedStartDate', e.target.value)
                }
              />
              <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <div>
            <label className="block text-white text-sm mb-2">Title *</label>
            <input
              type="text"
              placeholder="e.g. Information Product Manager (AI Technology)"
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
            />
          </div>

          <div>
            <label className="block text-white text-sm mb-2">
              Department *
            </label>
            <input
              type="text"
              placeholder="e.g. Information Technology, Research, Marketing..."
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400"
              value={formData.department}
              onChange={(e) => handleInputChange('department', e.target.value)}
            />
          </div>

          <div>
            <label className="block text-white text-sm mb-2">
              Project Team *
            </label>
            <input
              type="text"
              placeholder="Project Snowball"
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400"
              value={formData.projectTeam}
              onChange={(e) => handleInputChange('projectTeam', e.target.value)}
            />
          </div>

          <div>
            <label className="block text-white text-sm mb-2">
              Skills Required *
            </label>
            <input
              type="text"
              placeholder="e.g. Data Analysis, Programming, System, UX Design, Information Design, UX/UI..."
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400"
              value={formData.skillsRequired}
              onChange={(e) =>
                handleInputChange('skillsRequired', e.target.value)
              }
            />
          </div>

          <div>
            <label className="block text-white text-sm mb-2">
              Time Commitment *
            </label>
            <input
              type="text"
              placeholder="e.g. 10 hours per week, 5 hours per week, Part time, Full time, etc."
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400"
              value={formData.timeCommitment}
              onChange={(e) =>
                handleInputChange('timeCommitment', e.target.value)
              }
            />
          </div>
        </div>
      ),
    },
    {
      title: 'New Role Submission',
      subtitle: 'Last saved: 13:26pm EST',
      content: (
        <div className="space-y-6">
          <div>
            <label className="block text-white text-sm mb-2">
              Experience Level *
            </label>
            <div className="space-y-2">
              {['Beginner', 'Intermediate', 'Advanced', 'Expert'].map(
                (level) => (
                  <label key={level} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="experienceLevel"
                      value={level}
                      checked={formData.experienceLevel === level}
                      onChange={(e) =>
                        handleInputChange('experienceLevel', e.target.value)
                      }
                      className="text-purple-500"
                    />
                    <span className="text-white text-sm">{level}</span>
                  </label>
                )
              )}
            </div>
          </div>

          <div>
            <label className="block text-white text-sm mb-2">
              Role Description *
            </label>
            <textarea
              rows={4}
              placeholder="This role focuses on the shift. Your colleagues will thank us now when we deliver their experience seamlessly."
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 resize-none"
              value={formData.roleDescription}
              onChange={(e) =>
                handleInputChange('roleDescription', e.target.value)
              }
            />
          </div>

          <div>
            <label className="block text-white text-sm mb-2">
              Role Responsibilities *
            </label>
            <div className="bg-gray-800 border border-gray-600 rounded p-3 space-y-2">
              {[
                'Contribute to creating deliverables',
                'Design and develop robust backend solutions',
                'Oversee and manage active project initiatives',
              ].map((responsibility) => (
                <label
                  key={responsibility}
                  className="flex items-start space-x-2"
                >
                  <input
                    type="checkbox"
                    checked={formData.roleResponsibilities.includes(
                      responsibility
                    )}
                    onChange={(e) =>
                      handleCheckboxChange(
                        'roleResponsibilities',
                        responsibility,
                        e.target.checked
                      )
                    }
                    className="mt-1"
                  />
                  <span className="text-white text-sm">{responsibility}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-white text-sm mb-2">Why Join? *</label>
            <textarea
              rows={4}
              placeholder="Perhaps you will find yourself networked with the chance to impact how we meet needs and engage communities and long-term..."
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 resize-none"
              value={formData.whyJoin}
              onChange={(e) => handleInputChange('whyJoin', e.target.value)}
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-6">
          <Button
            type="primary"
            onClick={() => router.push('/dev-recruiters/dashboard')}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Return To Dashboard</span>
          </Button>
        </div>

        {/* Form Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold mb-1">
              {steps[currentStep].title}
            </h1>
            <p className="text-gray-400 text-sm">
              {steps[currentStep].subtitle}
            </p>
          </div>
        </div>

        {/* Form Content */}
        <div className="space-y-8">{steps[currentStep].content}</div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-12">
          <button
            className={`px-6 py-2 border border-gray-600 rounded text-sm ${
              currentStep === 0
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-gray-800'
            }`}
            onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)}
            disabled={currentStep === 0}
          >
            Previous Step
          </button>

          <button
            className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded text-sm"
            onClick={() => {
              if (currentStep < steps.length - 1) {
                setCurrentStep(currentStep + 1);
              } else {
                // Handle final submission
                submitForm();
              }
            }}
          >
            {currentStep < steps.length - 1 ? 'Continue Form' : 'Submit Form'}
          </button>
        </div>

        {/* Step Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentStep ? 'bg-purple-500' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewRoleSubmission;
