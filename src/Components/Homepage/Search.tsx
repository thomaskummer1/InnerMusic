import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AlbumModal from "./AlbumModal";
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

export default function Search() {
  const { sterm } = useParams();
  const maxChar = 17;
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);
  const [focusedAlbum, setFocusedAlbum] = useState({
    name: "",
    images: [{ url: "" }],
    artists: [{ name: "" }],
    release_date: "",
    total_tracks: "",
    external_urls: { spotify: "" },
  });
  async function search() {
    var artistId = await fetch(
      "https://api.spotify.com/v1/search?q=" + sterm + "&type=artist",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists.items[0].id;
      });
    var apiAlbums = await fetch(
      "https://api.spotify.com/v1/artists/" +
        artistId +
        "/albums?include_groups=album&limit=50&market=US",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        return data.items;
      });
    setAlbums(apiAlbums);
  }

  useEffect(() => {
    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    })
      .then((response) => response.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);
  useEffect(() => {
    if (accessToken) {
      search();
    }
  }, [sterm, accessToken]);
  return (
    <div>
      <div className="container bluebutton">
        <div className="card border-0">
          <div className="row">
            <div className="row row-cols-1 row-cols-md-5">
              {albums.map((album: any) => (
                <div className="col" style={{ width: 250 }}>
                  <div className="card rounded-3 overflow-hidden">
                    <img src={album.images[0].url} width="100%" height={200} />
                    <div className="card-body">
                      <h6 className="card-title">
                        {album.name.length > maxChar
                          ? album.name.substring(0, maxChar)
                          : album.name}
                      </h6>
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#inner-music-playlist-modal"
                        onClick={() => {
                          setFocusedAlbum(album);
                          console.log(album);
                        }}
                      >
                        Check It Out
                      </button>
                      <AlbumModal album={focusedAlbum} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
