import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../styles/PostDetails.module.css";

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
    setIsLoading(false);
  }, [id]);

  if (isLoading) {
    return <div className={styles.loading}>Loading posts...</div>;
  }

  return (
    <div className={styles.details}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default PostDetails;
