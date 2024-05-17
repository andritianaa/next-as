import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { GetStartedButton } from "./GetStartedButton";
import { currentUser } from "../../lib/current-user";
import { User } from "@prisma/client";
import { ChevronRight } from "lucide-react";

type Props = {
  user: User | undefined | null;
};

export function SpotlightHero(props: Props) {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] dark:before:bg-none ">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div className="flex justify-center"></div>
          <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="block font-bold text-4xl md:text-5xl lg:text-6xl text-gradient">
              Commit
              <br />
              Montrez votre projet
            </h1>
          </div>

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-neutral-400">
              Un événement dont le but est de mettre en avant des projet et des
              produits 100% Malagasy grâce à un concours, des stands et des
              talks
            </p>
          </div>

          <div className="mt-8 gap-3 flex justify-center">
            <GetStartedButton isAuthenticated={props.user ? true : false} />
          </div>

          <div className="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
            <span className="text-sm text-gray-600 dark:text-neutral-400">
              Découvrez le déroulement du
            </span>

            <a
              className="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium"
              href="#"
            >
              challenge
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
