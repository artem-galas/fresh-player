import { useState } from "preact/hooks";
import SongItem from "../components/SongItem.tsx";
import { Song } from "../Domain/Song.ts";

type SongListProps = {
  items: Record<string, Song>;
  selectedSong: string;
  onSongClick: (key: string) => void;
};

export default function SongList({ items, selectedSong, onSongClick }: SongListProps) {
  function onClick(key: string) {
    onSongClick(key);
  }

  return (
    <>
      {Object.entries(items).map(([key, item]) => (
        <SongItem
          key={key}
          item={item}
          isActive={selectedSong === key}
          setActive={() => onClick(key)}
        />
      ))}
    </>
  );
}
