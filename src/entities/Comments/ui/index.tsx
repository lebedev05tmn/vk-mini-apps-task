import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { parseHtml } from "../lib";
import { IActionComment, fetchComments } from "../model/api-actions";
import { resetSubComment, resetStatus } from "../model/action";
import { RootState } from "app/store";
import { IComment } from "shared/interfaces";
import { Button } from "@vkontakte/vkui";
import { IState } from "../model/comments-reducer";
import { ThunkDispatch } from "redux-thunk";
import { NewsComments, Comment } from "shared/ui";
import { parseDate } from "entities/NewsList";
import { QUERY_INTEVAL } from "shared/config";

const Comments: FC<{ kids: number[] }> = ({ kids }) => {
  const dispatch: ThunkDispatch<
    IState,
    void,
    IActionComment | { type: string }
  > = useDispatch();
  const comments = useSelector((state: RootState) => state.COMMENTS.comments);
  const isLoadedComments = useSelector(
    (state: RootState) => state.COMMENTS.isLoadedComments
  );
  const isLoadSubComments = useSelector(
    (state: RootState) => state.COMMENTS.isLoadedSubComments
  );
  const subComments = useSelector(
    (state: RootState) => state.COMMENTS.subComments
  );

  useEffect(() => {
    dispatch(resetStatus());
    const interval = setInterval(() => {
      dispatch(fetchComments(kids, false));
    }, QUERY_INTEVAL);

    return () => clearInterval(interval);
  }, [dispatch]);

  useEffect(() => {
    kids && dispatch(fetchComments(kids, false));
  }, [dispatch, kids]);

  const [isLoad, setIsLoad] = useState(Array(kids.length | 1).fill(false));

  if (!isLoadedComments) {
    return "Загрузка...";
  }

  return (
    kids.length &&
    isLoadedComments && (
      <NewsComments>
        <Button
          onClick={() => {
            dispatch(resetStatus());
            dispatch(fetchComments(kids, false));
          }}>
          Обновить комментарии
        </Button>
        {comments.map((comment: IComment, index: number) => (
          <div key={comment.id}>
            <Comment
              text={parseHtml(comment.text)}
              by={comment.by}
              time={parseDate(comment.time)}
              index={index + 1}
              haveSub={!!comment.kids}
              onClick={() => {
                if (comment.kids) {
                  dispatch(resetSubComment());
                  setIsLoad(prevState => {
                    const newState = Array(prevState.length).fill(false);
                    newState[index] = !prevState[index];
                    return newState;
                  });

                  comment.kids !== undefined &&
                    dispatch(fetchComments(comment.kids, true));
                }
              }}
            />
            {comment.kids && (
              <>
                {isLoadSubComments &&
                  isLoad[index] &&
                  subComments.map((subComment: IComment, subIndex: number) => {
                    return (
                      <Comment
                        key={subComment.id}
                        text={parseHtml(subComment.text)}
                        isSub={true}
                        time={parseDate(subComment.time)}
                        by={comment.by}
                        index={subIndex + 1}
                      />
                    );
                  })}
              </>
            )}
          </div>
        ))}
      </NewsComments>
    )
  );
};

export { Comments };
