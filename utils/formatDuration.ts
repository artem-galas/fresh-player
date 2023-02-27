import { parse } from "https://deno.land/std@0.177.0/datetime/parse.ts";
import { format } from "https://deno.land/std@0.177.0/datetime/format.ts";

export default function formatDuration(duration: string) {
  const date = parse(duration, 'm.ss');

  return format(date, 'm:ss');
}


