import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../model/api-actions";
import { IComment } from "shared/interfaces";

const Comments: FC<{ id: string | undefined }> = ({ id }) => {
  const dispatch: any = useDispatch();
  const data: any = useSelector((state: any) => state.COMMENTS.newsComments);

  useEffect(() => {
    id && dispatch(fetchComments());
  }, [dispatch, id]);

  console.log(data);
  const convertHTMLToString = (html: string) => {
    const parser = new DOMParser();
    const parsedHtml = parser.parseFromString(html, "text/html");
    return parsedHtml.body.textContent || "";
  };

  return (
    <div>
      {data.map((comment: IComment, index: number) => (
        <div>
          <p key={comment.id}>
            {index + 1}{" "}
            {!comment.deleted ? convertHTMLToString(comment.text) : "deleted"}
          </p>
          <span>{comment.kids ? JSON.stringify(comment.kids) : ""}</span>
        </div>
      ))}
    </div>
  );
};

export { Comments };
