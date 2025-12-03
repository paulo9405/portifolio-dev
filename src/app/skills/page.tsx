import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";

export const metadata = {
  title: "Skills & Experience | Paulo Gomes",
  description: "Full-stack developer experienced in Python, Django, Bootstrap, JavaScript, and building production systems for real businesses.",
};

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Skills &{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Experience
                </span>
              </h1>
              <p className="text-xl text-text-secondary">
                I build full-stack systems using Python, Django, Bootstrap, JavaScript, and PostgreSQL.
                My focus is on backend architecture and creating software that solves
                real operational problems.
              </p>
            </div>
          </div>
        </section>

        {/* Core Technologies */}
        <section className="section-padding bg-background-light/30">
          <div className="container-custom">
            <div className="max-w-4xl">
              <SectionHeader
                title="Core Technologies"
                subtitle="What I work with daily"
              />

              <div className="grid md:grid-cols-2 gap-8">
                {/* Backend */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Backend</h3>
                  <div className="space-y-4">
                    <div className="card">
                      <div className="font-medium text-lg mb-2">Python</div>
                      <p className="text-text-secondary text-sm">
                        Primary language for backend development. Used extensively in both
                        production projects for business logic, data processing, and API development.
                      </p>
                    </div>

                    <div className="card">
                      <div className="font-medium text-lg mb-2">Django & Django REST Framework</div>
                      <p className="text-text-secondary text-sm">
                        Main framework for building web applications and REST APIs. Experienced with
                        ORM, migrations, authentication, permissions, and production deployment.
                      </p>
                    </div>

                    <div className="card">
                      <div className="font-medium text-lg mb-2">PostgreSQL</div>
                      <p className="text-text-secondary text-sm">
                        Relational database for all production systems. Comfortable with schema design,
                        queries, indexes, and data integrity constraints.
                      </p>
                    </div>

                    <div className="card">
                      <div className="font-medium text-lg mb-2">Docker</div>
                      <p className="text-text-secondary text-sm">
                        Used for containerizing applications and managing development/production environments.
                        Create consistent environments across different stages of deployment.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Frontend */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Frontend</h3>
                  <div className="space-y-4">
                    <div className="card">
                      <div className="font-medium text-lg mb-2">JavaScript / TypeScript</div>
                      <p className="text-text-secondary text-sm">
                        Used for frontend development and API integration. Comfortable with modern
                        ES6+ features and TypeScript for type safety.
                      </p>
                    </div>

                    <div className="card">
                      <div className="font-medium text-lg mb-2">Bootstrap</div>
                      <p className="text-text-secondary text-sm">
                        Primary CSS framework for building responsive interfaces. Used extensively in
                        both production projects for layout, components, and mobile-first design.
                      </p>
                    </div>

                    <div className="card">
                      <div className="font-medium text-lg mb-2">HTML & CSS</div>
                      <p className="text-text-secondary text-sm">
                        Solid foundation in semantic HTML and CSS. Build clean, accessible markup
                        and custom styling when Bootstrap alone isn't enough.
                      </p>
                    </div>

                    <div className="card">
                      <div className="font-medium text-lg mb-2">jQuery</div>
                      <p className="text-text-secondary text-sm">
                        Used for DOM manipulation and AJAX requests in production projects.
                        Practical for adding interactivity and handling dynamic content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What I Build */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl">
              <SectionHeader
                title="What I Build"
                subtitle="Types of systems I specialize in"
              />

              <div className="space-y-6 text-text-secondary text-lg">
                <div className="card">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Management Systems</h3>
                  <p>
                    Complete business management platforms that handle operations, sales, inventory,
                    and reporting. Built for real businesses with complex workflows and multiple
                    user roles.
                  </p>
                  <div className="mt-3 text-sm text-text-muted">
                    Example: Barbershop system with scheduling, POS, customer management, and financial tracking
                  </div>
                </div>

                <div className="card">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Custom Delivery Platforms</h3>
                  <p>
                    Order management systems designed for small businesses. Handle customer orders,
                    delivery tracking, product catalogs, and customer history.
                  </p>
                  <div className="mt-3 text-sm text-text-muted">
                    Example: Açaí delivery system built to remove manual order taking
                  </div>
                </div>

                <div className="card">
                  <h3 className="text-xl font-semibold mb-3 text-primary">REST APIs</h3>
                  <p>
                    Backend APIs that power frontend applications. Handle authentication, data
                    validation, business logic, and database operations. Built with Django REST
                    Framework.
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Data Processing & Reporting</h3>
                  <p>
                    Systems that collect, process, and present business data. Automated reporting,
                    financial tracking, and operational analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="section-padding bg-background-light/30">
          <div className="container-custom">
            <div className="max-w-4xl">
              <SectionHeader
                title="Technical Skills"
                subtitle="Beyond languages and frameworks"
              />

              <div className="grid md:grid-cols-3 gap-6">
                <div className="card">
                  <h3 className="text-lg font-semibold mb-3 text-primary">Architecture</h3>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>• REST API design</li>
                    <li>• Database schema design</li>
                    <li>• Modular system architecture</li>
                    <li>• Role-based access control</li>
                  </ul>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold mb-3 text-primary">Backend</h3>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>• Django ORM & migrations</li>
                    <li>• Authentication & permissions</li>
                    <li>• Data validation</li>
                    <li>• Transaction handling</li>
                  </ul>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold mb-3 text-primary">Frontend</h3>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>• Bootstrap layouts</li>
                    <li>• Responsive design</li>
                    <li>• DOM manipulation</li>
                    <li>• API integration</li>
                  </ul>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold mb-3 text-primary">Database</h3>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>• PostgreSQL queries</li>
                    <li>• Schema design</li>
                    <li>• Data integrity</li>
                    <li>• Migrations</li>
                  </ul>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold mb-3 text-primary">Development</h3>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>• Git version control</li>
                    <li>• Docker containerization</li>
                    <li>• Code documentation</li>
                    <li>• Problem debugging</li>
                    <li>• Production deployment</li>
                  </ul>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold mb-3 text-primary">Business</h3>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>• Requirements gathering</li>
                    <li>• Workflow analysis</li>
                    <li>• User feedback integration</li>
                    <li>• Domain understanding</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How I Work */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl">
              <SectionHeader
                title="How I Work"
                subtitle="My approach to software development"
              />

              <div className="space-y-6 text-text-secondary text-lg">
                <p>
                  I start by understanding the problem. Not the technical requirements—the actual
                  operational problem someone is facing. What's taking too long? What's causing
                  frustration? What's error-prone? The technical solution comes after understanding
                  the real issue.
                </p>

                <p>
                  I build end-to-end. I prefer having control over the full stack because that's
                  where you find the inefficiencies—at the boundaries between backend and frontend,
                  between data and interface. When you own the whole system, you can optimize the
                  entire workflow.
                </p>

                <p>
                  I write code that other developers can understand. Variable names explain intent.
                  Functions do one thing. Documentation exists where the code isn't self-evident.
                  Six months from now, someone (probably me) will need to modify this code. It should
                  be readable then.
                </p>

                <p>
                  I talk to users. A lot. The best debugging tool is a conversation with someone
                  using what you built. If they find something confusing, that's valuable information.
                  If they avoid a feature, that tells you something. User feedback beats assumptions
                  every time.
                </p>

                <p>
                  I focus on production reliability. When people depend on your software for their
                  business, you don't get to cut corners. Data validation matters. Error handling
                  matters. Backups matter. The unglamorous parts of software development are often
                  the most important.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What I'm Looking For */}
        <section className="section-padding bg-background-light/30">
          <div className="container-custom">
            <div className="max-w-3xl">
              <SectionHeader
                title="What I'm Looking For"
              />

              <div className="space-y-6 text-text-secondary text-lg">
                <p>
                  I'm looking for opportunities where I can work on systems that matter. Backend-heavy
                  projects where architectural decisions affect real operations. Full-stack products
                  where I can own features from database to interface.
                </p>

                <p>
                  I'm particularly interested in operational systems—tools that help businesses run
                  better, platforms that process real data, software that removes manual work from
                  someone's day. The kind of projects where you can see the impact.
                </p>

                <p>
                  I want to work with teams that care about the people using their software, not just
                  shipping features. Where understanding the problem is as important as writing code.
                  Where quality matters more than speed.
                </p>
              </div>

              <div className="mt-8">
                <a href="/contact" className="btn-primary">
                  Let's Talk
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
