import { useEffect, useRef, useState } from 'react';
import johnPorkImg from './assets/John Pork.png';
import creepyPorkImg from './assets/Creepy Pork.png';
import sadPorkImg from './assets/sad Pork.png';
import leftHand from './assets/lefthand.png';
import rightHand from './assets/righthand.png';
import callSound from './assets/sounds/Call sound.mp3';
import creepySound from './assets/sounds/creepy-sound-effect.mp3';
import sadSound from './assets/sounds/Sad Violin sound effect.mp3';
import './John.css';

export default function John() {
  const audioRef = useRef(null);
  const [bgImage, setBgImage] = useState(johnPorkImg);

  const playSound = (src) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    const audio = new Audio(src);
    audio.loop = true;
    audio.play().catch(() => {});
    audioRef.current = audio;
  };

  useEffect(() => {
    playSound(callSound);
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const handleRightClick = () => {
    setBgImage(creepyPorkImg);
    playSound(creepySound);
  };

  const handleLeftClick = () => {
    setBgImage(sadPorkImg);
    playSound(sadSound);
  };

  return (
    <div className="john-page">
      <img src={leftHand} alt="Left hand" className="hand hand-left" onClick={handleLeftClick} />
      <img src={rightHand} alt="Right hand" className="hand hand-right" onClick={handleRightClick} />
      <img src={bgImage} alt="John Pork" className="john-bg" />
    </div>
  );
}
