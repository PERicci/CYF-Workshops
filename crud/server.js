const express = require("express");
const methodOverride = require("method-override");

const { showAlbums } = require("./htmlGenerator.js");
const albumsData = require("./albums.json");

const app = express();

const port = 3000
const endpoints = {
  main: "/",
  albums: "/albums",
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}. Ready to accept requests!`);
});

//get routes

app.get(endpoints.main, (req, res) => {
  res.send(`Available endpoints: ${Object.values(endpoints).join(", ")}`);
})

app.get(endpoints.albums, (req, res) => {
  const albumsHtml = showAlbums(albumsData);
  res.send(albumsHtml);
})

app.get(`${endpoints.albums}JSON`, (req, res) => {
  res.send(albumsData);
})

app.get(`${endpoints.albums}/:albumId`, (req, res) => {
  const albumId = req.params.albumId;
  const album = albumsData.find(album => album.albumId === albumId);
  album ? res.send(album) : res.status(404).send("Album not found");
});

// post routes

app.post(endpoints.albums, (req, res) => {
  const newAlbum = req.body;
  albumsData.push(newAlbum);
  res.redirect(endpoints.albums);
})

//delete routes

app.delete(`${endpoints.albums}/:albumId`, (req, res) => {
  const albumId = req.params.albumId;
  const index = albumsData.findIndex(album => album.albumId === albumId);
  if (index !== -1) {
    albumsData.splice(index, 1);
    res.redirect(endpoints.albums);
    console.log("Album deleted successfully!");
  } else {
    res.redirect(endpoints.albums);

    console.log("Album not found");
  }
})