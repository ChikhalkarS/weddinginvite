import {Music2, Pause} from 'lucide-react';
import {useEffect, useRef, useState} from 'react';
import {weddingData} from '../data/weddingData';

export function MusicPlayer(){
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const hasStarted = useRef(false);
  
  useEffect(() => {
    const handleUserInteraction = async () => {
      if (hasStarted.current) return;
      hasStarted.current = true;
      
      const audio = audioRef.current;
      if (audio) {
        try {
          audio.volume = 0.5;
          await audio.play();
          setIsPlaying(true);
        } catch (err) {
          console.log('Audio playback failed:', err);
        }
      }
    };
    
    document.addEventListener('click', handleUserInteraction);
    return () => document.removeEventListener('click', handleUserInteraction);
  }, []);
  
  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };
  
  return <>
    <audio 
      ref={audioRef} 
      src={weddingData.music.url} 
      loop
      onPlay={() => setIsPlaying(true)}
      onPause={() => setIsPlaying(false)}
    />
    <button aria-label="Toggle wedding music" onClick={togglePlay} className="focus-ring fixed bottom-5 left-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#B5965A] bg-[#42131E] text-[#B5965A] shadow-lg hover:bg-[#6E1F2E] transition-colors">
      {isPlaying ? <Pause className="h-4 w-4"/> : <Music2 className="h-4 w-4"/>}
    </button>
  </>
}
