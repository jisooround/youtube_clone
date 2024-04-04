// global
export const trending = (req, res) => {
  const videos = [
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
      views: 34,
      id: 2,
    },
    {
      title: "Third Video",
      rating: 3,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 34,
      id: 3,
    },
  ];
  res.render("home", { pageTitle: "Home", videos });
};
export const search = (req, res) => {
  res.send("Search Vidoes");
};

// videos
export const see = (req, res) => {
  console.log(req.params);
  res.render("watch", { pageTitle: "Watch" });
};
export const edit = (req, res) => {
  res.render("edit", { pageTitle: "Edit" });
};
export const deleteVideo = (req, res) => {
  res.send("Delete Video");
};
export const upload = (req, res) => {
  res.send("Upload Video");
};
