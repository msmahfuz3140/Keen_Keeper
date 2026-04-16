import Friends from "@/Components/Friends/Friends";
import Stats from "@/Components/Stats/Stats";
import { Plus } from "lucide-react";



export default function Home() {


  return (
    <section>
      <div className="flex  flex-col justify-center items-center gap-5 text-center px-2 my-10 md:my-20">
        <h1 className="text-4xl font-bold"> Friends to keep close in your life </h1>
        <p className="max-w-md  text-gray-500">Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.</p>
        <button className="flex px-3 py-2 items-center gap-1 rounded-md bg-green-800 text-white hover:scale-105"><Plus />  Add Friend</button>
      </div>
      <Stats />
      <Friends></Friends>
    </section>
  );
}

