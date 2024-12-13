import React, { useRef, useState, useEffect } from 'react';
import './customaudioplayer.css';

const CustomAudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio) {
      const currentProgress = (audio.currentTime / audio.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleProgressClick = (e) => {
    const audio = audioRef.current;
    if (audio) {
      const progressBar = e.target;
      const rect = progressBar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const newTime = (clickX / width) * audio.duration;
      audio.currentTime = newTime;
    }
  };

  const handleVolumeChange = (e) => {
    const audio = audioRef.current;
    const newVolume = e.target.value;
    if (audio) {
      audio.volume = newVolume;
      setVolume(newVolume);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('timeupdate', handleTimeUpdate);
      return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, []);

  return (
    <div className="audio-player">
      <audio
        ref={audioRef}
        src="https://mysoundfile.s3.eu-north-1.amazonaws.com/podd-me.mp3"
      ></audio>
      <button onClick={togglePlayPause} className="play-pause-btn">
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <div className="progress-bar" onClick={handleProgressClick}>
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="volume-control">
        <label htmlFor="volume">Volym:</label>
        <input
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

export default CustomAudioPlayer;
