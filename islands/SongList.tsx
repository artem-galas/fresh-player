import { useState } from "preact/hooks";
import SongItem from "../components/SongItem.tsx";

type Song = {
  name: string;
  duration: number;
};

type SongListProps = {
  items: Song[];
};

export default function SongList({ items }: SongListProps) {
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
