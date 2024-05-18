"use client";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Archive, Eye, MoreHorizontal, Pencil, Trash } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { formatDateTime } from "@/lib/utils";
import Link from "next/link";
import { remove, archive } from "@/actions/blog.actions";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PostWithAuthor } from "@/types/posts";

export type TableProps = {
  posts: PostWithAuthor[];
};

export const TablePost = (props: TableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="hidden w-[100px] sm:table-cell">
            <span className="sr-only">Image</span>
          </TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Author</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="hidden md:table-cell">Created at</TableHead>
          <TableHead>
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.posts.map((post) => {
          return (
            <TableRow key={post.id}>
              <TableCell className="hidden sm:table-cell">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Avatar className="size-12 aspect-square rounded-md object-cover">
                  <AvatarImage
                    className="object-cover"
                    src={
                      post.image
                        ? post.image
                        : `https://api.dicebear.com/8.x/shapes/svg?seed=${post.id}`
                    }
                    alt={`${post.title}`}
                  />
                </Avatar>
              </TableCell>
              <TableCell className="font-medium">{post.title}</TableCell>
              <TableCell>
                <Badge variant="outline">{post.author.email}</Badge>
              </TableCell>
              <TableCell>
                <Badge variant="outline">{post.status}</Badge>
              </TableCell>

              <TableCell className="hidden md:table-cell">
                {formatDateTime(post.createdAt)}
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup="true" size="icon" variant="ghost">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <Link href={`/dashboard/blog/preview/${post.id}`}>
                      <DropdownMenuItem className="flex items-center gap-2">
                        <Eye size={16} />
                        View
                      </DropdownMenuItem>
                    </Link>
                    <Link href={`/dashboard/blog/edit/${post.id}`}>
                      <DropdownMenuItem className="flex items-center gap-2">
                        <Pencil size={16} />
                        Edit
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem
                      className="flex items-center gap-2"
                      onClick={() => archive(post.id)}
                    >
                      <Archive size={16} />
                      Archive
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="flex items-center gap-2 text-red-500"
                      onClick={() => remove(post.id)}
                    >
                      <Trash size={16} />
                      Remove
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
