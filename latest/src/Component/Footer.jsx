import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full px-5 py-10 border-t border-[#33353F] bg-[#0a0a0a] text-gray-300">
      
      <div className="w-full max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-2 gap-8 justify-items-center">
        <div>
          <h4 className="uppercase text-sm font-bold mb-4 text-gray-400">
            Pages
          </h4>
          <ul className="space-y-3">
            <li>
              <Link href="/" className="hover:text-fun-pink transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="#About" className="hover:text-fun-pink transition">
                About
              </Link>
            </li>
            <li>
              <Link href="#Projects" className="hover:text-fun-pink transition">
                Projects
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="uppercase text-sm font-bold mb-4 text-gray-400">
            Social
          </h4>
          <ul className="space-y-3">
            <li>
              <a
                href="https://github.com/NicholasVictorio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-fun-pink transition"
              >
                <Image
                  src="/assets/logos/GitHub.svg"
                  width={18}
                  height={18}
                  alt="GitHub"
                  className="mr-2 invert"
                />
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-fun-pink transition"
              >
                <Image
                  src="/assets/logos/LinkedIn.svg"
                  width={18}
                  height={18}
                  alt="LinkedIn"
                  className="mr-2 invert"
                />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:nicholas.victorio01@gmail.com"
                className="flex items-center hover:text-fun-pink transition"
              >
                <Image
                  src="/assets/logos/Email.svg"
                  width={18}
                  height={18}
                  alt="Email"
                  className="mr-2 invert"
                />
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#33353F] mt-10 pt-6 text-center text-sm text-gray-400">
        {/* Made With */}
        <div className="inline-flex items-center uppercase text-xs font-bold tracking-widest mb-3">
          Made with{" "}
          <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
            <span>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                width="26"
                title="React"
                alt="React"
              />
            </span>
            <span>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                width="40"
                className="invert"
                title="NextJS"
                alt="NextJS"
              />
            </span>
            <span>
              <img
                src="/assets/logos/Tailwind.svg"
                width="26"
                title="TailwindCSS"
                alt="TailwindCSS"
              />
            </span>
          </div>
        </div>

        {/* Credits */}
        <div className="mt-2 text-xs text-gray-400">
          Made by{" "}
          <span className="font-medium text-gray-300">
            Nicholas Victorio
          </span>
        </div>

        {/* View Source Code Button */}
        <div className="mt-5">
          <a
            className="inline-flex items-center text-xs border border-fun-pink px-4 py-2 rounded-xl text-fun-pink font-bold hover:opacity-80 transition"
            href="https://github.com/NicholasVictorio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/logos/github.svg"
              width={16}
              height={16}
              alt="Github Icon"
              className="mr-2 invert"
            />
            View Source Code
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
