import type { LayoutParams } from "@/types/next";
import { Layout } from "@/components/layout/Layout";
import { Input } from "../../../components/ui/input";
import Link from "next/link";

export default async function RouteLayout(props: LayoutParams<{}>) {
  return (
    <div className="relative">
      <Layout>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                Preline: A vision for 2024
              </p>

              <div className="mt-4 md:mb-12 max-w-2xl">
                <h1 className="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl dark:text-neutral-200">
                  Fully customizable rules to match your unique needs
                </h1>
                <p className="text-gray-600 dark:text-neutral-400">
                  We provide you with a test account that can be set up in
                  seconds. Our main focus is getting responses to you as soon as
                  we can.
                </p>
              </div>

              <blockquote className="hidden md:block relative max-w-sm">
                <svg
                  className="absolute top-0 start-0 transform -translate-x-6 -translate-y-8 size-16 text-gray-200 dark:text-neutral-800"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                    fill="currentColor"
                  />
                </svg>

                <div className="relative z-10">
                  <p className="text-xl italic text-gray-800 dark:text-white">
                    Amazing people to work with. Very fast and professional
                    partner.
                  </p>
                </div>

                <footer className="mt-3">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="size-8 rounded-full"
                        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                        alt="Image Description"
                      />
                    </div>
                    <div className="grow ms-4">
                      <div className="font-semibold text-gray-800 dark:text-neutral-200">
                        Josh Grazioso
                      </div>
                      <div className="text-xs text-gray-500 dark:text-neutral-500">
                        Director Payments & Risk | Airbnb
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>

            <div>
              <form>
                <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
                  <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg dark:bg-neutral-900">
                    <div className="text-center">
                      <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                        Start your free trial
                      </h1>
                      <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                        Already have an account?
                        <a
                          className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
                          href="#"
                        >
                          Sign in here
                        </a>
                      </p>
                    </div>

                    <div className="mt-5">
                      <button
                        type="button"
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700  dark:hover:bg-neutral-800"
                      >
                        <svg
                          className="w-4 h-auto"
                          width="46"
                          height="47"
                          viewBox="0 0 46 47"
                          fill="none"
                        >
                          <path
                            d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                            fill="#4285F4"
                          ></path>
                          <path
                            d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                            fill="#34A853"
                          ></path>
                          <path
                            d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                            fill="#FBBC05"
                          ></path>
                          <path
                            d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                            fill="#EB4335"
                          ></path>
                        </svg>
                        Sign up with Google
                      </button>

                      <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-700 dark:after:border-neutral-700">
                        Or
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          type="text"
                          placeholder="John"
                          label="First name"
                        />
                        <Input
                          type="text"
                          placeholder="Doe"
                          label="Last name"
                        />

                        <Input
                          type="email"
                          placeholder="you@email.com"
                          label="Email"
                        />
                        <Input
                          type="text"
                          placeholder="Preline"
                          label="Company name"
                        />

                        <div className="relative col-span-full">
                          <Input
                            type="password"
                            placeholder="********"
                            label="New password"
                          />
                          <div className="hidden absolute z-10 w-full bg-gray-100 rounded-lg p-4 dark:bg-neutral-950">
                            <div
                              data-hs-strong-password='{
                          "target": "#hs-hero-signup-form-floating-input-new-password",
                          "hints": "#hs-strong-password-popover",
                          "stripclassNamees": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-teal-500 h-2 flex-auto rounded-full bg-blue-500 opacity-50 mx-1",
                          "mode": "popover"
                        }'
                              className="flex mt-2 -mx-1"
                            ></div>

                            <h4 className="mt-3 text-sm font-semibold text-gray-800 dark:text-white">
                              Your password must contain:
                            </h4>

                            <ul className="space-y-1 text-sm text-gray-500 dark:text-neutral-500">
                              <li
                                data-hs-strong-password-hints-rule-text="min-length"
                                className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                              >
                                <span className="hidden" data-check>
                                  <svg
                                    className="flex-shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  >
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                </span>
                                <span data-uncheck>
                                  <svg
                                    className="flex-shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  >
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                  </svg>
                                </span>
                                Minimum number of characters is 6.
                              </li>
                              <li
                                data-hs-strong-password-hints-rule-text="lowercase"
                                className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                              >
                                <span className="hidden" data-check>
                                  <svg
                                    className="flex-shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  >
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                </span>
                                <span data-uncheck>
                                  <svg
                                    className="flex-shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  >
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                  </svg>
                                </span>
                                Should contain lowercase.
                              </li>
                              <li
                                data-hs-strong-password-hints-rule-text="uppercase"
                                className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                              >
                                <span className="hidden" data-check>
                                  <svg
                                    className="flex-shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  >
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                </span>
                                <span data-uncheck>
                                  <svg
                                    className="flex-shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  >
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                  </svg>
                                </span>
                                Should contain uppercase.
                              </li>
                              <li
                                data-hs-strong-password-hints-rule-text="numbers"
                                className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                              >
                                <span className="hidden" data-check>
                                  <svg
                                    className="flex-shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  >
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                </span>
                                <span data-uncheck>
                                  <svg
                                    className="flex-shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  >
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                  </svg>
                                </span>
                                Should contain numbers.
                              </li>
                              <li
                                data-hs-strong-password-hints-rule-text="special-characters"
                                className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                              >
                                <span className="hidden" data-check>
                                  <svg
                                    className="flex-shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  >
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                </span>
                                <span data-uncheck>
                                  <svg
                                    className="flex-shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  >
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                  </svg>
                                </span>
                                Should contain special characters.
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-span-full">
                          <Input
                            type="password"
                            placeholder="********"
                            label="Current password"
                          />
                        </div>
                      </div>

                      <div className="mt-5 flex items-center">
                        <div className="flex">
                          <Input
                            name="remember-me"
                            type="checkbox"
                            className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                          />
                        </div>
                        <div className="ms-3">
                          <Link href={"/terms"}>Terms and Conditions</Link>
                        </div>
                      </div>

                      <div className="mt-5">
                        <button
                          type="submit"
                          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          Get started
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-12 py-3 flex items-center text-sm text-gray-800 gap-x-1.5 after:flex-1 after:border-t after:border-gray-200 after:ms-6  dark:after:border-neutral-700">
          <span className="font-semibold bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
            50,000
          </span>
          individuals and companies trust Preline
        </div>

        <div className="flex flex-wrap gap-x-6 sm:gap-x-12 lg:gap-x-24">
          <svg
            className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 text-gray-500 dark:text-neutral-500"
            enable-background="new 0 0 2499 614"
            viewBox="0 0 2499 614"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m431.7 0h-235.5v317.8h317.8v-235.5c0-45.6-36.7-82.3-82.3-82.3zm-308.9 0h-40.5c-45.6 0-82.3 36.7-82.3 82.3v40.5h122.8zm-122.8 196.2h122.8v122.8h-122.8zm392.5 317.8h40.5c45.6 0 82.3-36.7 82.3-82.3v-39.2h-122.8zm-196.3-121.5h122.8v122.8h-122.8zm-196.2 0v40.5c0 45.6 36.7 82.3 82.3 82.3h40.5v-122.8zm828-359.6h-48.1v449.4h254.5v-43h-206.4zm360.8 119c-93.7 0-159.5 69.6-159.5 169.6v11.5c1.3 43 20.3 83.6 51.9 113.9 30.4 27.9 69.6 44.3 111.4 44.3h6.3c44.3 0 86.1-16.5 119-44.3l1.3-1.3-21.5-35.4-2.5 1.3c-26.6 24.1-59.5 38-94.9 38-58.2 0-117.7-38-121.5-122.8h243.1v-2.5s1.3-15.2 1.3-22.8c-.3-91.2-53.4-149.5-134.4-149.5zm-108.9 134.2c10.1-57 51.9-93.7 106.3-93.7 40.5 0 84.8 24.1 88.6 93.7zm521.6-96.2v16.5c-20.3-34.2-58.2-55.7-97.5-55.7h-3.8c-86.1 0-145.6 68.4-145.6 168.4 0 101.3 57 169.6 141.8 169.6 67.1 0 97.5-40.5 107.6-58.2v49.4h45.6v-447h-46.8v157zm-98.8 257c-59.5 0-98.7-50.6-98.7-126.6 0-73.4 41.8-125.3 100-125.3 49.4 0 98.7 39.2 98.7 125.3 0 93.7-51.9 126.6-100 126.6zm424.1-250.7v2.5c-8.9-15.2-36.7-48.1-103.8-48.1-84.8 0-140.5 64.6-140.5 163.3s58.2 165.8 144.3 165.8c46.8 0 78.5-16.5 100-50.6v44.3c0 62-39.2 97.5-108.9 97.5-29.1 0-59.5-7.6-86.1-21.5l-2.5-1.3-17.7 39.2 2.5 1.3c32.9 16.5 69.6 25.3 105.1 25.3 74.7 0 154.4-38 154.4-143.1v-311.3h-46.8zm-93.7 241.8c-62 0-102.5-48.1-102.5-122.8 0-76 35.4-119 96.2-119 67.1 0 98.7 39.2 98.7 119 1.3 78.5-31.6 122.8-92.4 122.8zm331.7-286.1c-93.7 0-158.2 69.6-158.2 168.4v11.4c1.3 43 20.3 83.6 51.9 113.9 30.4 27.9 69.6 44.3 111.4 44.3h6.3c44.3 0 86.1-16.5 119-44.3l1.3-1.3-22.8-35.4-2.5 1.3c-26.6 24.1-59.5 38-94.9 38-58.2 0-117.7-38-121.5-122.8h244.2v-2.5s1.3-15.2 1.3-22.8c0-89.9-53.2-148.2-135.5-148.2zm-107.6 134.2c10.1-57 51.9-93.7 106.3-93.7 40.5 0 84.8 24.1 88.6 93.7zm440.6-127.9c-6.3-1.3-11.4-1.3-17.7-2.5-44.3 0-81 27.9-100 74.7v-72.2h-46.8l1.3 320.3v2.5h48.1v-135.4c0-20.3 2.5-41.8 8.9-60.8 15.2-49.4 49.4-81 89.9-81 5.1 0 10.1 0 15.2 1.3h2.5v-46.8z"
              fill="currentColor"
            />
          </svg>

          <svg
            className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 text-gray-500 dark:text-neutral-500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 32"
          >
            <g clip-path="url(#a)">
              <path
                d="M46.6 11c.5-.7 1-1.3 1.9-1.7.7-.5 1.6-.7 2.6-.7v3.9h-1c-1.1 0-2 .2-2.6.8-.6.5-1 1.5-1 2.8v7.3H43V8.8h3.7v2.3ZM53 16c0-1.4.2-2.7.8-3.9a6.6 6.6 0 0 1 5.9-3.6 6 6 0 0 1 4.9 2.4v-2h3.7v14.5h-3.7v-2.1c-.5.6-1.2 1.2-2 1.7-.9.4-1.8.6-3 .6a6.4 6.4 0 0 1-5.8-3.6 8.7 8.7 0 0 1-.9-4Zm11.6.1c0-.9-.2-1.7-.6-2.3-.3-.6-.8-1.1-1.4-1.5-.6-.3-1.3-.5-2-.5a3.8 3.8 0 0 0-3.3 2c-.4.6-.5 1.4-.5 2.2 0 1 .1 1.7.5 2.4a3.8 3.8 0 0 0 3.4 2 4 4 0 0 0 1.9-.5c.6-.4 1-.9 1.4-1.5.4-.6.6-1.4.6-2.3ZM86.4 8.8l-9.2 21.5h-4l3.3-7.3-6-14.2h4.2L78.5 19l3.9-10.2h4ZM95.2 23.6a8 8 0 0 1-3.8-.9 7 7 0 0 1-2.7-2.7 8 8 0 0 1-1-3.9c0-1.5.3-2.8 1-4a7 7 0 0 1 2.8-2.6 8 8 0 0 1 3.8-1 8 8 0 0 1 3.9 1 7.6 7.6 0 0 1 3.7 6.6c0 1.5-.3 2.8-1 4a7 7 0 0 1-2.8 2.6c-1.2.6-2.4 1-3.9 1Zm0-3.2a3.6 3.6 0 0 0 3.3-2c.4-.6.6-1.4.6-2.3 0-1.4-.4-2.4-1.1-3.2a3.6 3.6 0 0 0-2.7-1.1c-1.1 0-2 .4-2.7 1.1-.7.8-1.1 1.8-1.1 3.2 0 1.4.4 2.5 1 3.2.8.7 1.6 1.1 2.7 1.1ZM114.1 8.6c1.8 0 3.2.6 4.3 1.7 1 1 1.6 2.6 1.6 4.5v8.6h-3.7v-8c0-1.2-.3-2.1-1-2.7-.5-.7-1.3-1-2.3-1-1 0-1.9.3-2.5 1-.6.6-.8 1.5-.8 2.6v8h-3.8V8.9h3.8v1.8a5 5 0 0 1 1.8-1.4 6 6 0 0 1 2.6-.6ZM25.1 0H7C3 0 0 3 0 6.9V25C0 29 3 32 6.9 32H25c3.8 0 6.9-3 6.9-6.9V7C32 3 29 0 25.1 0Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.7 12a2.5 2.5 0 1 0 0-5.1 2.5 2.5 0 0 0 0 5Zm4-5.1a6.1 6.1 0 1 1 0 12.1V7Zm0 12.1 6.2 6.1H9V11.4l7.7 7.6Z"
                fill="currentColor"
                className="fill-white dark:fill-neutral-900"
              />
            </g>
          </svg>

          <svg
            className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 text-gray-500 dark:text-neutral-500"
            xmlns="http://www.w3.org/2000/svg"
            width="2500"
            height="1036"
            viewBox="0 -6.166 294.398 121.975"
          >
            <path
              d="M12.139 90.511c-3.939 0-7.799-.479-10.938-1.292l.487-8.277c3.053 1.123 7.313 2.012 11.254 2.012 5.952 0 10.775-2.492 10.775-8.359C23.718 63.172 0 68.002 0 50.466c0-9.325 7.315-15.834 19.941-15.834 3.214 0 6.51.397 9.809.959l-.485 7.802c-3.132-.963-6.591-1.527-9.806-1.527-6.754 0-10.211 3.134-10.211 7.638 0 10.855 23.72 6.839 23.72 23.798-.005 9.973-7.882 17.209-20.829 17.209M54.106 90.264c-2.249 0-3.938-.076-6.03-.479v17.397h-8.601V49.746h8.12c0 2.094-.082 5.309-.484 7.476h.162c2.25-5.068 6.833-8.283 12.944-8.283 9.487 0 14.712 6.75 14.712 18.814.001 14.076-7.473 22.511-20.823 22.511m3.861-34.246c-6.434 0-9.892 7.558-9.892 14.384v12.312c1.852.562 3.86.804 6.272.804 6.833 0 11.497-4.182 11.497-14.958.001-8.039-2.49-12.542-7.877-12.542zM102.519 57.381C94.561 55.936 90.7 61.485 90.7 73.466v16.238h-8.606V49.746H90.3c0 2.246-.246 5.791-.809 8.844h.162c1.771-5.388 5.79-10.377 13.271-9.651l-.405 8.442M114.803 43.797c-3.056 0-5.55-2.414-5.55-5.393 0-2.971 2.494-5.385 5.55-5.385 2.974 0 5.467 2.333 5.467 5.385 0 2.979-2.493 5.393-5.467 5.393m4.26 45.907h-8.6V49.746h8.6v39.958zM154.449 89.704V63.975c0-4.982-1.374-7.875-5.951-7.875-6.03 0-10.457 6.345-10.457 14.302v19.303h-8.603V49.746h8.203c0 2.094-.162 5.546-.563 7.796l.082.075c2.33-5.141 7.157-8.68 13.91-8.68 9.084 0 11.9 5.711 11.9 12.787v27.979h-8.521M186.675 90.425c-8.524 0-11.1-3.294-11.1-12.214V56.417h-7.634v-6.671h7.634V37.04l8.523-2.333v15.039h10.532v6.671h-10.448v19.137c0 5.954 1.205 7.558 5.224 7.558 1.769 0 3.699-.24 5.226-.643v7.076c-2.331.486-5.307.88-7.957.88"
              fill="currentColor"
            />
            <path
              d="M233.712 78.636c11.72-15.086 20.938-32.809 20.938-45.537 0-6.652-4.765-11.295-10.978-14.823.123 13.831-4.668 46.263-9.96 60.36M195.279 115.809c27.47-9.188 67.29-30.598 94.985-49.725 2.324-1.6 4.135-3.085 4.135-5.685 0-4.519-8.275-10.576-12.292-12.987-21.792 22.653-65.163 56.596-86.828 68.397"
              fill="currentColor"
            />
            <path
              d="M220.76 96.567c16.938-11.709 41.545-33.739 49.873-45.727 1.963-2.82 3.416-4.454 3.416-7.405 0-4.839-5.644-8.382-9.703-10.849-9.727 22.924-31.579 51.469-43.586 63.981M236.192 64.087c2.191-14.477.903-31.952-1.894-42.913-1.521-5.969-6.901-12.706-11.88-14.812 6.526 18.522 12.128 44.898 13.774 57.725"
              fill="currentColor"
            />
            <path
              d="M231.367 43.779C226.235 29.91 213.446.998 194.633-6.165c12.247 13.516 30.417 40.337 36.734 49.944"
              fill="currentColor"
            />
          </svg>
        </div>
      </Layout>
    </div>
  );
}
