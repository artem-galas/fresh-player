import { MenuIcon, PlusIcon } from "./icons/index.tsx";

export default function CardHeader() {
  return (
    <div class="flex flex-row justify-between">
      <MenuIcon />
      <p>Playing Now</p>
      <PlusIcon />
    </div>
  );
}
