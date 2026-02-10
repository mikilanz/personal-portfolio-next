import { Badge } from "./Badge";

export function ProjectCard({
  title,
  description,
  tech,
  url,
}: {
  title: string;
  description: string;
  tech: string[];
  url: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      className="block rounded-xl border border-neutral-200 p-6 hover:border-neutral-400 transition"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-neutral-600">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map(t => (
          <Badge key={t} label={t} />
        ))}
      </div>
    </a>
  );
}
