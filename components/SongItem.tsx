import { tw } from "twind";

type Song = {
  name: string;
  duration: number;
};

type SongItemProps = {
  item: Song;
  isActive: boolean;
  setActive: () => void;
};

export default function SongItem({ item, isActive, setActive }: SongItemProps) {
  function formatDuration(duration: number) {
    return duration.toString().replace(".", ":");
  }

  return (
    <div
      onClick={setActive}
      class={tw`flex justify-between hover:cursor-pointer ${
        isActive && "font-semibold"
      }`}
    >
      <div class="flex items-center gap-2">
        <div
          class={tw`rounded-full w-1.5 h-1.5 bg-green-600 ${
            !isActive && "hidden"
          }`}
        />
        <p class="text-base">{item.name}</p>
      </div>
      <p>{formatDuration(item.duration)}</p>
    </div>
  );
}
