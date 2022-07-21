function Song({ order, track }) {
  const spotifyApi = useSpotify();
  return (
    <div>
      <p>{order + 1}</p>
      <img clasaName="h-10 w-10" src={track.track.album.images[0].url} alt="" />
    </div>
  );
}

export default Song;
