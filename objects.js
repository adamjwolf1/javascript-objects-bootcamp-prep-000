var playlist = ({Tom_Petty: 'The Waiting'})

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}