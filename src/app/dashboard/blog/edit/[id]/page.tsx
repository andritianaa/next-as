import type { PageParams } from "@/types/next";
import { Form } from "./Form";
import { prisma } from "@/prisma";
import { notFound } from "next/navigation";
export default async function RoutePage(props: PageParams<{id:string}>) {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(props.params.id)
    },
    include: {
      author: true,
    },
  })
  if (post) {
    return <Form post={post} />;
  }else notFound()
}