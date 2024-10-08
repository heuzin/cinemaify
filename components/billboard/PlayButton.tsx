"use client";

import { useRouter } from "next/navigation";
import { BsFillPlayFill } from "react-icons/bs";

type PlayButtonProps = {
  id?: string;
};

const PlayButton: React.FC<PlayButtonProps> = ({ id }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/watch/${id}`)}
      className="bg-white rounded-md py-1 px-2 md:py-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition"
    >
      <BsFillPlayFill size={25} className="mr-1" />
      Play
    </button>
  );
};

export default PlayButton;
