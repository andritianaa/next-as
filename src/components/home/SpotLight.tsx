import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { ChevronRight, Clipboard } from "lucide-react";
import Link from "next/link";

export function SpotlightHero() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] dark:before:bg-none ">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div className="flex justify-center">
            <a
              className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:border-neutral-600 dark:text-neutral-200"
              href="#"
            >
              PRO release - Join to waitlist
              <span className="py-1 px-2 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-neutral-700 dark:text-neutral-400">
              <ChevronRight size={16}/>
              </span>
            </a>
          </div>
          <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="block font-bold  text-4xl md:text-5xl lg:text-6xl text-gradient">
              {`Let's Build faster`}
            </h1>
          </div>

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-neutral-400">
              Preline UI is an open-source set of prebuilt UI components,
              ready-to-use examples and Figma design system based on the
              utility-first Tailwind CSS framework.
            </p>
          </div>

          <div className="mt-8 gap-3 flex justify-center">
            <Link
              className="bg-blue-600 hover:bg-blue-700 flex justify-center items-center px-4 rounded-lg transition text-white shadow-md"
              href="/authentication"
            >
              Get started
            </Link>
            <button
              type="button"
              className="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            >
              $ npx next-as-cli
              <span className="flex justify-center items-center bg-gray-200 rounded-md size-7 dark:bg-neutral-700 dark:text-neutral-400">
              <Clipboard size={16} className="group-hover:rotate-6 transition"/>
              </span>
            </button>
          </div>

          <div className="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
            <span className="text-sm text-gray-600 dark:text-neutral-400">
              Package Manager:
            </span>
            <span className="text-sm font-bold text-gray-900 dark:text-white">
              npm
            </span>
            <svg
              className="size-5 text-gray-300 dark:text-neutral-600"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 13L10 3"
                stroke="currentColor"
                strokeLinecap="round"
              />
            </svg>
            <a
              className="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium"
              href="#"
            >
              Installation Guide
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
