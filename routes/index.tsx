import { Head } from "$fresh/runtime.ts";
import Card from "../islands/Card.tsx";
import data from "../static/data.json" assert { type: "json" };

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh Player</title>
      </Head>
      <main class="flex justify-center items-center w-full h-[100vh] bg-[#F5F5F5]">
        <Card songs={data}/>
      </main>
    </>
  );
}
