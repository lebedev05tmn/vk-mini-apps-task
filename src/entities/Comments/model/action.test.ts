import { IComment } from "shared/interfaces";
import {
  ActionType,
  fillComments,
  fillSubComments,
  resetSubComment,
  resetStatus,
} from "./action";

describe("action", () => {
  test("fillComments", () => {
    const newsComments: IComment[] = [
      {
        by: "norvig",
        id: 2921983,
        kids: [2922097, 2922429, 2924562, 2922709, 2922573, 2922140, 2922141],
        parent: 2921506,
        text: "Aw shucks, guys ... you make me blush with your compliments.<p>Tell you what, Ill make a deal: I'll keep writing if you keep reading. K?",
        time: 1314211127,
        type: "comment",
      },
      {
        by: "norvig",
        id: 29219,
        kids: [2922097],
        parent: 2921554,
        text: "Aw s: I'll keep writing if you keep reading. K?",
        time: 137809,
        type: "comment",
      },
    ];

    const expectedAction = {
      type: ActionType.FILL_COMMENTS,
      payload: newsComments,
    };

    expect(fillComments(newsComments)).toEqual(expectedAction);
  });

  test("fillSubComments", () => {
    const newsSubComments: IComment[] = [
      {
        by: "norvig",
        id: 2921983,
        kids: [2922097, 2922429, 2924562, 2922709, 2922573, 2922140, 2922141],
        parent: 2921506,
        text: "Aw shucks, guys ... you make me blush with your compliments.<p>Tell you what, Ill make a deal: I'll keep writing if you keep reading. K?",
        time: 1314211127,
        type: "comment",
      },
      {
        by: "norvig",
        id: 29219,
        kids: [2922097],
        parent: 2921554,
        text: "Aw s: I'll keep writing if you keep reading. K?",
        time: 137809,
        type: "comment",
      },
    ];

    const expectedAction = {
      type: ActionType.FILL_SUB_COMMENTS,
      payload: newsSubComments,
    };

    expect(fillSubComments(newsSubComments)).toEqual(expectedAction);
  });

  test("resetSubComments", () => {
    const expectedAction = {
      type: ActionType.RESET_SUB_COMMENTS_STATUS,
    };

    expect(resetSubComment()).toEqual(expectedAction);
  });

  test("resetStatus", () => {
    const expectedAction = {
      type: ActionType.RESET_STATUS,
    };

    expect(resetStatus()).toEqual(expectedAction);
  });
});
