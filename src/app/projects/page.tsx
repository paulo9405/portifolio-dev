import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import Link from "next/link";

export const metadata = {
  title: "Projects | Paulo Gomes",
  description: "Production systems built for real businesses—delivery platforms, management systems, and operational software that solve real problems.",
};

export default function ProjectsPage() {
  const projects = [
    {
      title: "Barbershop Management System",
      slug: "barbershop-system",
      description: "Complete management platform for the largest barbershop in Buritizeiro, MG. Handles scheduling, point-of-sale, inventory, customer management, and financial tracking. Replaced spreadsheets and notebooks with a unified system.",
      tags: ["Django", "DRF", "Bootstrap", "JavaScript", "PostgreSQL", "Docker"],
      highlights: [
        "Reduced administrative time by 50%",
        "Zero scheduling conflicts since deployment",
        "6 integrated modules (Scheduling, POS, Inventory, Customers, Financial, Loyalty)",
        "Multi-user role-based access control",
        "Daily production use by entire staff",
      ],
    },
    {
      title: "Açaí Delivery System",
      slug: "acai-delivery",
      description: "Custom delivery platform built to help my mother run her açaí business despite chronic pain and mobility challenges. Eliminated manual order taking and tracking, making her workday less physically demanding.",
      tags: ["Django", "DRF", "Bootstrap", "JavaScript", "PostgreSQL", "Docker"],
      highlights: [
        "Eliminated manual handwriting, reducing physical strain",
        "Digital order management and customer database",
        "Automated delivery tracking and product catalog",
        "First production deployment experience",
        "Still in daily use, running reliably",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Projects
                </span>
              </h1>
              <p className="text-xl text-text-secondary">
                Production systems built for real businesses. These aren't demos or tutorials—they're
                software people use every day to run their operations.
              </p>
            </div>
          </div>
        </section>

        {/* Projects List */}
        <section className="section-padding bg-background-light/30">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto space-y-12">
              {projects.map((project, index) => (
                <div key={project.slug} className="card">
                  <div className="mb-4">
                    <span className="text-primary text-sm font-medium">
                      Project {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h2 className="text-3xl font-bold mb-4">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {project.title}
                    </Link>
                  </h2>

                  <p className="text-text-secondary text-lg mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-background-light border border-border rounded text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-primary">
                      Key Results
                    </h3>
                    <ul className="space-y-2 text-text-secondary">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-3">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="btn-primary inline-block"
                  >
                    Read Case Study
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Want to see more details?
              </h2>
              <p className="text-text-secondary text-lg mb-8">
                Each project has a complete case study covering the problem, solution, technical
                architecture, and real operational impact.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/skills" className="btn-secondary">
                  View Skills & Tech Stack
                </Link>
                <Link href="/contact" className="btn-primary">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
