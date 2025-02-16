'use client';

import React from 'react';

interface AssessmentButtonProps {
  onClick: () => void;
  className?: string;
}

export default function AssessmentButton({ onClick, className = '' }: AssessmentButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center px-6 py-2.5 text-white bg-[#E9264A] rounded-lg hover:bg-[#d11f40] transition-colors ${className}`}
    >
      Start Free Assessment
    </button>
  );
}
