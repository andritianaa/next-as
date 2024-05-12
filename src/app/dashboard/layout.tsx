import type { LayoutParams } from "@/types/next";
import { SigninBtn } from "@/features/auth/SigninBtn";
import { ModeToggle } from "@/features/theme/ModeToggle";
import { AuthenticatedMenu } from "@/features/auth/AuthenticatedMenu";
import { baseAuth } from "@/lib/auth";

import Link from "@/components/common/LinkActivated";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import {
  BellIcon,
  HomeIcon,
  LineChartIcon,
  MenuIcon,
  Package2Icon,
  PackageIcon,
  SearchIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "lucide-react";
import Image from "next/image";

export default async function RouteLayout(props: LayoutParams<{}>) {
  const session = await baseAuth();

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] ">
      <div className="hidden border-r bg-muted/40 md:block dark:bg-[#020817] bg-white ">
        <div className="flex h-full max-h-screen flex-col gap-2 dark:bg-[#020817] bg-white">
          <div className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 justify-end dark:bg-[#020817] bg-white">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <Link href="/">
                <Image
                  src="/icon.png"
                  alt=""
                  className="size-10"
                  width={512}
                  height={512}
                />
              </Link>
              <span className="">Next AS</span>
            </Link>
            <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary"
                href="/dashboard"
              >
                <HomeIcon className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary"
                href="/dashboard/analytics"
              >
                <LineChartIcon className="h-4 w-4" />
                Analytics
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary"
                href="/dashboard/users"
              >
                <UsersIcon className="h-4 w-4" />
                Users
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card x-chunk="dashboard-02-chunk-0">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button className="w-full" size="sm">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b px-4 lg:h-[60px] lg:px-6 justify-end dark:bg-[#020817] bg-white">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                className="shrink-0 md:hidden"
                size="icon"
                variant="outline"
              >
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col" side="left">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  className="flex items-center gap-2 text-lg font-semibold"
                  href="#"
                >
                  <Link href="/">
                    <Image
                      src="/icon.png"
                      alt=""
                      className="size-10"
                      width={512}
                      height={512}
                    />
                  </Link>
                  <span className="sr-only">Next AS</span>
                </Link>
                <Link
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2  hover:text-foreground"
                  href="/dashboard"
                >
                  <HomeIcon className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2  hover:text-foreground"
                  href="/dashboard/analytics"
                >
                  <LineChartIcon className="h-5 w-5" />
                  Analytics
                </Link>
                <Link
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2  hover:text-foreground"
                  href="/dashboard/users"
                >
                  <UsersIcon className="h-5 w-5" />
                  Users
                </Link>
              </nav>
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited access to our
                      support team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" size="sm">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>

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
        </header>
        {props.children}
      </div>
    </div>
  );
}
