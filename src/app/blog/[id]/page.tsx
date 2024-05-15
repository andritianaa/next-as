/* eslint-disable @next/next/no-img-element */
import type { PageParams } from "@/types/next";
import { prisma } from "@/prisma";
import { notFound } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {Content} from "./Content"
import { PostStatus } from "@prisma/client";

export default async function RoutePage(props: PageParams<{ id: string }>) {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(props.params.id)
    },
    include: {
      author: true,
    },
  });
  if (post) {
    return (
      <>
        <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-2xl">
            <div className="flex justify-between items-center mb-6">
              <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                <div className="flex-shrink-0">
                  <Avatar className="size-12">
                    <AvatarFallback>{post.author.email}</AvatarFallback>
                    <AvatarImage
                      src={
                        post.author.image ??
                        `https://api.dicebear.com/8.x/bottts-neutral/svg?seed=${post.author.email}`
                      }
                      alt={`${post.author} - profile picture`}
                    />
                  </Avatar>
                </div>

                <div className="grow">
                  <div className="flex justify-between items-center gap-x-2">
                    <div>
                      <div className="hs-tooltip [--trigger:hover] [--placement:bottom] inline-block">
                        <div className="hs-tooltip-toggle sm:mb-1 block text-start cursor-pointer">
                          <span className="font-semibold text-gray-800 dark:text-neutral-200">
                            {post.author.name ?? post.author.email}
                          </span>
                        </div>
                      </div>

                      <ul className="text-xs text-gray-500 dark:text-neutral-500">
                        <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                          {post.createdAt.toLocaleDateString()}
                        </li>
                        <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                          {post.readTime} min read
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-5 md:space-y-8">
              <figure>
                <img
                  className="w-full object-cover rounded-xl"
                  src={post.image}
                  alt="Image Description"
                />
              </figure>
              <div className="space-y-3">
                <h2 className="text-2xl font-bold md:text-3xl dark:text-white">
                  {post.title}
                </h2>
              </div>
              <Content content={post.content}/>
            </div>
          </div>
        </div>
      </>
    );
  } else notFound();
}
