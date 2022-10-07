import styles from "../styles/Tweet.module.css";
import Image from "next/image";

function formatTimelaps(date1, date2) {
  // Fonction pour formatter la durée écoulée depuis le Tweet
  const rawTimelaps = Math.abs((date1.getTime() - date2.getTime()) / 1000.0);
  let formattedTimelaps;
  if (rawTimelaps < 60) {
    // Si la durée est inférieure à 1 minute, le résultat s'affiche en secondes
    formattedTimelaps = `${Math.floor(rawTimelaps / 60.0)} seconds ago`;
  } else if (rawTimelaps < 3600) {
    // Si la durée est inférieure à 1 heure, le résultat s'affiche en minutes
    formattedTimelaps = `${Math.floor(rawTimelaps / 60.0)} minutes ago`;
  } else if (rawTimelaps < 3600 * 24) {
    // Si la durée est inférieure à une journée, le résultat s'affiche en heure
    formattedTimelaps = `${Math.floor(rawTimelaps / 3600.0)} hours ago`;
  } else {
    // Sinon, le résultat s'affiche en jour
    formattedTimelaps = `${Math.floor(rawTimelaps / (24 * 3600.0))} days ago`;
  }
  return formattedTimelaps;
}

function Tweet(props) {
  const dateNow = new Date(Date.now());
  const timelaps = formatTimelaps(dateNow, new Date(props.date));

  const tweet = props.contentInArray.map((word, i) => {
    const isHashtag = props.hashtags.includes(word) ? true : false;
    return (
      <span
        className={styles.spanTweet}
        key={i}
        style={isHashtag ? { color: "#013F88" } : { color: "white" }}
      >{`${word}`}</span>
    );
  });

  return (
    <div className={styles.tweet}>
      <div className={styles.userInformation}>
        <div className={styles.avatarContainer}>
          <Image
            src="/default_avatar.jpeg"
            alt="avatar"
            height={50}
            width={50}
            className={styles.avatar}
          />
        </div>
        <div className={styles.userPersonalInformation}>
          <span className={styles.firstname}>{props.firstname}</span>
          <span className={styles.username}>{props.username}</span>
          <span className={styles.timelaps}>{` - ${timelaps}`}</span>
        </div>
      </div>
      <div className={styles.tweetContent}>{tweet}</div>
    </div>
  );
}

export default Tweet;
