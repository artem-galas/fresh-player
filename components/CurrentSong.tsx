import { Song } from "../Domain/Song.ts";

type CurrentSongProps = {
  song: Song;
};

export default function CurrentSong({ song }: CurrentSongProps) {
  return (
    <div class="flex flex-col items-center">
      <div class="w-[100%] flex flex-col gap-2 flex-1 text-center">
        <p class="text-xl font-bold">{song.name}</p>
        <p>-Hans Zimer-</p>
      </div>
      <figure class="my-10 w-[235px] h-[235px] shadow-2xl">
        <img class="w-[100%]" src="covers/br-2049.jpeg" />
      </figure>
    </div>
  );
}
