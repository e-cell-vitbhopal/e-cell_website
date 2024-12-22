import Post from "./Post";
import TopPost from "./TopPost";
import {useEffect, useState} from "react";

export default function IndexPage() {
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    fetch('https://blog-backend-pt7b.onrender.com/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);

  let topPost = null;
  let remPost = null;
  if(posts.length > 0) {
    topPost = posts[0];
    remPost = posts.slice(1);
  }

  return (
    <div>
      <div className="latest-post">
        {topPost != null && <TopPost {...topPost} /> }
      </div>
      <div className="post-cont">
        {remPost != null && remPost.map(post => (
          <Post {...post} />
        ))}
      </div>
    </div>
  );
}