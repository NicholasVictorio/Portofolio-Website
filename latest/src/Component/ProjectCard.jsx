import React from "react";
import { CodeBracketIcon, LinkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ title, description, imgUrl, gitUrl, webUrl }) => {
  return (
    <div className="rounded-xl overflow-hidden">

      <div
        className="aspect-[3/2] relative flex items-center justify-center bg-[#232323] overflow-hidden group"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="absolute inset-0 flex items-center justify-center gap-6 bg-[#181818]/0 opacity-0 group-hover:opacity-100 group-hover:bg-[#181818]/80 transition-all duration-500">
          <Link
            href={gitUrl}
            target="_blank"
            className="h-12 w-12 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center transition-transform hover:scale-110"
          >
            <CodeBracketIcon className="h-6 w-6 text-[#ADB7BE] group-hover:text-white transition-colors" />
          </Link>

          {webUrl && (
            <Link
              href={webUrl}
              target="_blank"
              className="h-12 w-12 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center transition-transform hover:scale-110"
            >
              <LinkIcon className="h-6 w-6 text-[#ADB7BE] group-hover:text-white transition-colors" />
            </Link>
          )}
        </div>
      </div>

      <div className="text-white py-6 px-5 space-y-3">
        <h5 className="text-xl font-semibold">{title}</h5>
        <p className="text-[#ADB7BE] text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
