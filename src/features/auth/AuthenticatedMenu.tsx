"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { LayoutDashboard, LogOut } from "lucide-react";
import { SignOutAction } from "@/actions/auth.actions";
import Link from "next/link";

export type UserProps = {
  email: string | null | undefined;
  image: string | null | undefined;
  id: string;
  name: string | null | undefined;
};

export const AuthenticatedMenu = (props: UserProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer px-4 hover:bg-accent hover:text-accent-foreground inline-flex gap-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
          <Avatar className="size-6">
            <AvatarFallback>{props.email}</AvatarFallback>
            <AvatarImage
              src={
                props.image ??
                `https://api.dicebear.com/8.x/bottts-neutral/svg?seed=${props.email}`
              }
              alt={`${props.email} - profile picture`}
            />
          </Avatar>
          {props.name}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        <DropdownMenuLabel className="flex gap-2 font-normal">
          <Avatar className="size-6">
            <AvatarFallback>{props.email}</AvatarFallback>
            {props.image ? (
              <AvatarImage
                src={props.image}
                alt={`${props.email} - profile picture`}
              />
            ) : (
              <AvatarImage
                src={`https://api.dicebear.com/8.x/bottts-neutral/svg?seed=${props.email}`}
                alt={`${props.email} - profile picture`}
              />
            )}
          </Avatar>
          {props.email}
        </DropdownMenuLabel>
        <Link href="/dashboard">
          <DropdownMenuItem className="flex items-center gap-3">
            <LayoutDashboard size={21} />
            <span>Dashboard</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem
          className="flex items-center gap-3"
          onClick={() => SignOutAction()}
        >
          <LogOut size={21} />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
