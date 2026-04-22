import { profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="container-x flex flex-col items-start justify-between gap-6 py-10 text-sm text-muted md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
          {profile.name} — {profile.role}
        </div>
        <div className="flex items-center gap-6">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-[var(--fg)]"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-[var(--fg)]"
          >
            Email
          </a>
          <span>© {year}</span>
        </div>
      </div>
    </footer>
  );
}
