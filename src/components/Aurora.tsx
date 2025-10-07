"use client";

/**
 * Aurora Background Component
 * Renders animated aurora and grain overlay layers
 * Zero layout shift, positioned fixed behind all content
 */
export default function Aurora() {
  return (
    <>
      {/* Aurora layer */}
      <div className="aurora" aria-hidden="true" />
      
      {/* Grain overlay */}
      <div className="grain" aria-hidden="true" />
    </>
  );
}
