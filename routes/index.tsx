import { Head } from "$fresh/runtime.ts";
import { Card } from "../components/Card.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh Player</title>
      </Head>
      <section class="flex justify-center items-center w-full h-[100vh] bg-[#F5F5F5]">
        <Card/>
      </section>
    </>
  );
}
