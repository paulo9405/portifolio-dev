import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";

export const metadata = {
  title: "About | Paulo Gomes",
  description: "Learn about my journey from Brazil to Ireland and why I build software that solves real problems.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                I build software that{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  fixes real problems
                </span>
              </h1>
              <p className="text-xl text-text-secondary mb-6">
                I'm a Brazilian developer who moved to Ireland to build a better life through technology.
                My journey started with a chance reconnection with an old friend and a desire to help my
                mother run her small business more easily, despite her health challenges. Along the way,
                I've built solutions for real businesses and found a community that turned into family.
                Here's my story.
              </p>
            </div>
          </div>
        </section>

        {/* Personal Story */}
        <section className="section-padding bg-background-light/30">
          <div className="container-custom">
            <div className="max-w-3xl">
              <SectionHeader
                title="The Beginning"
                subtitle="How an online pool game changed everything"
              />

              <div className="space-y-6 text-text-secondary text-lg">
                <p>
                  My path into technology started in a way I never expected. Back in 2017, during a simple
                  online pool game, I reconnected with an old friend, Gregory, who today is a Software
                  Architect at Microsoft. We've known each other since 2006, and he was the first person
                  to talk to me seriously about moving to Ireland and considering a career in tech.
                </p>

                <p>
                  At the time, I was working as a real-estate agent in Brazil. Life changed, plans shifted,
                  and in 2020 I finally decided to come to Ireland on my own and study programming.
                </p>

                <p>
                  Gregory became a huge mentor during that process, helping me with documentation, tickets,
                  studying paths, and even technical problems when I first started building my own systems.
                  He's still a major part of my life today. We live in the same city in Ireland, he hosts
                  my projects on his server, and after almost 20 years of friendship, he feels more like
                  family than anything else.
                </p>

                <p>
                  Around the same time, I also had a personal reason to move toward tech. My mother runs
                  a small açaí delivery business in Brazil, and she deals with chronic pain, fibromyalgia,
                  and reduced mobility in her left hand. She used to manage orders in a notebook, writing
                  everything manually while dealing with constant discomfort.
                </p>

                <p>
                  Moving away meant I couldn't help her physically anymore, so learning to code became my
                  way of helping from a distance. I started building a custom delivery system designed
                  around her needs, something that would remove the manual work and make her day less painful.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Building Real Solutions */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl">
              <SectionHeader
                title="Building Real Solutions"
                subtitle="From personal projects to production systems"
              />

              <div className="space-y-6 text-text-secondary text-lg">
                <p>
                  Since then, I've continued building real solutions for real businesses. One of the
                  biggest projects I've worked on is a complete management system for the largest
                  barbershop in my hometown of Buritizeiro, MG.
                </p>

                <p>
                  It handles scheduling, sales, expenses, cash flow, loyalty programs, plans, and
                  day-to-day operations. It's already being used in production. They were tracking
                  everything manually before appointments, inventory, customer data. It was chaos
                  in spreadsheets and notebooks.
                </p>

                <p>
                  These projects taught me what matters most: good software should do one thing make
                  people's lives easier, especially when they need it the most. It's not about adding
                  features. It's about removing friction from someone's actual day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Philosophy */}
        <section className="section-padding bg-background-light/30">
          <div className="container-custom">
            <div className="max-w-3xl">
              <SectionHeader
                title="How I Work"
                subtitle="My approach to building systems"
              />

              <div className="space-y-6 text-text-secondary text-lg">
                <p>
                  I focus on the problem first. Not the stack, not the architecture, not the framework.
                  What's broken? What's taking too long? What's causing actual pain?
                </p>

                <p>
                  I build end-to-end. Backend, frontend, database design, deployment. I prefer having
                  control over the full system because that's where you find the real inefficiencies at
                  the boundaries between things.
                </p>

                <p>
                  I write code that other developers can read. I document what's not obvious. I avoid
                  clever solutions that only make sense to me at 2am. Software that works is better than
                  software that impresses.
                </p>

                <p>
                  Most importantly: I talk to the people using what I build. My best debugging tool is
                  a conversation. If I don't understand the workflow, the software won't either.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Life */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl">
              <SectionHeader
                title="Today"
                subtitle="Balancing study, work, and building"
              />

              <div className="space-y-6 text-text-secondary text-lg">
                <p>
                  Today, I study Computer Science in Dublin from Monday to Wednesday and work in
                  Limerick from Thursday to Sunday as a Supervisor at Gleeson's Spar, where I've
                  been for more than three years. The routine is intense, but it's part of the
                  journey I chose back in 2017 when everything started with a simple game of online pool.
                </p>

                <p>
                  I'm grateful for every part of this path for my mother, who inspired my first real
                  project, and for Gregory, who became a mentor, a guide, and one of the pillars that
                  helped me reach where I am. Every project I build carries a bit of where I came from
                  and who helped me get here.
                </p>

                <p>
                  Outside of work and study, I try to keep balance. I train when I can gym, jiu-jitsu, and thoughtful conversations with friends. It helps me stay sharp for the next challenge.
                </p>

                <p>
                  I'm looking for opportunities where I can work on systems that matter. Backend-heavy
                  projects. Full-stack products. Teams that care about the people using their software,
                  not just shipping features. If you're building something real, I want to hear about it.
                </p>
              </div>

              <div className="mt-8">
                <a href="/contact" className="btn-primary inline-block">
                  Get in Touch!!!
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
