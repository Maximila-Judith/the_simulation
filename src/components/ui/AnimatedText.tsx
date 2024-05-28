import { useState, useEffect } from 'react';
import styles from '@/app/animatedText.module.css'

export default function AnimatedText({ text, onEnd }: { text: string; onEnd? : () =>void}) {
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setCurrentText(text.slice(0, index + 1));
        index++;
      } else {
        if (index === text.length) {
          onEnd?.();
          console.log('fini')
        }
        clearInterval(timer);
      }
    }, 40); 

    return () => clearInterval(timer);
  }, [text]);

     

  return <span className=''>{currentText}</span>;
}
