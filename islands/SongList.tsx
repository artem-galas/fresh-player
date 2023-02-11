import { useState } from "preact/hooks";
import SongItem from "../components/SongItem.tsx";

type Song = {
  name: string;
  duration: number;
};

type SongListProps = {
  items?: Song[];
};

const songsMock: Song[] = [
  {
    name: "Sapper's Tree",
    duration: 3.37,
  },
  {
    name: "Someone lived this",
    duration: 5.35,
  },
  {
    name: "Summer wind",
    duration: 2.54,
  },
];

export default function SongList({ items = songsMock }: SongListProps) {
  const [active, setActive] = useState<number>(1);

  return (
    <>
      {items.map((item, index) => (
        <SongItem
          key={index}
          item={item}
          isActive={index === active}
          setActive={() => setActive(index)}
        />
      ))}
    </>
  );
}
