import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import styles from "../styles/PostDetails.module.css";

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  //const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      });
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className={styles.details}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default PostDetails;
