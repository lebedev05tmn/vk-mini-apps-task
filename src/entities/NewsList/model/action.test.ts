import { IStory } from "shared/interfaces";
import { fillNewstoriesId, fillNewsList, ActionType } from "./action";

describe("action", () => {
  test("fillNewstoriesId", () => {
    const newstoriesId: number[] = [1, 2, 3, 4, 5, 6];

    const expectedAction = {
      type: ActionType.FILL_NEWSTORIES_ID,
      payload: newstoriesId,
    };

    expect(fillNewstoriesId(newstoriesId)).toEqual(expectedAction);
  });

  test("fillNewsList", () => {
    const newsList: IStory[] = [
      {
        by: "dhouston",
        descendants: 71,
        id: 8863,
        kids: [
          8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940,
          9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928,
          9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876,
        ],
        score: 111,
        time: 1175714200,
        title: "My YC app: Dropbox - Throw away your USB drive",
        type: "story",
        url: "http://www.getdropbox.com/u/2/screencast.html",
      },
      {
        by: "adam_inkling",
        descendants: 10,
        id: 88,
        score: 1,
        time: 1171907224,
        title:
          "Project management alternative to basecamp - ticketing and version control too :)",
        type: "story",
        url: "http://unfuddle.com",
      },
    ];

    const expectedAction = {
      type: ActionType.FILL_NEWS_LIST,
      payload: newsList,
    };

    expect(fillNewsList(newsList)).toEqual(expectedAction);
  });
});
