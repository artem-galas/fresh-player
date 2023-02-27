import { parse } from "https://deno.land/std@0.177.0/datetime/parse.ts";
import { format } from "https://deno.land/std@0.177.0/datetime/format.ts";

export default function formatTime(seconds: number) {
    const dateTime = new Date(seconds * 1000).toLocaleTimeString("en-GB", {
        timeZone: "Etc/UTC",
        hour12: false,
        hour: "numeric",
        minute: "numeric",
        second: "2-digit",
    });

    const date = parse(dateTime, "HH:mm:ss");

    return format(date, "m:ss");
}