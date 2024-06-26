import { Check } from "lucide-react";

const includedFeatures = [
  "Private forum access",
  "Access to the discord",
  "+ 300 beautiful reusable components",
  "Lifetime updates",
];

export default function Pricing() {
  return (
    <div className=" py-12 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gradient sm:text-4xl">
            Simple no-tricks pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 ">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
            quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl border sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gradient">
              Lifetime membership
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
              {`For now, the boilerplate is in alpha version, so I've decided to make it free. However, there will come a time when I will add a pricing structure to use Next AS.`}{" "}
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-100 dark:bg-gray-700" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 dark:text-gray-400 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <Check
                    className="h-6 w-5 flex-none text-blue-600"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600 dark:text-gray-400">
                  It is free for now
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                    $0
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600 dark:text-gray-400">
                    USD
                  </span>
                </p>
                <a
                  href="#"
                  className="mt-10  w-full py-2 bg-blue-600 hover:bg-blue-700 flex justify-center items-center px-4 rounded-lg transition text-white shadow-md"
                >
                  Get access
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600 dark:text-gray-400">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
