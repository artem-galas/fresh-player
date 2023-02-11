import { ComponentChildren } from "preact";
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

type CardProps = {
  children: ComponentChildren;
};

export function Card() {
  return (
    <section class="px-8 pt-8 flex flex-col w-[470px] h-[840px] bg-white">
      <CardHeader/>
      <div class="flex flex-col">
        <div class="flex flex-col items-center">
          <div class="w-[100%] flex flex-col gap-2 flex-1 text-center">
            <p class="text-xl font-bold">Someone lived this</p>
            <p>-Hans Zimer-</p>
          </div>
          <figure class="my-10 w-[235px] h-[235px] shadow-2xl">
            <img class="w-[100%]" src="covers/br-2049.jpeg" />
          </figure>
        </div>
        <div class="mb-8">
          <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
            <div class="bg-green-600 h-1.5 rounded-full" style="width: 45%" />
          </div>
          <div class="flex justify-between">
            <div class="mt-1 text-sm">3:47</div>
            <div class="mt-1 text-sm">5:35</div>
          </div>
        </div>
        <div class="flex flex-row justify-between mx-5">
          <RepeatIcon />
          <PrevIcon />
          <PlayIcon />
          <NextIcon />
          <ShuffleIcon />
        </div>
        <div class="flex flex-col gap-8 mt-10">
          <SongList/>
        </div>
      </div>
    </section>
  );
}
