import { Link } from 'react-router-dom';
import styles from '../styles/PostCard.module.css';

function PostCard({ post }) {
  return (
    <Link to={`/post/${post.id}`} className={styles.card}>
      <h2>{post.title}</h2>
      <p>{post.body.slice(0, 100)}...</p>
    </Link>
  );
}

export default PostCard;
