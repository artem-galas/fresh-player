import CardHeader from "../components/CardHeader.tsx";
import {
  NextIcon,
  PauseIcon,
  PlayIcon,
  PrevIcon,
  RepeatIcon,
  ShuffleIcon,
} from "../components/icons/index.tsx";
import SongList from "../components/SongList.tsx";
import CurrentSong from "../components/CurrentSong.tsx";
import SongProgress from "../islands/SongProgress.tsx";
import { useState } from "preact/hooks";
import { Song } from "../Domain/Song.ts";

type CardProps = {
  songs: Record<string, Song>;
};

export default function Card({ songs }: CardProps) {
  const [selectedSong, setSelectedSong] = useState<string>("1");
  const [isPlaying, setIsPlaying] = useState(false);

  function onNextClick() {
    const nextSongIndex = Number(selectedSong) + 1;
    if (nextSongIndex > Object.values(songs).length) {
      return setSelectedSong("1");
    }
    return setSelectedSong(nextSongIndex.toString());
  }

  function onPrevClick() {
    const prevSongIndex = Number(selectedSong) - 1;
    if (prevSongIndex === 0) {
      return setSelectedSong(Object.values(songs).length.toString());
    }
    return setSelectedSong(prevSongIndex.toString());
  }

  function onPlayToggle() {
    setIsPlaying((prev) => !prev);
  }

  return (
    <section class="px-8 pt-8 flex flex-col w-[470px] h-[840px] bg-white">
      <CardHeader />
      <div class="flex flex-col">
        <CurrentSong song={songs[selectedSong]} />
        <div class="mb-8">
          <SongProgress
            isPlaying={isPlaying}
            song={songs[selectedSong]}
            onSongEnded={onNextClick}
          />
        </div>
        <div class="flex flex-row justify-between mx-5">
          <RepeatIcon />
          <PrevIcon onClick={onPrevClick} />
          {isPlaying
            ? <PauseIcon onClick={onPlayToggle} />
            : <PlayIcon onClick={onPlayToggle} />}
          <NextIcon onClick={onNextClick} />
          <ShuffleIcon />
        </div>
        <div class="flex flex-col gap-8 mt-10">
          <SongList
            items={songs}
            selectedSong={selectedSong}
            onSongClick={(song) => setSelectedSong(song)}
          />
        </div>
      </div>
    </section>
  );
}
