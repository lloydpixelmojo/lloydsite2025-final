'use client';

interface AssessmentButtonProps {
  onClick: () => void;
  className?: string;
}

export function AssessmentButton({ onClick, className = '' }: AssessmentButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ${className}`}
    >
      Start Free Assessment
    </button>
  );
}
