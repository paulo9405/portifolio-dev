import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background-dark">
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-text-muted text-sm">
            © {currentYear} Paulo Gomes. Built with Next.js & Tailwind.
          </div>

          <div className="flex gap-6">
            <Link
              href="https://github.com/paulo9405"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-primary transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/paulogomesdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-primary transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="mailto:paulo.ricardo1137.pr@gmail.com"
              className="text-text-muted hover:text-primary transition-colors"
            >
              Email
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
