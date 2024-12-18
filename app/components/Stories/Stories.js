import { getDomainNameFromURL, timeAgo } from "@/app/lib/utils";

import styles from "./stories.module.css";

export default function Stories({ stories }) {
  return (
    <ul className="content">
      {stories.map((story) => (
        <li key={story?.id} className={styles.storyItem}>
          <span>
            <a href={story?.url} className={styles.storyTitle}>
              {story?.title}
            </a>
            {story?.url && (
              <a className={styles.storyDomain}>
                {` (${getDomainNameFromURL(story?.url)}) `}
              </a>
            )}
          </span>
          <p className={styles.storySubtitle}>{`${story?.score} points by ${
            story?.by
          } ${timeAgo(story?.time)}`}</p>
        </li>
      ))}
    </ul>
  );
}
