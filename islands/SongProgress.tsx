import formatDuration from "../utils/formatDuration.tsx";

type SongProgressProps = {
    duration: number;
}

export default function SongProgress({duration}: SongProgressProps) {
  return (
    <>
      <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
        <div class="bg-green-600 h-1.5 rounded-full" style="width: 45%" />
      </div>
      <div class="flex justify-between">
        <div class="mt-1 text-sm">3:47</div>
        <div class="mt-1 text-sm">{formatDuration(duration)}</div>
      </div>
    </>
  );
}
