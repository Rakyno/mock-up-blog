import { Link } from "react-router-dom";
import styles from "../styles/PostCard.module.css";

function PostCard({ post }) {
  if (!post) return <div>loading...</div>;
  return (
    <Link to={`/post/${post.id}`} className={styles.card}>
      <h2>{post.title}</h2>
      <p>{post.body.slice(0, 100)} loading...</p>
    </Link>
  );
}

export default PostCard;
