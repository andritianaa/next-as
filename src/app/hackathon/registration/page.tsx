import type { PageParams } from "@/types/next";
import { NavBar } from "@/components/common/NavBar";
import { Form } from "./Form";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <>
      <Form/>
    </>
  );
}
