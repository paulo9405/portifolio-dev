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
      </main>
      <Footer />
    </>
  );
}
