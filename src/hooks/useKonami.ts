import { useEffect, useState } from 'react';

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'KeyB', 'KeyA',
];

export function useKonami() {
  const [activated, setActivated] = useState(false);
  const [sequence, setSequence] = useState<string[]>([]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      setSequence(prev => {
        const newSeq = [...prev, e.code].slice(-KONAMI_CODE.length);
        if (
          newSeq.length === KONAMI_CODE.length &&
          newSeq.every((key, i) => key === KONAMI_CODE[i])
        ) {
          setActivated(true);
          return [];
        }
        return newSeq;
      });
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return activated;
}
