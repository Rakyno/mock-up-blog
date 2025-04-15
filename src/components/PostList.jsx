import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import styles from "../styles/PostList.module.css";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //AI
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.slice(0, 12));
        setIsLoading(false); //AI
      });
  }, []);

  if (isLoading) {
    return <div className={styles.loading}>Loading posts...</div>; //AI
  }

  return (
    <div className={styles.grid}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
