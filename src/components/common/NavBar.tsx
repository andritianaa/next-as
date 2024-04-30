import Image from "next/image";
import { Layout } from "../layout/Layout";
import { AlignJustify } from "lucide-react";
import { ModeToggle } from "@/features/theme/ModeToggle";

export const NavBar = () => {
  return (
    <nav className="bg-white p-2 sticky top-0 border-b z-50 dark:bg-[#020817]">
      <Layout className="flex justify-between items-center">
        <Image src="/icon.png" alt="" className="w-10 h-10" width={512} height={512}/>
        <ModeToggle/>
      </Layout>
    </nav>
  );
};
