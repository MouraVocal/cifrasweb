import { app } from '../../firebase'
import { getFirestore, doc, setDoc } from 'firebase/firestore'

interface Props {
  lyric: string
  artist: string
  song: string
}

export function LyricContainer({ lyric, artist, song }: Props) {
  const db = getFirestore(app)

  const uploadLyric = async () => {
    console.log('uploading lyric')
    try {
      await setDoc(
        doc(db, 'lyrics', `${artist.toLowerCase()}-${song.toLowerCase()}`),
        {
          artist,
          song,
          lyric
        }
      )
      console.log('uploaded lyric')
    } catch (e) {
      console.log(`Erro ao salvar: ${e}`)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center pt-2 px-2">
      {artist && <h1 className="text-2xl uppercase">{artist}</h1>}
      {song && <h2 className="text-xl uppercase">{song}</h2>}
      {lyric ? (
        <>
          <p>{lyric}</p>
          <button
            className="bg-indigo-600 px-5 py-3 rounded hover:bg-indigo-900 transition-colors"
            onClick={uploadLyric}
          >
            Salvar
          </button>
        </>
      ) : (
        <img className="stroke-white" src="/images/searching.svg" />
      )}
    </div>
  )
}
