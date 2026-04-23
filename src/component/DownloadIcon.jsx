/*
  DownloadIcon.jsx
  Simple SVG download icon for use in question paper links.
*/
import React from 'react';

export default function DownloadIcon({ style = {}, className = '' }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className={className}
    >
      <path
        d="M10 3v10m0 0l-4-4m4 4l4-4M4 17h12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
