import Link from "next/link";
import Image from "next/image";
import { baseAuth } from "@/lib/auth";
import { Layout } from "../layout/Layout";
import { SigninBtn } from "@/features/auth/SigninBtn";
import { ModeToggle } from "@/features/theme/ModeToggle";
import { AuthenticatedMenu } from "@/features/auth/AuthenticatedMenu";

export const NavBar = async () => {
  const session = await baseAuth();
  return (
    <nav className="bg-white p-2 sticky top-0 border-b z-50 dark:bg-[#020817]">
      <Layout className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="/icon.png"
            alt=""
            className="size-8 lg:size-10"
            width={512}
            height={512}
          />
        </Link>
        <div className="flex gap-2">
          {!session?.user && <SigninBtn />}
          {session?.user && (
            <AuthenticatedMenu
              email={session?.user.email}
              image={session?.user.image}
              name={session?.user.name}
              id={session?.user.id!}
            />
          )}

          <ModeToggle />
        </div>
      </Layout>
    </nav>
  );
};
