import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./PostsWidget.module.css";

const PostsWidget = ({ widget }) => {
  const skip = widget.getAttribute("data-skip") || 0;
  const limit = parseInt(widget.getAttribute("data-limit") ?? 5);

  const [articles, setArticles] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/posts?skip=${skip}&limit=${limit}`)
      .then(function (response) {
        console.log("response", response?.data);
        setArticles(response.data);
      })
      .catch(function (error) {
        setError("error");
      });
  }, [limit, skip]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section>
      {articles?.posts?.map((article) => {
        return (
          <div className={styles.storyWrapper} key={article.id}>
            <h3 className={styles.subHeading}>{article?.tags?.toString()}</h3>
            <h3 className={styles.mainHeadind}>
            {article?.title}
            </h3>
            <p className={styles.reactions}>{article?.reactions} Reactions</p>
          </div>
        );
      })}
    </section>
  );
};

export default PostsWidget;
