import { useState, useEffect } from 'react';
import styles from '@/app/animatedText.module.css'

export default function AnimatedText({ text, onEnd }: { text: string; onEnd?: (typing:boolean) =>void}) {
  const [currentText, setCurrentText] = useState('');
  const [istyping, setIstyping] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {

      if (index < text.length) {
        setIstyping(true)
        setCurrentText(text.slice(0, index + 1));
        index++;
      } else {
        if (index === text.length) {
          setIstyping(false)
          onEnd?.(istyping);
        }
        clearInterval(timer);
      }
    }, 40); 

    return () => clearInterval(timer);
  }, [text]);

     

  return <span className=''>{currentText}</span>;
}
