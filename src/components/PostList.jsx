import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import styles from "../styles/PostList.module.css";
import axios from "axios";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //AI
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data.slice(0, 12));
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
