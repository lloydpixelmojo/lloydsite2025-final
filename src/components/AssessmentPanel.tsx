'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AssessmentPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

type AssessmentType = 'uiux' | 'branding' | 'content';
type Step = 'type-selection' | 'questions' | 'email';

const assessmentTypes = [
  {
    id: 'uiux',
    title: 'UI/UX Design',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    questions: [
      {
        id: 1,
        question: 'What are your main UI/UX challenges?',
        options: ['Low engagement', 'High bounce rate', 'Poor conversion']
      },
      {
        id: 2,
        question: 'Who is your target audience?',
        options: ['B2B professionals', 'B2C consumers', 'Mixed audience']
      }
    ]
  },
  {
    id: 'branding',
    title: 'Branding',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    questions: [
      {
        id: 1,
        question: 'What are your core brand values?',
        options: ['Innovation focused', 'Traditional values', 'Not clearly defined']
      },
      {
        id: 2,
        question: 'How consistent is your brand across channels?',
        options: ['Very consistent', 'Somewhat consistent', 'Inconsistent']
      }
    ]
  },
  {
    id: 'content',
    title: 'Content & SEO',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    questions: [
      {
        id: 1,
        question: 'How would you describe your content strategy?',
        options: ['Planned and consistent', 'Irregular posting', 'Reactive only']
      },
      {
        id: 2,
        question: 'What is your current SEO approach?',
        options: ['Strategic', 'Basic optimization', 'No strategy']
      }
    ]
  }
];

export default function AssessmentPanel({ isOpen, onClose }: AssessmentPanelProps) {
  const [currentStep, setCurrentStep] = useState<Step>('type-selection');
  const [selectedType, setSelectedType] = useState<AssessmentType | null>(null);
  const [answers, setAnswers] = useState<Record<string, { option: string; details?: string }>>({});
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleTypeSelect = (type: AssessmentType) => {
    setSelectedType(type);
    setCurrentStep('questions');
  };

  const handleAnswerSelect = (questionId: number, option: string) => {
    setAnswers(prev => ({
      ...prev,
      [`${selectedType}-${questionId}`]: { option }
    }));
  };

  const handleDetailsChange = (questionId: number, details: string) => {
    setAnswers(prev => ({
      ...prev,
      [`${selectedType}-${questionId}`]: { 
        ...prev[`${selectedType}-${questionId}`],
        details 
      }
    }));
  };

  const handleSubmit = async () => {
    if (!email) {
      setError('Please enter your email');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/assessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: selectedType,
          answers,
          email,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit assessment');
      }

      onClose();
      setCurrentStep('type-selection');
      setSelectedType(null);
      setAnswers({});
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30 }}
            className="fixed right-0 top-0 h-full w-full max-w-sm bg-white dark:bg-gray-900 shadow-xl overflow-y-auto"
          >
            <div className="p-4">
              <div className="flex justify-between items-center border-b dark:border-gray-800 pb-4 mb-6">
                <div>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">Digital Assessment</p>
                  <h2 className="text-base font-medium text-gray-900 dark:text-gray-100">
                    {currentStep === 'type-selection' ? 'Choose Assessment Type' :
                     currentStep === 'questions' ? assessmentTypes.find(t => t.id === selectedType)?.title :
                     'Complete Your Assessment'}
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {currentStep === 'type-selection' && (
                <div className="space-y-3">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Select an assessment type to evaluate your digital presence and receive personalized recommendations.
                  </p>
                  {assessmentTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => handleTypeSelect(type.id as AssessmentType)}
                      className="w-full p-3 text-left border dark:border-gray-800 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-blue-600 dark:text-blue-400">
                          {type.icon}
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">{type.title}</h3>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                            Get insights about your {type.title.toLowerCase()}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {currentStep === 'questions' && selectedType && (
                <div className="space-y-6">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-6">
                    <button
                      onClick={() => {
                        setCurrentStep('type-selection');
                        setSelectedType(null);
                      }}
                      className="flex items-center hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Back to types
                    </button>
                  </div>

                  {assessmentTypes.find(t => t.id === selectedType)?.questions.map((q, index) => (
                    <div key={q.id} className="pb-6 border-b dark:border-gray-800 last:border-0">
                      <div className="flex items-start gap-2 mb-3">
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">Q{index + 1}</span>
                        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">{q.question}</h3>
                      </div>
                      <div className="space-y-2 ml-6">
                        {q.options.map((option) => (
                          <button
                            key={option}
                            onClick={() => handleAnswerSelect(q.id, option)}
                            className={`w-full p-2.5 text-left text-sm border rounded-lg transition-colors ${
                              answers[`${selectedType}-${q.id}`]?.option === option
                                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                                : 'dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 text-gray-700 dark:text-gray-300'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                        <textarea
                          placeholder="Add any additional context... (optional)"
                          value={answers[`${selectedType}-${q.id}`]?.details || ''}
                          onChange={(e) => handleDetailsChange(q.id, e.target.value)}
                          className="mt-2 w-full p-2.5 text-sm border dark:border-gray-800 rounded-lg bg-transparent placeholder-gray-500"
                          rows={2}
                        />
                      </div>
                    </div>
                  ))}

                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={() => {
                        setCurrentStep('type-selection');
                        setSelectedType(null);
                      }}
                      className="flex-1 py-2 text-sm border dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setCurrentStep('email')}
                      className="flex-1 bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {currentStep === 'email' && (
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-6">
                      <button
                        onClick={() => setCurrentStep('questions')}
                        className="flex items-center hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to questions
                      </button>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 rounded-lg p-4 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-full">
                          <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">Initial Assessment Complete!</h3>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                            Based on your responses, we've identified several key opportunities:
                          </p>
                          <ul className="space-y-2">
                            {selectedType === 'uiux' && (
                              <>
                                <li className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300">
                                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"/>
                                  User engagement optimization potential
                                </li>
                                <li className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300">
                                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"/>
                                  Conversion funnel improvements
                                </li>
                              </>
                            )}
                            {selectedType === 'branding' && (
                              <>
                                <li className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300">
                                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"/>
                                  Brand consistency opportunities
                                </li>
                                <li className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300">
                                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"/>
                                  Visual identity enhancement areas
                                </li>
                              </>
                            )}
                            {selectedType === 'content' && (
                              <>
                                <li className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300">
                                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"/>
                                  Content strategy optimization points
                                </li>
                                <li className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300">
                                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"/>
                                  SEO improvement opportunities
                                </li>
                              </>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Get Your Full Report</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Enter your email to receive comprehensive insights and actionable recommendations.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full p-2.5 text-sm border dark:border-gray-800 rounded-lg bg-transparent placeholder-gray-500"
                    />

                    {error && (
                      <p className="text-xs text-red-600 dark:text-red-400">{error}</p>
                    )}

                    <div className="flex gap-3 pt-2">
                      <button
                        onClick={() => setCurrentStep('questions')}
                        className="flex-1 py-2 text-sm border dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        Back
                      </button>
                      <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="flex-1 bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                      >
                        {isSubmitting ? 'Submitting...' : 'Get Report'}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
