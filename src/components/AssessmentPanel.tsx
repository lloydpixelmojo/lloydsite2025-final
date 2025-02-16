'use client';

import { Fragment, useState } from 'react';
import { Dialog, Transition, Tab } from '@headlessui/react';
import Button from './Button';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface AssessmentPanelProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface Question {
  id: string;
  text: string;
  options: { text: string; score: number }[];
}

interface FormData {
  name: string;
  email: string;
  company: string;
}

const assessmentTypes = [
  {
    name: 'UI/UX Design',
    description: 'Evaluate your user interface and experience design maturity',
    questions: [
      {
        id: 'ux1',
        text: 'How often do you conduct user research?',
        options: [
          { text: 'Never', score: 0 },
          { text: 'Occasionally', score: 5 },
          { text: 'For major features', score: 8 },
          { text: 'Regularly', score: 10 }
        ]
      },
      {
        id: 'ux2',
        text: 'Do you have a design system in place?',
        options: [
          { text: 'No design system', score: 0 },
          { text: 'Basic style guide', score: 5 },
          { text: 'Partial design system', score: 8 },
          { text: 'Complete design system', score: 10 }
        ]
      },
      {
        id: 'ux3',
        text: 'How do you handle accessibility?',
        options: [
          { text: 'Not considered', score: 0 },
          { text: 'Basic compliance', score: 5 },
          { text: 'WCAG AA standard', score: 8 },
          { text: 'WCAG AAA standard', score: 10 }
        ]
      }
    ]
  },
  {
    name: 'Branding',
    description: 'Assess your brand strategy and identity effectiveness',
    questions: [
      {
        id: 'brand1',
        text: 'How consistent is your brand across channels?',
        options: [
          { text: 'Inconsistent', score: 0 },
          { text: 'Somewhat consistent', score: 5 },
          { text: 'Mostly consistent', score: 8 },
          { text: 'Fully consistent', score: 10 }
        ]
      },
      {
        id: 'brand2',
        text: 'Do you have brand guidelines?',
        options: [
          { text: 'No guidelines', score: 0 },
          { text: 'Basic guidelines', score: 5 },
          { text: 'Detailed guidelines', score: 8 },
          { text: 'Comprehensive guidelines', score: 10 }
        ]
      },
      {
        id: 'brand3',
        text: 'How often do you review brand performance?',
        options: [
          { text: 'Never', score: 0 },
          { text: 'Yearly', score: 5 },
          { text: 'Quarterly', score: 8 },
          { text: 'Monthly', score: 10 }
        ]
      }
    ]
  },
  {
    name: 'Content/SEO',
    description: 'Measure your content marketing and SEO performance',
    questions: [
      {
        id: 'content1',
        text: 'How often do you publish content?',
        options: [
          { text: 'Rarely', score: 0 },
          { text: 'Monthly', score: 5 },
          { text: 'Weekly', score: 8 },
          { text: 'Multiple times per week', score: 10 }
        ]
      },
      {
        id: 'content2',
        text: 'Do you have an SEO strategy?',
        options: [
          { text: 'No strategy', score: 0 },
          { text: 'Basic optimization', score: 5 },
          { text: 'Detailed strategy', score: 8 },
          { text: 'Comprehensive strategy', score: 10 }
        ]
      },
      {
        id: 'content3',
        text: 'How do you track content performance?',
        options: [
          { text: 'No tracking', score: 0 },
          { text: 'Basic analytics', score: 5 },
          { text: 'Multiple metrics', score: 8 },
          { text: 'Advanced analytics', score: 10 }
        ]
      }
    ]
  }
];

