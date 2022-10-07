import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import Tweet from "./Tweet";

const url = "http://localhost:3000";
function Home() {
  const [tweetsData, setTweetsData] = useState([]);
  const [newTweet, setNewTweet] = useState(null);

  useEffect(() => {
    fetch(`${url}/tweets`)
      .then((response) => response.json())
      .then((data) => {
        setTweetsData(data.tweets);
      });
  }, []);

  const handleTweet = () => {
    fetch("http://localhost:3000/tweets/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tweet: newTweet }),
    })
      .then((response) => response.json())
      .then((data) => console.log(`New tweet! ${data}`));
    setNewTweet("");

    fetch(`${url}/tweets`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.tweets);
        setTweetsData(data.tweets);
      });
  };

  const tweets = tweetsData.map((tweet, i) => {
    // console.log("tweetsData =>", tweetsData)
    const isAuthored = false;
    const isDumped = false;
    // A faire plus tard en fonction du token de la session et du token de la personne qui a tweeté
    return (
      <Tweet key={i} {...tweet} isAuthored={isAuthored} isDumped={isDumped} />
    );
  });

console.log("tweets components", tweets)

  return (
    <div className={styles.main}>
      <div className={styles.userSection}>
        <div className={styles.logoSection}>
          <Image
            src="/logo.png"
            alt="logo"
            height={50}
            width={60}
            className={styles.logo}
          />
        </div>

        <div className={styles.userInformationSection}>
          <div className={styles.avatarSection}>
            <Image
              src="/default_avatar.jpeg"
              alt="avatar"
              height={10}
              width={80}
              className={styles.avatar}
            />
          </div>

          <div className={styles.personalInformationSection}>
            <p className={styles.firstname}>John</p>
            <p className={styles.username}>@JohnCena</p>
          </div>
        </div>
      </div>

      <div className={styles.tweetsSection}>
        <div className={styles.tweetsHeader}></div>
        <div className={styles.tweetsHeader}>
          <h1 className={styles.tweetsHeaderTitle}>Home</h1>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="What's up ?"
              className={styles.tweetInput}
              onChange={(e) => setNewTweet(e.target.value)}
            ></input>
          </div>
          <div className={styles.tweetButtonContainer}>
            <button
              className={styles.tweetButton}
              onClick={() => handleTweet()}
            >
              Tweet
            </button>
          </div>
        </div>
        <div className={styles.tweetsContainer}>{tweets}</div>
      </div>

      <div className={styles.trendsSection}>
        <h1 className={styles.trendsHeaderTitle}>Trends</h1>
      </div>
    </div>
  );
}

export default Home;
