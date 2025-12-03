import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
                Full-stack developer building systems that fix{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  real operational problems
                </span>
              </h1>

              <p className="text-xl text-text-secondary mb-8 max-w-2xl animate-slide-up">
                I'm Paulo Gomes, a Brazilian full-stack developer based in Ireland.
                I build software for real businesses facing real problems.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
                <Link href="/projects" className="btn-primary">
                  View Projects
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Brief Intro Section */}
        <section className="section-padding bg-background-light/50">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold mb-6">What I Do</h2>
              <p className="text-lg text-text-secondary mb-4">
                I specialize in turning messy manual processes into clean, functional systems.
                The kind that people actually use every day.
              </p>
              <p className="text-lg text-text-secondary">
                From building a custom delivery platform for my mother (who has chronic pain)
                to creating a complete management system for the largest barbershop in my hometown—I
                focus on solving concrete problems for real operations.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Barbershop System */}
                <Link href="/projects/barbershop-system" className="card group hover:border-primary/50 transition-all">
                  <div className="mb-4">
                    <span className="text-primary text-sm font-medium">Production System</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    Barbershop Management System
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Complete management platform handling scheduling, POS, inventory, and financial
                    tracking. Reduced administrative time by 50% for the largest barbershop in town.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-background-light border border-border rounded text-xs">
                      Django
                    </span>
                    <span className="px-3 py-1 bg-background-light border border-border rounded text-xs">
                      Bootstrap
                    </span>
                    <span className="px-3 py-1 bg-background-light border border-border rounded text-xs">
                      PostgreSQL
                    </span>
                  </div>
                  <div className="text-primary text-sm font-medium">
                    Read case study →
                  </div>
                </Link>

                {/* Açaí Delivery */}
                <Link href="/projects/acai-delivery" className="card group hover:border-primary/50 transition-all">
                  <div className="mb-4">
                    <span className="text-primary text-sm font-medium">Delivery Platform</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    Açaí Delivery System
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Custom delivery platform built for my mother's business, eliminating manual
                    order taking and making her workday less physically demanding.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-background-light border border-border rounded text-xs">
                      Django
                    </span>
                    <span className="px-3 py-1 bg-background-light border border-border rounded text-xs">
                      JavaScript
                    </span>
                    <span className="px-3 py-1 bg-background-light border border-border rounded text-xs">
                      Docker
                    </span>
                  </div>
                  <div className="text-primary text-sm font-medium">
                    Read case study →
                  </div>
                </Link>
              </div>

              <div className="mt-8 text-center">
                <Link href="/projects" className="text-primary hover:text-primary-light font-medium">
                  View all projects →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Preview */}
        <section className="section-padding bg-background-light/50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
              <p className="text-lg text-text-secondary mb-8">
                I work with proven technologies that solve real problems
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-background border border-border rounded-lg">
                  Python
                </span>
                <span className="px-4 py-2 bg-background border border-border rounded-lg">
                  Django
                </span>
                <span className="px-4 py-2 bg-background border border-border rounded-lg">
                  Bootstrap
                </span>
                <span className="px-4 py-2 bg-background border border-border rounded-lg">
                  JavaScript
                </span>
                <span className="px-4 py-2 bg-background border border-border rounded-lg">
                  PostgreSQL
                </span>
                <span className="px-4 py-2 bg-background border border-border rounded-lg">
                  Docker
                </span>
              </div>
              <div className="mt-8">
                <Link href="/skills" className="btn-secondary">
                  View Full Tech Stack
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Let's build something that matters
              </h2>
              <p className="text-text-secondary text-lg mb-8">
                I'm based in Ireland and open to remote opportunities. If you're looking for a
                developer who builds systems that solve real operational problems, let's talk.
              </p>
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
