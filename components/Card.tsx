import CardHeader from "./CardHeader.tsx";
import {
  NextIcon,
  PauseIcon,
  PlayIcon,
  PrevIcon,
  RepeatIcon,
  ShuffleIcon,
} from "./icons/index.tsx";
import SongList from "./SongList.tsx";
import CurrentSong from "./CurrentSong.tsx";
import SongProgress from "../islands/SongProgress.tsx";
import { useState } from "preact/hooks";
import { Song } from "../Domain/Song.ts";

type CardProps = {
  songs: Song[];
};

export function Card({ songs }: CardProps) {
  const [selectedSong, setSelectedSong] = useState<Song>(songs[1]);

  return (
    <section class="px-8 pt-8 flex flex-col w-[470px] h-[840px] bg-white">
      <CardHeader />
      <div class="flex flex-col">
        <CurrentSong song={selectedSong} />
        <div class="mb-8">
          <SongProgress duration={selectedSong.duration} />
        </div>
        <div class="flex flex-row justify-between mx-5">
          <RepeatIcon />
          <PrevIcon />
          <PlayIcon />
          <NextIcon />
          <ShuffleIcon />
        </div>
        <div class="flex flex-col gap-8 mt-10">
          <SongList items={songs} onSongClick={(song) => setSelectedSong(song)} />
        </div>
      </div>
    </section>
  );
}
