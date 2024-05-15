import Link from "next/link";
import Image from "next/image";
import { Layout } from "../layout/Layout";
import { SigninBtn } from "@/features/auth/SigninBtn";
import { ModeToggle } from "@/features/theme/ModeToggle";
import { AuthenticatedMenu } from "@/features/auth/AuthenticatedMenu";
import { currentUser } from "../../lib/current-user";

export const NavBar = async () => {
  const user = await currentUser();
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
          {!user && <SigninBtn />}
          {user && (
            <AuthenticatedMenu
              email={user.email}
              image={user.image}
              name={user.name}
              id={user.id!.toString()}
              privileges={user.privileges}
            />
          )}

          <ModeToggle />
        </div>
      </Layout>
    </nav>
  );
};