export function AssessmentPanel({ isOpen, setIsOpen }: AssessmentPanelProps) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [currentStep, setCurrentStep] = useState<'questions' | 'results' | 'contact'>('questions');
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', company: '' });

  const handleAnswer = (questionId: string, score: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: score }));
  };

  const calculateScore = () => {
    const scores = Object.values(answers);
    return Math.round((scores.reduce((a, b) => a + b, 0) / (scores.length * 10)) * 100);
  };

  const isQuestionnaireComplete = () => {
    const requiredQuestions = assessmentTypes[selectedTab].questions;
    return requiredQuestions.every(q => answers[q.id] !== undefined);
  };

  const handleNext = () => {
    if (currentStep === 'questions') {
      setCurrentStep('results');
    } else if (currentStep === 'results') {
      setCurrentStep('contact');
    }
  };

  const handleBack = () => {
    if (currentStep === 'results') {
      setCurrentStep('questions');
    } else if (currentStep === 'contact') {
      setCurrentStep('results');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsOpen(false);
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 dark:bg-gray-900 bg-opacity-75 dark:bg-opacity-75 transition-opacity" />
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
                    <div className="px-4 sm:px-6 py-4 border-b border-gray-200 dark:border-gray-800">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-xl font-semibold text-gray-900 dark:text-white">
                          Free Assessment
                        </Dialog.Title>
                        <button
                          type="button"
                          className="rounded-lg p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div className="relative flex-1 px-4 sm:px-6">
                      <div className="py-4">
                        {currentStep === 'questions' && (
                          <div>
                            <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
                              <Tab.List className="flex space-x-1 rounded-lg bg-gray-100 dark:bg-gray-800 p-1">
                                {assessmentTypes.map((type) => (
                                  <Tab
                                    key={type.name}
                                    className={({ selected }) =>
                                      classNames(
                                        'w-full rounded-md py-2 text-sm font-medium',
                                        'focus:outline-none focus:ring-2 focus:ring-brand',
                                        selected
                                          ? 'bg-white dark:bg-gray-900 text-brand dark:text-brand-400 shadow-sm'
                                          : 'text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand-400'
                                      )
                                    }
                                  >
                                    {type.name}
                                  </Tab>
                                ))}
                              </Tab.List>
                              <Tab.Panels className="mt-4">
                                {assessmentTypes.map((type) => (
                                  <Tab.Panel key={type.name}>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                      {type.description}
                                    </p>
                                    <div className="space-y-4">
                                      {type.questions.map((question) => (
                                        <div key={question.id} className="space-y-2">
                                          <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                                            {question.text}
                                          </h4>
                                          <div className="space-y-2">
                                            {question.options.map((option) => (
                                              <button
                                                key={option.text}
                                                onClick={() => handleAnswer(question.id, option.score)}
                                                className={classNames(
                                                  'w-full text-left px-3 py-2 text-sm rounded-md border transition-colors',
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
                            <div className="mt-6 flex justify-end">
                              <Button
                                onClick={handleNext}
                                disabled={!isQuestionnaireComplete()}
                                size="sm"
                              >
                                View Results
                              </Button>
                            </div>
                          </div>
                        )}

                        {currentStep === 'results' && (
                          <div>
                            <div className="text-center mb-6">
                              <div className="text-4xl font-bold text-brand mb-2">
                                {calculateScore()}%
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {assessmentTypes[selectedTab].name} Score
                              </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
                              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Response Summary</h4>
                              <ul className="space-y-2">
                                {assessmentTypes[selectedTab].questions.map((question) => (
                                  <li key={question.id} className="flex items-start gap-2 text-sm">
                                    <svg className="h-5 w-5 flex-none text-brand mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-gray-600 dark:text-gray-400">
                                      {question.text}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="flex justify-between">
                              <Button
                                variant="outline"
                                onClick={handleBack}
                                size="sm"
                              >
                                Back
                              </Button>
                              <Button
                                onClick={handleNext}
                                size="sm"
                              >
                                Get Full Report
                              </Button>
                            </div>
                          </div>
                        )}

                        {currentStep === 'contact' && (
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                              Enter your details to receive a comprehensive report with actionable insights.
                            </p>
                            <form onSubmit={handleSubmit} className="space-y-4">
                              <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                  Name
                                </label>
                                <input
                                  type="text"
                                  id="name"
                                  required
                                  value={formData.name}
                                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                  className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm bg-white dark:bg-gray-800 focus:ring-2 focus:ring-brand focus:border-transparent"
                                  placeholder="John Doe"
                                />
                              </div>
                              <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                  Email
                                </label>
                                <input
                                  type="email"
                                  id="email"
                                  required
                                  value={formData.email}
                                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                  className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm bg-white dark:bg-gray-800 focus:ring-2 focus:ring-brand focus:border-transparent"
                                  placeholder="john@example.com"
                                />
                              </div>
                              <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                  Company
                                </label>
                                <input
                                  type="text"
                                  id="company"
                                  required
                                  value={formData.company}
                                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                                  className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm bg-white dark:bg-gray-800 focus:ring-2 focus:ring-brand focus:border-transparent"
                                  placeholder="Acme Inc."
                                />
                              </div>
                              <div className="flex justify-between">
                                <Button
                                  variant="outline"
                                  onClick={handleBack}
                                  size="sm"
                                >
                                  Back
                                </Button>
                                <Button type="submit" size="sm">
                                  Send Report
                                </Button>
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

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
