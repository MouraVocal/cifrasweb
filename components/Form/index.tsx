import React, { FormEvent, useRef } from 'react'
import axios from 'axios'

// Components
import { Input } from '../Input'

interface Props {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  setArtist: React.Dispatch<React.SetStateAction<string>>
  setSong: React.Dispatch<React.SetStateAction<string>>
  setLyric: React.Dispatch<React.SetStateAction<string>>
}

export function Form({ setIsLoading, setArtist, setSong, setLyric }: Props) {
  const artist = useRef<HTMLInputElement>(null)
  const song = useRef<HTMLInputElement>(null)

  const apikey = process.env.API_KEY

  const getData = () => {
    setIsLoading(true)
    if (artist.current) setArtist(artist.current.value)

    if (song.current) setSong(song.current.value)

    axios
      .get(`https://api.vagalume.com.br/search.php`, {
        params: {
          art: artist.current?.value,
          mus: song.current?.value,
          apikey
        }
      })
      .then(response => {
        if (response.data.mus) setLyric(response.data.mus[0].text)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const handleSearch = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    getData()
  }
  return (
    <>
      <form>
        <fieldset className="p-2 border-b flex flex-col md:flex-row justify-center md:justify-between gap-1 items-center">
          <div className="inputsContainer flex flex-col md:flex-row gap-2">
            <Input
              label="Artist"
              type="text"
              ref={artist}
              placeholder="Artist"
            />

            <Input label="Song" type="text" ref={song} placeholder="Song" />
          </div>

          <button onClick={handleSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </fieldset>
      </form>
    </>
  )
}
