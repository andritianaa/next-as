import type { LayoutParams } from "@/types/next";
import { Layout } from "@/components/layout/Layout";
import { Footer } from "@/components/common/Footer";
import { NavBar } from "../../../components/common/NavBar";

export default async function RouteLayout(props: LayoutParams<{}>) {
  return (
    <>
      <NavBar />
      <div className="relative">
        <Layout>
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                  {`Fin de l'inscription, le 20 juin 2024`}
                </p>

                <div className="mt-4 md:mb-12 max-w-2xl">
                  <h1 className="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl dark:text-neutral-200">
                    Inscription au hackathon
                  </h1>
                  <p className="text-gray-600 dark:text-neutral-400">
                    Vous êtes libre de choisir vos propres thèmes de projet,
                    mais vous devrez impérativement impliquer un ou plusieurs
                    Objectifs de Développement Durable (ODD) dans votre
                    conceptions.
                  </p>
                </div>

                <footer className="mt-3">
                  <p className="text-gray-600 dark:text-neutral-400">
                    Un challenge organisé par
                  </p>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="size-8 rounded-full"
                        src="/gdsc.png"
                        alt="Image Description"
                      />
                    </div>
                    <div className="grow ms-4">
                      <div className="font-semibold text-gray-800 dark:text-neutral-200">
                        Google Developer Students Club
                      </div>
                      <div className="text-xs text-gray-500 dark:text-neutral-500">
                        Institut Supérieur Polytechnique de Madagascar
                      </div>
                    </div>
                  </div>
                </footer>
              </div>

              <div>{props.children}</div>
            </div>
          </div>
        </Layout>
        <Footer />
      </div>
    </>
  );
}
