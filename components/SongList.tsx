import { useState } from "preact/hooks";
import SongItem from "../components/SongItem.tsx";
import { Song } from "../Domain/Song.ts";

type SongListProps = {
  items: Song[];
  onSongClick: (song: Song) => void;
};

export default function SongList({ items, onSongClick }: SongListProps) {
  function onClick(song: Song) {
    onSongClick(song);
  }

  return (
    <>
      {items.map((item, index) => (
        <SongItem
          key={index}
          item={item}
          isActive={false}
          setActive={() => onClick(items[index])}
        />
      ))}
    </>
  );
}
