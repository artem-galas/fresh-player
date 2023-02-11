import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Card } from "../components/Card.tsx";
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
