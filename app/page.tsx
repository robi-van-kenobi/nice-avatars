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
            src="/api/avatar/vercel.svg?text=VC"
            alt="Vercel"
          />
          <img className={styles.avatar} src="/api/avatar/42" alt="ID 42" />
          <img className={styles.avatar} src="/api/avatar/satori" alt="Satori" />
          <img className={styles.avatar} src="/api/avatar/next.js" alt="Next.js" />
        </div>
      </main>

      <footer className={styles.footer}>
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
