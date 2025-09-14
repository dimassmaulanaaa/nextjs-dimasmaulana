import ActionButtons from "@/components/home/ActionButtons";
import { user } from "@/data/user";

export default function Home() {
  return (
    <main
      id="home"
      className="bg-[url(https://sejdaw0pnkrbbizs.public.blob.vercel-storage.com/background.webp)] bg-cover bg-bottom h-[calc(100vh-104px)] md:h-[calc(100vh-44px)] flex flex-col md:items-center justify-center gap-5 pt-[78px] md:pt-[44px] mx-auto px-3 text-start md:text-center"
      aria-labelledby="page-title"
    >
      <h1
        id="page-title"
        className="flex flex-col font-medium text-7xl md:text-8xl"
      >
        <span className="text-3xl md:text-4xl">Hello World! My name is</span>
        {user.name}
      </h1>

      <p className="max-w-sm md:max-w-7xl text-xl md:text-2xl">
        {user.headline}
      </p>

      <ActionButtons />
    </main>
  );
}
