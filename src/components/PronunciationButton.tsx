"use client";

import { useState } from "react";

interface PronunciationButtonProps {
  className?: string;
}

export default function PronunciationButton({ className }: PronunciationButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const playPronunciation = async () => {
    if (isPlaying) return;

    setIsPlaying(true);

    try {
      // Try MP3 first, fallback to M4A
      const audio = new Audio('/giuseppe-pronunciation.mp3');
      
      // Set up event listeners
      audio.addEventListener('ended', () => setIsPlaying(false));
      audio.addEventListener('error', async () => {
        // Fallback to M4A if MP3 fails
        try {
          const fallbackAudio = new Audio('/giuseppe-pronunciation.m4a');
          fallbackAudio.addEventListener('ended', () => setIsPlaying(false));
          await fallbackAudio.play();
        } catch (fallbackError) {
          console.log('Audio playback not supported');
          setIsPlaying(false);
        }
      });

      await audio.play();
    } catch (error) {
      console.log('Audio playback failed:', error);
      setIsPlaying(false);
    }
  };

  return (
    <button 
      type="button"
      onClick={playPronunciation}
      className={`${className} ${isPlaying ? 'opacity-50' : ''}`}
      title="Hear my name pronounced"
      disabled={isPlaying}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" strokeWidth="2"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" strokeWidth="2"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" strokeWidth="2"/>
      </svg>
      {isPlaying ? 'Playing...' : 'Giuseppe (pronunciation)'}
    </button>
  );
}