'use client';

import { Fragment, useState } from 'react';
import { Dialog, Transition, Tab } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface AssessmentPanelProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface Question {
  id: number;
  text: string;
  options: { id: number; text: string; score: number }[];
}

const assessmentTypes = [
  {
    name: 'UI/UX Design',
    description: 'Evaluate your user interface and experience design maturity',
    questions: [
      {
        id: 1,
        text: 'How often do you conduct user research?',
        options: [
          { id: 1, text: 'Never', score: 0 },
          { id: 2, text: 'Occasionally', score: 5 },
          { id: 3, text: 'For major features', score: 8 },
          { id: 4, text: 'Regularly', score: 10 }
        ]
      },
      {
        id: 2,
        text: 'Do you have a design system in place?',
        options: [
          { id: 1, text: 'No design system', score: 0 },
          { id: 2, text: 'Basic style guide', score: 5 },
          { id: 3, text: 'Partial design system', score: 8 },
          { id: 4, text: 'Complete design system', score: 10 }
        ]
      },
      {
        id: 3,
        text: 'How do you handle accessibility?',
        options: [
          { id: 1, text: 'Not considered', score: 0 },
          { id: 2, text: 'Basic compliance', score: 5 },
          { id: 3, text: 'WCAG AA standard', score: 8 },
          { id: 4, text: 'WCAG AAA standard', score: 10 }
        ]
      }
    ]
  },
  {
    name: 'Branding',
    description: 'Assess your brand strategy and identity effectiveness',
    questions: [
      {
        id: 1,
        text: 'How consistent is your brand across channels?',
        options: [
          { id: 1, text: 'Inconsistent', score: 0 },
          { id: 2, text: 'Somewhat consistent', score: 5 },
          { id: 3, text: 'Mostly consistent', score: 8 },
          { id: 4, text: 'Fully consistent', score: 10 }
        ]
      },
      {
        id: 2,
        text: 'Do you have brand guidelines?',
        options: [
          { id: 1, text: 'No guidelines', score: 0 },
          { id: 2, text: 'Basic guidelines', score: 5 },
          { id: 3, text: 'Detailed guidelines', score: 8 },
          { id: 4, text: 'Comprehensive guidelines', score: 10 }
        ]
      },
      {
        id: 3,
        text: 'How often do you review brand performance?',
        options: [
          { id: 1, text: 'Never', score: 0 },
          { id: 2, text: 'Yearly', score: 5 },
          { id: 3, text: 'Quarterly', score: 8 },
          { id: 4, text: 'Monthly', score: 10 }
        ]
      }
    ]
  },
  {
    name: 'Content/SEO',
    description: 'Measure your content marketing and SEO performance',
    questions: [
      {
        id: 1,
        text: 'How often do you publish content?',
        options: [
          { id: 1, text: 'Rarely', score: 0 },
          { id: 2, text: 'Monthly', score: 5 },
          { id: 3, text: 'Weekly', score: 8 },
          { id: 4, text: 'Multiple times per week', score: 10 }
        ]
      },
      {
        id: 2,
        text: 'Do you have an SEO strategy?',
        options: [
          { id: 1, text: 'No strategy', score: 0 },
          { id: 2, text: 'Basic optimization', score: 5 },
          { id: 3, text: 'Detailed strategy', score: 8 },
          { id: 4, text: 'Comprehensive strategy', score: 10 }
        ]
      },
      {
        id: 3,
        text: 'How do you track content performance?',
        options: [
          { id: 1, text: 'No tracking', score: 0 },
          { id: 2, text: 'Basic analytics', score: 5 },
          { id: 3, text: 'Multiple metrics', score: 8 },
          { id: 4, text: 'Advanced analytics', score: 10 }
        ]
      }
    ]
  }
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function AssessmentPanel({ isOpen, setIsOpen }: AssessmentPanelProps) {
  const [currentStep, setCurrentStep] = useState<'questions' | 'preview' | 'form'>('questions');
  const [selectedTab, setSelectedTab] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });

  const handleAnswerSelect = (questionId: number, score: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: score }));
  };

  const calculateScore = () => {
    const totalQuestions = assessmentTypes[selectedTab].questions.length;
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
    return Math.round((totalScore / (totalQuestions * 10)) * 100);
  };

  const handleNext = () => {
    if (currentStep === 'questions') {
      setCurrentStep('preview');
    } else if (currentStep === 'preview') {
      setCurrentStep('form');
    }
  };

  const handleBack = () => {
    if (currentStep === 'preview') {
      setCurrentStep('questions');
    } else if (currentStep === 'form') {
      setCurrentStep('preview');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data and assessment results to your backend
    setIsOpen(false);
    // Reset state
    setCurrentStep('questions');
    setAnswers({});
    setFormData({ name: '', email: '', company: '' });
  };

  const isQuestionnaireComplete = () => {
    return assessmentTypes[selectedTab].questions.every(q => answers[q.id] !== undefined);
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white dark:bg-gray-900 shadow-xl">
                    <div className="px-4 py-4 sm:px-6 border-b border-gray-200 dark:border-gray-800">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-xl font-semibold leading-6 text-gray-900 dark:text-white">
                          Free Assessment
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="relative flex-1 px-4 sm:px-6">
                      <div className="py-4">
                        {currentStep === 'questions' && (
                          <>
                            <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
                              <Tab.List className="flex space-x-1 rounded-xl bg-brand-100 dark:bg-brand-900/20 p-1">
                                {assessmentTypes.map((type) => (
                                  <Tab
                                    key={type.name}
                                    className={({ selected }) =>
                                      classNames(
                                        'w-full rounded-lg py-3 text-sm font-medium leading-5',
                                        'ring-white/60 ring-offset-2 ring-offset-brand-400 focus:outline-none focus:ring-2',
                                        selected
                                          ? 'bg-white dark:bg-gray-800 text-brand dark:text-brand-400 shadow'
                                          : 'text-gray-600 dark:text-gray-400 hover:bg-white/[0.12] hover:text-brand dark:hover:text-brand-400'
                                      )
                                    }
                                  >
                                    {type.name}
                                  </Tab>
                                ))}
                              </Tab.List>
                              <Tab.Panels className="mt-8">
                                {assessmentTypes.map((type, idx) => (
                                  <Tab.Panel
                                    key={type.name}
                                    className={classNames(
                                      'rounded-xl bg-white dark:bg-gray-800 p-6',
                                      'ring-white/60 ring-offset-2 ring-offset-brand-400 focus:outline-none focus:ring-2'
                                    )}
                                  >
                                    <div className="space-y-6">
                                      {type.questions.map((question) => (
                                        <div key={question.id} className="space-y-3">
                                          <h3 className="text-base font-medium text-gray-900 dark:text-white">
                                            {question.text}
                                          </h3>
                                          <div className="space-y-2">
                                            {question.options.map((option) => (
                                              <button
                                                key={option.id}
                                                onClick={() => handleAnswerSelect(question.id, option.score)}
                                                className={classNames(
                                                  'w-full text-left px-3 py-2 text-sm rounded-lg border transition-colors',
                                                  answers[question.id] === option.score
                                                    ? 'border-brand bg-brand-50 dark:bg-brand-900/20'
                                                    : 'border-gray-200 dark:border-gray-700 hover:border-brand'
                                                )}
                                              >
                                                {option.text}
                                              </button>
                                            ))}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </Tab.Panel>
                                ))}
                              </Tab.Panels>
                            </Tab.Group>
                            <div className="mt-8">
                              <button
                                onClick={handleNext}
                                disabled={!isQuestionnaireComplete()}
                                className={classNames(
                                  'w-full rounded-lg px-4 py-3 text-sm font-semibold text-white shadow-sm',
                                  isQuestionnaireComplete()
                                    ? 'bg-brand hover:bg-brand-600'
                                    : 'bg-gray-400 cursor-not-allowed'
                                )}
                              >
                                Preview Results
                              </button>
                            </div>
                          </>
                        )}

                        {currentStep === 'preview' && (
                          <div className="space-y-6">
                            <div className="text-center">
                              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                                Your {assessmentTypes[selectedTab].name} Score
                              </h3>
                              <div className="text-5xl font-bold text-brand mb-4">
                                {calculateScore()}%
                              </div>
                              <p className="text-gray-600 dark:text-gray-300">
                                Based on your answers, here's how your {assessmentTypes[selectedTab].name.toLowerCase()} strategy measures up.
                              </p>
                            </div>
                            <div className="space-y-4">
                              <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                                Key Insights:
                              </h4>
                              <ul className="space-y-2">
                                {assessmentTypes[selectedTab].questions.map((question) => (
                                  <li key={question.id} className="flex items-start gap-2">
                                    <svg className="h-6 w-6 flex-none text-brand mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-gray-600 dark:text-gray-300">
                                      {question.options.find(opt => opt.score === answers[question.id])?.text}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="flex gap-4">
                              <button
                                onClick={handleBack}
                                className="w-1/2 rounded-lg px-4 py-3 text-sm font-semibold border-2 border-gray-200 dark:border-gray-700 hover:border-brand"
                              >
                                Back
                              </button>
                              <button
                                onClick={handleNext}
                                className="w-1/2 rounded-lg px-4 py-3 text-sm font-semibold text-white bg-brand hover:bg-brand-600"
                              >
                                Get Full Report
                              </button>
                            </div>
                          </div>
                        )}

                        {currentStep === 'form' && (
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                Get Your Full Report
                              </h3>
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                Enter your details below and we'll send you a comprehensive report with actionable recommendations.
                              </p>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-4">
                              <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                  Full Name
                                </label>
                                <input
                                  type="text"
                                  id="name"
                                  required
                                  value={formData.name}
                                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm bg-white dark:bg-gray-800 focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                                  placeholder="John Doe"
                                />
                              </div>
                              <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                  Email Address
                                </label>
                                <input
                                  type="email"
                                  id="email"
                                  required
                                  value={formData.email}
                                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm bg-white dark:bg-gray-800 focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                                  placeholder="john@example.com"
                                />
                              </div>
                              <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                  Company Name
                                </label>
                                <input
                                  type="text"
                                  id="company"
                                  required
                                  value={formData.company}
                                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm bg-white dark:bg-gray-800 focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                                  placeholder="Acme Inc."
                                />
                              </div>
                              <div className="flex gap-3 pt-2">
                                <button
                                  type="button"
                                  onClick={handleBack}
                                  className="w-1/2 rounded-lg px-3 py-2 text-sm font-medium border border-gray-300 dark:border-gray-600 hover:border-brand"
                                >
                                  Back
                                </button>
                                <button
                                  type="submit"
                                  className="w-1/2 rounded-lg px-3 py-2 text-sm font-medium text-white bg-brand hover:bg-brand-600"
                                >
                                  Send Report
                                </button>
                              </div>
                            </form>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
