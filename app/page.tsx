import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Avatar</h1>

        <div style={{ display: 'flex', gap: 10, marginTop: '20px' }}>
          <img
            className={styles.avatar}
            src="/vercel.svg?text=VC"
            alt="Vercel"
          />
          <img className={styles.avatar} src="/42" alt="ID 42" />
          <img className={styles.avatar} src="/satori" alt="Satori" />
          <img className={styles.avatar} src="/next.js" alt="Next.js" />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/robi-van-kenobi/nice-avatars"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.github}
          aria-label="View source on GitHub"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.31-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.83.58C20.56 22.29 24 17.8 24 12.5 24 5.87 18.63.5 12 .5Z" />
          </svg>
          GitHub
        </a>
        <a
          href="https://copriso.com?utm_source=vocayo-avatars&utm_medium=footer-link&utm_campaign=vocayo-avatars"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/copriso.png" alt="copriso Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
