import { useEffect, useMemo, useState } from "preact/hooks";
import formatDuration from "../utils/formatDuration.ts";
import formatTime from "../utils/formatTime.ts";
import { Song } from "../Domain/Song.ts";

function getDurationParsed(duration: string) {
  return duration
    .split(".")
    .map((d) => parseInt(d));
}

type SongProgressProps = {
  isPlaying: boolean;
  song: Song;
  onSongEnded: () => void;
};

export default function SongProgress(
  { isPlaying, song, onSongEnded }: SongProgressProps,
) {
  const [currentTime, setCurrentTime] = useState(0);
  const durationInSeconds = useMemo(() => {
    const [durationMinutes, durationSeconds] = getDurationParsed(song.duration);
    return durationMinutes * 60 + durationSeconds;
  }, [song]);

  function calculateProgress() {
    return (currentTime * 100 / durationInSeconds);
  }

  useEffect(() => {
    setCurrentTime(0);
  }, [song])

  useEffect(() => {
    const timer = setInterval(() => {
      if (isPlaying) {
        setCurrentTime((currentTime) => {
          if (currentTime === durationInSeconds) {
            clearInterval(timer);
            onSongEnded();
            return 0;
          }
          return currentTime + 1;
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <>
      <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
        <div
          class="bg-green-600 h-1.5 rounded-full"
          style={`width: ${calculateProgress()}%`}
        />
      </div>
      <div class="flex justify-between">
        <div class="mt-1 text-sm">{formatTime(currentTime)}</div>
        <div class="mt-1 text-sm">{formatDuration(song.duration)}</div>
      </div>
    </>
  );
}
