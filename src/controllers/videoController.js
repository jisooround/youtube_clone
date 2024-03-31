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
  res.send("Watch Video");
};
export const edit = (req, res) => {
  res.send(`Edit Video ${req.params.id}`);
};
export const deleteVideo = (req, res) => {
  res.send("Delete Video");
};
export const upload = (req, res) => {
  res.send("Upload Video");
};
