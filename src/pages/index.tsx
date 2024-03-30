import { ProjectList } from "@/components/ProjectList";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 justify-center items-center p-4 sm:p-8">
      <nav className="w-full">
        <div className="flex items-center gap-4">
          <Image src="/logo.svg" alt="Blackbird Logo" width={32} height={32} />
          <div className="font-black text-2xl">BLACKBIRD</div>
        </div>
      </nav>

      <section className="flex flex-col gap-4 w-[1200px] max-w-full justify-center items-center">
        <div className="flex flex-col gap-4 w-full justify-center items-center py-16 text-center">
          <div className="font-black text-4xl">WE SECURE THE WORLD</div>
          <div className="font-black text-xl opacity-50">
            WE ARE NOT ABOVE ANYTHING
          </div>
        </div>

        <hr className="opacity-50 w-full" />
        <div className="flex flex-col gap-8 w-[1000px] max-w-full">
          <div className="flex flex-col">
            <span className="font-black text-3xl">OUR PROJECTS</span>
            <span className="opacity-50">
              We have charged ourselves with the duty of securing the whole
              world.
            </span>
          </div>

          <ProjectList
            label="LEVEL I"
            projects={[
              {
                name: "IP BLACKLIST",
                description: "A blacklist of all known malicious IPs.",
                url: "https://ipbl.blackbird.sh",
                img: "/images/ipbl.svg",
                comingSoon: true,
                releaseDate: new Date("2024-03-31T16:00:00"), // specify timezone to avoid issues - 2024 03 31 12:00:00 UTC
              },
              {
                name: "DISCORD PROTECTION",
                description:
                  "Protect your Discord server from malicious users.",
                url: "https://discord.blackbird.sh",
                img: "/images/discord-protection.svg",
                comingSoon: true,
              },
              {
                name: "REDACTED",
                description: "REDACTED DESCRIPTION.",
                comingSoon: true,
              },
            ]}
          />

          <ProjectList
            label="LEVEL II"
            projects={[
              {
                name: "PASSWORD MANAGER",
                description: "A secure password manager for all your needs.",
                comingSoon: true,
              },
              {
                name: "BROWSER PROTECTION",
                description: "Protect yourself from malicious side of the web.",
                comingSoon: true,
              },
              {
                name: "REDACTED",
                description: "REDACTED DESCRIPTION.",
                comingSoon: true,
              },
            ]}
          />

          <ProjectList
            label="LEVEL III"
            projects={[
              {
                name: "ANTI-VIRUS",
                description: "Protect your computer from all kinds of threats.",
                comingSoon: true,
                comingSoonText: "PLANNED BEFORE 2025",
              },
              {
                name: "VPN",
                description:
                  "Secure your connection and browse the web anonymously.",
                comingSoon: true,
                comingSoonText: "PLANNED BEFORE 2025",
              },
              {
                name: "REDACTED",
                description: "REDACTED DESCRIPTION.",
                comingSoon: true,
                comingSoonText: "PLANNED BEFORE 2025",
              },
            ]}
          />
        </div>
      </section>

      <div className="opacity-50 text-xs mt-40 font-bold">
        fast, ambitious and focused.
      </div>
    </main>
  );
}
