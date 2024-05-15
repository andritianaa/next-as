import type { PageParams } from "@/types/next";
import { prisma } from "@/prisma";
import {
  CardHeader,
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { TablePost } from "./Table";


export default async function RoutePage(props: PageParams<{}>) {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });

  return (
    <div className="p-4">
      <Card className="">
        <CardHeader>
          <CardTitle>All blog posts</CardTitle>
          <CardDescription>Manage posts.</CardDescription>
        </CardHeader>
        <CardContent>
          <TablePost posts={posts}/>
        </CardContent>
      </Card>
    </div>
  );
}
