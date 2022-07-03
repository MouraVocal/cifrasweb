interface Props {
  lyric: string
  artist: string
  song: string
}

export function LyricContainer({ lyric, artist, song }: Props) {
  return (
    <div className="flex flex-col items-center justify-center pt-2 px-2">
      {artist && <h1 className="text-2xl uppercase">{artist}</h1>}
      {song && <h2 className="text-xl uppercase">{song}</h2>}
      {lyric ? (
        <p>{lyric}</p>
      ) : (
        <img className="stroke-white" src="/images/searching.svg" />
      )}
    </div>
  )
}
