import classNames from "classnames";
import React from "react";
import { ProjectStatusPill } from "./ProjectStatusPill";

interface Props {
  label?: string;
  projects: {
    name: string;
    description: string;
    url?: string;
    img?: string;
    comingSoon?: boolean;
    comingSoonText?: string;
    releaseDate?: Date;
  }[];
}

export const ProjectList: React.FC<Props> = ({ label, projects }) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-black text-xl">{label}</span>
      <div className="grid text-center sm:grid-cols-2 md:grid-cols-3 w-full gap-4">
        {projects.map((project, index) => {
          const isTimeLeft =
            !project.releaseDate || project.releaseDate.getTime() > Date.now();
          return (
            <a
              key={index}
              className={classNames(
                "relative flex flex-col items-center justify-center gap-4 p-4 h-36 bg-secondary rounded-md shadow-lg shadow-[#ffffff20]",
                {
                  "cursor-default": project.comingSoon && isTimeLeft,
                }
              )}
              href={
                ((!project.comingSoon || !isTimeLeft) && project.url) ||
                undefined
              }
              target={project.url ? "_blank" : undefined}
            >
              {project.img && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="absolute top-2 left-2 h-8 opacity-25"
                  src={project.img}
                />
              )}
              <div
                className={classNames("absolute font-black text-xl", {
                  "opacity-50": project.comingSoon,
                })}
              >
                {project.name}
              </div>

              <ProjectStatusPill
                text={project.comingSoonText}
                releaseDate={project.releaseDate}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};
