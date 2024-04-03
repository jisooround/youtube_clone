// global
export const trending = (req, res) => {
  res.render("home");
};
export const search = (req, res) => {
  res.send("Search Vidoes");
};

// videos
export const see = (req, res) => {
  console.log(req.params);
  res.render("watch");
};
export const edit = (req, res) => {
  res.render("edit");
};
export const deleteVideo = (req, res) => {
  res.send("Delete Video");
};
export const upload = (req, res) => {
  res.send("Upload Video");
};
