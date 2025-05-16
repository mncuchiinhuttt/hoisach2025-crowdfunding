import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
<div className="flex flex-col items-center justify-center min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white">
  <div className="flex items-center justify-center">
    <p className="text-4xl font-bold">
      Content gì đó
    </p>
  </div>
</div>
  );
}
