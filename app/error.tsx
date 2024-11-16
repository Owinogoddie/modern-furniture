'use client';

import { useEffect } from 'react';
import styles from './styles/Error.module.css';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.errorContainer}>
      <div className={styles.content}>
        <div className={styles.icon}>⚠️</div>
        <h1>Oops! Something went wrong</h1>
        <p>We apologize for the inconvenience. Please try again.</p>
        <button
          onClick={reset}
          className={styles.button}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}