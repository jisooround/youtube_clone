let videos = [
  {
    title: "First Video",
    rating: 3,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 34,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 3,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 3,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 3,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 1,
    id: 3,
  },
];

// global
export const trending = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};
export const search = (req, res) => {
  res.send("Search Vidoes");
};

// videos
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  res.render("watch", { pageTitle: `Watch ${video.title}.`, video });
};
// getEdit = edit 페이지를 보여주는 함수
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};
// postEdit = 변경사항을 저장해주는 함수
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const video = videos[id - 1];
  video.title = title;
  return res.redirect(`/videos/${id}`);
};
