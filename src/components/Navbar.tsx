import { Disclosure, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { classNames } from "../util/ui";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "https://blog.fyralabs.com" },
  { name: "Contact", href: "/contact" },
];

const Navbar: React.FC<{
  pathname: string;
  forceDark?: boolean;
}> = ({
  pathname,
  // yes, I'm serious
  forceDark = false,
}) => {
  return (
    <Disclosure as="nav" className={classNames("mb-4")}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-zinc-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <a className="flex flex-shrink-0 items-center" href="/">
                  <img
                    className="block h-8 w-auto drop-shadow-xl"
                    src="/logo.svg"
                    alt="Fyra Labs"
                  />
                </a>
                <div className="hidden sm:block ml-auto">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.href === pathname
                            ? "bg-zinc-700 text-white"
                            : "hover:bg-zinc-800 hover:text-white",
                          forceDark
                            ? "text-gray-300"
                            : "text-gray-700 dark:text-gray-300",
                          "px-3 py-2 rounded-md text-sm font-medium transition-all"
                        )}
                        aria-current={
                          item.href === pathname ? "page" : undefined
                        }
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className={"sm:hidden"}>
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.href === pathname
                        ? "bg-zinc-700 text-white"
                        : "hover:bg-zinc-800 hover:text-white",
                      forceDark
                        ? "text-gray-300"
                        : "text-gray-700 dark:text-gray-300",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.href === pathname ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
