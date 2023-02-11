import CardHeader from "./CardHeader.tsx";
import {
  NextIcon,
  PauseIcon,
  PlayIcon,
  PrevIcon,
  RepeatIcon,
  ShuffleIcon,
} from "./icons/index.tsx";
import SongList from "../islands/SongList.tsx";
import CurrentSong from "./CurrentSong.tsx";
import SongProgress from "../islands/SongProgress.tsx";

type Song = {
  name: string;
  duration: number;
  cover: string;
};

type CardProps = {
  songs: Song[];
};

export function Card({songs}: CardProps) {
  return (
    <section class="px-8 pt-8 flex flex-col w-[470px] h-[840px] bg-white">
      <CardHeader />
      <div class="flex flex-col">
        <CurrentSong/>
        <div class="mb-8">
          <SongProgress duration={5.34}/>
        </div>
        <div class="flex flex-row justify-between mx-5">
          <RepeatIcon />
          <PrevIcon />
          <PlayIcon />
          <NextIcon />
          <ShuffleIcon />
        </div>
        <div class="flex flex-col gap-8 mt-10">
          <SongList items={songs}/>
        </div>
      </div>
    </section>
  );
}
