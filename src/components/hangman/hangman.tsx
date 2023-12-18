import { useRef, useEffect } from 'react';
import { Drawer } from './drawsteps';
import styles from './hangman.style.module.css';

type HangmanProps = {
  step: number;
}
export default function Hangman ({step} : HangmanProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const drawer = new Drawer(ctx);
        drawer.drawStep(step);
      }
    }
  }, [step]);


  return (
    <canvas className={styles.hangman} ref={canvasRef} width="300" height="300"></canvas>
  );
}
