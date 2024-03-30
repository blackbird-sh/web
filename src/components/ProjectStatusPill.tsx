import React from "react";

interface Props {
  text?: string;
  releaseDate?: Date;
}

export const ProjectStatusPill: React.FC<Props> = ({ text, releaseDate }) => {
  const [timeLeft, setTimeLeft] = React.useState("0d 0h 0m 0s");
  const [isTimeLeft, setIsTimeLeft] = React.useState(true);

  const timeUntil = (date: Date) => {
    const now = new Date();
    let diff = date.getTime() - now.getTime();
    diff += now.getTimezoneOffset() * 60 * 1000; // adjust for timezone

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if ((!days && !hours && !minutes && !seconds) || diff < 0) {
      setIsTimeLeft(false);
    }

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  React.useEffect(() => {
    if (releaseDate) {
      setTimeLeft(timeUntil(releaseDate));
    }
    const interval = setInterval(() => {
      if (releaseDate) {
        setTimeLeft(timeUntil(releaseDate));
      }
    }, 500);
    return () => clearInterval(interval);
  });

  if (releaseDate && !isTimeLeft) {
    return null;
  }

  return (
    <div className="absolute top-2 right-2 bg-white rounded-full text-black text-xs font-bold px-2 py-1">
      {text || "COMING SOON"} {releaseDate && `(${timeLeft})`}
    </div>
  );
};
