'use client';

export default function AssessmentButton() {
  const handleAssessmentClick = () => {
    const assessmentPanel = document.querySelector('[data-assessment-trigger]');
    if (assessmentPanel) {
      (assessmentPanel as HTMLButtonElement).click();
    }
  };

  return (
    <button 
      onClick={handleAssessmentClick}
      className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
    >
      Start Free Assessment
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}
