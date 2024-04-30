import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsItem } from "../model/api-actions";
import { parseDate } from "entities/NewsList";
import { NewsDetails } from "shared/ui";

const NewsInfo: FC<{ id: string | undefined }> = ({ id }) => {
  const dispatch: any = useDispatch();
  const data: any = useSelector((state: any) => state.NEWS.newsItem);

  useEffect(() => {
    id && dispatch(fetchNewsItem(id));
  }, [dispatch]);

  return (
    <NewsDetails
      by={data.by}
      title={data.title}
      url={data.url}
      time={parseDate(data.time)}
    />
  );
};

export { NewsInfo };

/*const CommentComponent: React.FC<{ postId: number }> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchComments = async (postId: number) => {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${postId}.json`
      );
      const postData = await response.json();

      if (!postData.kids) return [];

      const commentIds: number[] = postData.kids;
      const comments: Comment[] = [];

      for (const commentId of commentIds) {
        const commentResponse = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${commentId}.json`
        );
        const commentData = await commentResponse.json();
        const comment: Comment = {
          id: commentData.id,
          text: commentData.text,
        };
        if (commentData.kids) {
          comment.kids = await fetchComments(commentData.id);
        }
        comments.push(comment);
      }

      return comments;
    };

    fetchComments(postId).then(comments => setComments(comments));
  }, [postId]);

  const renderComments = (comments: Comment[], depth: number) => {
    return comments.map(comment => (
      <div key={comment.id} style={{ marginLeft: depth * 20 }}>
        <p>{comment.text}</p>
        {comment.kids && renderComments(comment.kids, depth + 1)}
      </div>
    ));
  };

  return (
    <div>
      <h2>Comments</h2>
      {comments.length > 0 ? renderComments(comments, 0) : <p>No comments</p>}
    </div>
  );
};

export default CommentComponent;*/
