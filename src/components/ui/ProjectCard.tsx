import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
  image?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  href,
  image
}: ProjectCardProps) {
  return (
    <Link href={href} className="group">
      <div className="card hover:border-primary transition-all duration-300 h-full">
        {image && (
          <div className="mb-4 overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={title}
              width={400}
              height={250}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-text-secondary mb-4 line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 bg-background border border-border rounded-full text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
