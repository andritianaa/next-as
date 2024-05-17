import { SpotlightHero } from "@/components/home/SpotLight";
import { Tools } from "@/components/home/Tools";
import Pricing from "../components/home/Pricing";
import { NavBar } from "../components/common/NavBar";
import { currentUser } from "../lib/current-user";

export default async function Home() {
  const user = await currentUser();

  return (
    <>
      <NavBar />
      <SpotlightHero user={user}/>
      <Tools />
      <Pricing />
    </>
  );
}
