function showAlbums(albums) {
  const albumsHtml = `
  <style>
  .addForm {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
    font-size: 16px;
    color: #333;
    width: 100%;
    max-width: 400px;
  }

  .albumList {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .albumListElement {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 10px;
  }

  .deleteForm button {
    padding: 5px;
    border: none;
    border-radius: 5px;
    background-color: #ed5f5f;
    color: #fff;
    cursor: pointer;
  }
  </style>
  <h1>Beyoncé Albums CRUD App</h1>
    <form action="/albums" method="post" class="addForm">
      <input type="text" name="albumId" placeholder="Album ID" />
      <input type="text" name="artistName" placeholder="Artist Name" />
      <input type="text" name="collectionName" placeholder="Collection Name" />
      <input type="text" name="artworkUrl100" placeholder="Artwork URL" />
      <input type="text" name="releaseDate" placeholder="Release Date" />
      <input type="text" name="primaryGenreName" placeholder="Primary Genre Name" />
      <input type="text" name="url" placeholder="URL" />
      <button type="submit">Add Album</button>
  </form>
  <h2>Albums</h2>
    <ul class="albumList">
      ${albums.map((album) =>
        `
      <li class="albumListElement">
        <div>
          ${album.collectionName}
        </div>
        <form action="/albums/${album.albumId}?_method=DELETE" method="POST" class="deleteForm">
          <input type="hidden" name="albumId" value="${album.albumId}" />
          <button type="submit">🗑️</button>
        </form>
      </li>
    </ul>
      `)
      .join("")}`;
  return albumsHtml;
}

module.exports = {
  showAlbums
}