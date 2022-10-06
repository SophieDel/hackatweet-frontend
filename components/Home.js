import styles from '../styles/Home.module.css';
import Image from 'next/image';

function Home() {
  return (
    <div className={styles.main}>
    <div className={styles.userSection}>
    <div className={styles.logoSection}>
      <Image src="/logo.png" alt="logo" height={50} width={60} className={styles.logo}/>
      </div>
      <div className={styles.userInformationSection}>
      <div className={styles.avatarSection}>
      <Image src="/default_avatar.jpeg" alt="avatar" height={10} width={80} className={styles.avatar}/>
      </div>
      <div className={styles.personalInformationSection}>
      <p className={styles.firstname}>John</p>
      <p className={styles.username}>@JohnCena</p>
      </div>
      </div>f
    </div>
    <div className={styles.tweetsSection}>
    </div>
    <div className={styles.trendsSection}>
    </div>
    </div>
  );
}

export default Home;
