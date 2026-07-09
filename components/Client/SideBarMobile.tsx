import StyledLink from "@/components/Server/StyledLink";
import * as motion from "motion/react-client";
import ContactUs from "../Server/ContactUs";
import { AnimatePresence } from "motion/react";
interface LinkItem {
  href: string;
  link: string;
}
export default function SideBarMobile() {
  const links: LinkItem[] = [
    { href: "/about", link: "About Us" },
    { href: "/services", link: "Services" },
    { href: "/listening-hub", link: "The Listening Hub" },
    { href: "/#book", link: "Order the Book" },
    { href: "/#contact", link: "Contact" },
  ];
  return (
    <div className="fixed top-0 z-[30] h-screen w-full overflow-x-hidden">
      <AnimatePresence>
        <motion.div
          variants={{
            initial: { x: "100%" },
            exit: { x: "100%" },
            animate: { x: "0%" },
          }}
          initial="initial"
          animate="animate"
          transition={{
            ease: [0.24, 0.43, 0.15, 0.97],
            duration: 0.8,
          }}
          className="h-screen overflow-y-scroll bg-[#0d1117] px-3-75 pt-12000svh"
        >
          {links.length > 0 && (
            <>
              <span className="text-sm text-[#c9a22780]">Discover Pages</span>
              <div className="my-3200svh text-[#c9a227]">
                {links.map(({ link, href }, i) => (
                  <StyledLink
                    className="mb-750svh text-lg font-light"
                    key={link}
                    href={href}
                    underlineColor="#c9a227"
                    arrowFill="#c9a227"
                    active={i == 0}
                  >
                    {link}
                  </StyledLink>
                ))}
              </div>
            </>
          )}
          <ContactUs className="gap-y-8 text-base text-[#c9a227] max-md:mt-16 md:hidden [&>:first-child]:text-sm [&>:first-child]:text-[#c9a227]/70 [&>div]:gap-x-5" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
