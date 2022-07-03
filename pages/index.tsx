import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { Form } from '../components/Form'
import { LyricContainer } from '../components/LyricContainer'

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [artist, setArtist] = useState('')
  const [song, setSong] = useState('')
  const [lyric, setLyric] = useState('')
  return (
    <div>
      <Head>
        <title>Buscador de Letras</title>
        <meta name="Buscador de letras" content="Buscador de letras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Form
          setIsLoading={setIsLoading}
          setArtist={setArtist}
          setLyric={setLyric}
          setSong={setSong}
        />
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <LyricContainer artist={artist} song={song} lyric={lyric} />
        )}
      </main>
    </div>
  )
}

export default Home
