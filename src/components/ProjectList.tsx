import classNames from "classnames";
import React from "react";

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
  const [update, setUpdate] = React.useState(0);

  const timeUntil = (date: Date) => {
    const now = new Date();
    let diff = date.getTime() - now.getTime();
    diff += now.getTimezoneOffset() * 60 * 1000; // adjust for timezone

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setUpdate((prev) => prev + 1);
    }, 500);
    return () => clearInterval(interval);
  });

  return (
    <div className="flex flex-col gap-2">
      <span className="font-black text-xl">{label}</span>
      <div className="grid text-center sm:grid-cols-2 md:grid-cols-3 w-full gap-4">
        {projects.map((project, index) => (
          <a
            key={index}
            className={classNames(
              "relative flex flex-col items-center justify-center gap-4 p-4 h-36 bg-secondary rounded-md shadow-lg shadow-[#ffffff20]",
              {
                "cursor-default": project.comingSoon,
              }
            )}
            href={(!project.comingSoon && project.url) || undefined}
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

            {project.comingSoon && (
              <div className="absolute top-2 right-2 bg-white rounded-full text-black text-xs font-bold px-2 py-1">
                {project.comingSoonText || "COMING SOON"}{" "}
                {project.releaseDate && `(${timeUntil(project.releaseDate)})`}
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};
