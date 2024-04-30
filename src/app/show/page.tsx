import type { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{  }>) {
  return <div className="flex w-screen h-screen justify-center items-center">
    <img src="/icon.svg" alt="" />
  </div>
}