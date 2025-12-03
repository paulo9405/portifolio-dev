import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";

export const metadata = {
  title: "Açaí Delivery System | Paulo Gomes",
  description: "A custom delivery platform built to help my mother run her açaí business despite chronic pain and mobility challenges.",
};

export default function AcaiDeliveryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl">
              <div className="mb-6">
                <span className="text-primary text-sm font-medium">Case Study</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Açaí Delivery System
                </span>
              </h1>
              <p className="text-xl text-text-secondary mb-8">
                A custom delivery platform built to help my mother run her açaí business
                despite chronic pain and mobility challenges.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-background-light border border-border rounded-lg text-sm">
                  Django
                </span>
                <span className="px-4 py-2 bg-background-light border border-border rounded-lg text-sm">
                  Django REST Framework
                </span>
                <span className="px-4 py-2 bg-background-light border border-border rounded-lg text-sm">
                  React
                </span>
                <span className="px-4 py-2 bg-background-light border border-border rounded-lg text-sm">
                  PostgreSQL
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="section-padding bg-background-light/30">
          <div className="container-custom">
            <div className="max-w-3xl">
              <SectionHeader
                title="The Problem"
                subtitle="When distance meets necessity"
              />

              <div className="space-y-6 text-text-secondary text-lg">
                <p>
                  My mother runs a small açaí delivery business in Brazil. For years, she managed
                  everything manually—writing down orders in a notebook, calculating totals by hand,
                  tracking deliveries on paper.
                </p>

                <p>
                  Then her health challenges became harder to ignore. Chronic pain, fibromyalgia, and
                  reduced mobility in her left hand turned simple tasks into exhausting ones. Every
                  order she wrote down meant physical discomfort. Every day at work was harder than
                  it should have been.
                </p>

                <p>
                  When I moved to Ireland in 2020, I couldn't help her physically anymore. But I could
                  help her differently. I could build something that would remove the manual work entirely.
                </p>

                <div className="card mt-8">
                  <h3 className="text-xl font-semibold mb-4">Key Challenges</h3>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-start">
                      <span className="text-primary mr-3">•</span>
                      <span>Manual order taking caused physical pain and slowed down operations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">•</span>
                      <span>No digital record of customer orders or delivery history</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">•</span>
                      <span>Difficult to manage inventory and track product sales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">•</span>
                      <span>Paper-based system made it hard to scale the business</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl">
              <SectionHeader
                title="The Solution"
                subtitle="Built for her workflow, not against it"
              />

              <div className="space-y-6 text-text-secondary text-lg">
                <p>
                  I built a custom delivery platform designed around how she actually works. Not a generic
                  system adapted to fit—something built specifically for her operation, her products, her
                  customers.
                </p>

                <p>
                  The system handles everything digitally: customers place orders through a simple interface,
                  orders are organized automatically, and my mother can manage everything without writing
                  a single word by hand.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="card">
                  <h3 className="text-lg font-semibold mb-3 text-primary">Order Management</h3>
                  <p className="text-text-secondary">
                    Digital order intake that automatically organizes customer requests, calculates totals,
                    and tracks delivery status in real-time.
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold mb-3 text-primary">Customer Database</h3>
                  <p className="text-text-secondary">
                    Complete history of customer orders, addresses, and preferences—no more searching
                    through notebooks.
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold mb-3 text-primary">Product Catalog</h3>
                  <p className="text-text-secondary">
                    Easy product management with prices, availability, and variations—updates instantly
                    across the system.
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold mb-3 text-primary">Delivery Tracking</h3>
                  <p className="text-text-secondary">
                    Simple interface to track pending deliveries, mark orders as completed, and manage
                    daily routes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="section-padding bg-background-light/30">
          <div className="container-custom">
            <div className="max-w-3xl">
              <SectionHeader
                title="Technical Architecture"
                subtitle="Built to last and easy to maintain"
              />

              <div className="space-y-6 text-text-secondary text-lg">
                <p>
                  I chose a solid, proven stack: Django for the backend with Django REST Framework
                  for the API, React for the frontend, and PostgreSQL for data persistence.
                </p>

                <p>
                  The architecture is straightforward—no over-engineering. A REST API handles all
                  business logic, authentication, and data validation. The React frontend provides
                  a clean interface that works on both mobile and desktop.
                </p>

                <div className="card">
                  <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
                  <div className="grid grid-cols-2 gap-4 text-text-secondary">
                    <div>
                      <div className="font-medium text-primary mb-2">Backend</div>
                      <ul className="space-y-1">
                        <li>• Django 4.x</li>
                        <li>• Django REST Framework</li>
                        <li>• PostgreSQL</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-primary mb-2">Frontend</div>
                      <ul className="space-y-1">
                        <li>• React</li>
                        <li>• Responsive design</li>
                        <li>• Mobile-first approach</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p>
                  The system is hosted on Gregory's server (my mentor and friend). He helped me with
                  deployment configuration and server setup. Having someone experienced to lean on made
                  this my first real production deployment much smoother.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Challenges */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl">
              <SectionHeader
                title="Technical Challenges"
                subtitle="What I learned building this"
              />

              <div className="space-y-6 text-text-secondary text-lg">
                <div className="card">
                  <h3 className="text-lg font-semibold mb-3">Simplicity Over Features</h3>
                  <p>
                    My first instinct was to build every feature I could imagine. I learned quickly
                    that the best software does less, not more. Every feature I removed made the
                    system easier for my mother to use.
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold mb-3">Real User Feedback</h3>
                  <p>
                    Building for someone you know means you can't hide behind assumptions. If something
                    was confusing or didn't work the way she expected, I heard about it immediately.
                    That feedback loop was invaluable.
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold mb-3">Production Deployment</h3>
                  <p>
                    This was my first time deploying something that people would use every day. I learned
                    about server configuration, environment management, database migrations in production,
                    and the importance of having backups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real Impact */}
        <section className="section-padding bg-background-light/30">
          <div className="container-custom">
            <div className="max-w-3xl">
              <SectionHeader
                title="Real Impact"
                subtitle="What changed after deployment"
              />

              <div className="space-y-6 text-text-secondary text-lg">
                <p>
                  The system went live and my mother started using it immediately. No handwritten
                  orders anymore. No manual calculations. No searching through notebooks for customer
                  information.
                </p>

                <p>
                  She told me the biggest difference wasn't just the time saved—it was the physical
                  relief. Her workday became less painful. That was the goal from the start, and
                  knowing it worked made everything worth it.
                </p>

                <p>
                  This project taught me something important: the best software solves real problems
                  for real people. Not abstract use cases or hypothetical scenarios. Actual pain
                  points in someone's actual day.
                </p>

                <div className="card">
                  <h3 className="text-xl font-semibold mb-4">Measurable Results</h3>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-start">
                      <span className="text-primary mr-3">✓</span>
                      <span>Eliminated manual handwriting, reducing physical strain</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">✓</span>
                      <span>Faster order processing and delivery tracking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">✓</span>
                      <span>Complete digital history of all orders and customers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">✓</span>
                      <span>System still in daily use, running reliably</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Next */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl">
              <SectionHeader
                title="What's Next"
              />

              <div className="space-y-6 text-text-secondary text-lg">
                <p>
                  The system works and it's stable. Future improvements will come from my mother's
                  feedback as she continues using it. I'm not adding features for the sake of adding
                  them—only when they solve an actual problem she's facing.
                </p>

                <p>
                  This project showed me that good software doesn't need to be complex. It needs to
                  work, be reliable, and make someone's life easier. Everything else is secondary.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <a href="/projects/barbershop-system" className="btn-primary">
                  Next Project: Barbershop System
                </a>
                <a href="/contact" className="btn-secondary">
                  Get in Touch
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
