import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";

export const metadata = {
  title: "Barbershop Management System | Paulo Gomes",
  description: "A complete management system for the largest barbershop in Buritizeiro, MG—handling operations, sales, scheduling, and customer loyalty.",
};

export default function BarbershopSystemPage() {
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
                  Barbershop Management System
                </span>
              </h1>
              <p className="text-xl text-text-secondary mb-8">
                A complete management system for the largest barbershop in Buritizeiro, MG handling
                operations, sales, scheduling, and customer loyalty. Built to replace spreadsheets
                and notebooks with a single, unified platform.
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

        {/* Business Context */}
        <section className="section-padding bg-background-light/30">
          <div className="container-custom">
            <div className="max-w-3xl">
              <SectionHeader
                title="Business Context"
                subtitle="Managing chaos in the largest barbershop in town"
              />

              <div className="space-y-6 text-text-secondary text-lg">
                <p>
                  This barbershop is the largest in Buritizeiro, my hometown in Minas Gerais.
                  Multiple barbers, dozens of daily appointments, walk-ins, product sales,
                  membership plans, loyalty programs. Everything was managed manually.
                </p>

                <p>
                  They tracked appointments in a physical agenda. Sales went into spreadsheets.
                  Customer history lived in people's heads. Inventory was a best guess. The
                  cash register was a drawer. Monthly reports meant hours of manual work.
                </p>

                <p>
                  It worked, but barely. As the business grew, the system broke down. Double
                  bookings happened. Customers got frustrated. Revenue tracking was unreliable.
                  The owner knew they needed something better, but off-the-shelf solutions didn't
                  fit their workflow.
                </p>

                <div className="card mt-8">
                  <h3 className="text-xl font-semibold mb-4">Pain Points</h3>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-start">
                      <span className="text-primary mr-3">•</span>
                      <span>Manual scheduling led to double bookings and lost appointments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">•</span>
                      <span>No centralized customer history or service records</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">•</span>
                      <span>Product inventory tracked in spreadsheets, often inaccurate</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">•</span>
                      <span>Cash flow management was time-consuming and error-prone</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">•</span>
                      <span>Membership and loyalty programs managed manually</span>
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
                subtitle="One system for every aspect of the business"
              />

              <div className="space-y-6 text-text-secondary text-lg">
                <p>
                  I built a complete management platform that handles everything the barbershop
                  needs in one place. No more jumping between spreadsheets, notebooks, and memory.
                  Everything is digital, organized, and accessible.
                </p>

                <p>
                  The system went into production and replaced their entire manual process. Barbers
                  use it for scheduling. The front desk uses it for check-ins and sales. The owner
                  uses it for reports and financial tracking. It's the single source of truth for
                  the entire operation.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="card">
                  <h3 className="text-lg font-semibold mb-3 text-primary">Scheduling System</h3>
                  <p className="text-text-secondary">
                    Digital appointment calendar with barber assignment, service duration tracking,
                    and automated reminders. Eliminates double bookings and keeps everyone on schedule.
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold mb-3 text-primary">Point of Sale</h3>
                  <p className="text-text-secondary">
                    Complete POS system for services and product sales. Handles payments, receipts,
                    and automatically updates inventory. Integrates with cash flow tracking.
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold mb-3 text-primary">Customer Management</h3>
                  <p className="text-text-secondary">
                    Full customer database with service history, preferences, contact information,
                    and visit frequency. Barbers can see previous cuts and customer notes.
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold mb-3 text-primary">Inventory Control</h3>
                  <p className="text-text-secondary">
                    Real-time inventory tracking for all products. Automatic alerts for low stock,
                    purchase history, and supplier management. No more guessing what needs ordering.
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold mb-3 text-primary">Financial Tracking</h3>
                  <p className="text-text-secondary">
                    Complete expense management, revenue tracking, and cash flow monitoring. Daily,
                    weekly, and monthly reports generated automatically.
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold mb-3 text-primary">Loyalty & Plans</h3>
                  <p className="text-text-secondary">
                    Customer loyalty program and membership plan management. Tracks points, benefits,
                    and plan renewals automatically. Increases customer retention.
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
                subtitle="Built for scale and daily production use"
              />

              <div className="space-y-6 text-text-secondary text-lg">
                <p>
                  The system uses Django on the backend with Django REST Framework for the API layer.
                  React powers the frontend, providing a responsive interface that works on desktops,
                  tablets, and phones. PostgreSQL handles data persistence with proper relational
                  design for customer records, appointments, sales, and inventory.
                </p>

                <p>
                  The architecture is modular. Each major feature scheduling, POS, inventory, financial
                  tracking—is separated into distinct Django apps. They share common models where needed
                  but remain independently maintainable.
                </p>

                <div className="card">
                  <h3 className="text-xl font-semibold mb-4">System Modules</h3>
                  <div className="space-y-4 text-text-secondary">
                    <div>
                      <div className="font-medium text-primary mb-1">Scheduling Module</div>
                      <p className="text-sm">
                        Appointment CRUD, barber availability management, service time slots,
                        customer booking history
                      </p>
                    </div>
                    <div>
                      <div className="font-medium text-primary mb-1">Sales Module</div>
                      <p className="text-sm">
                        POS interface, payment processing, receipt generation, sales analytics,
                        service and product transactions
                      </p>
                    </div>
                    <div>
                      <div className="font-medium text-primary mb-1">Inventory Module</div>
                      <p className="text-sm">
                        Product catalog, stock levels, automatic reorder alerts, purchase orders,
                        supplier database
                      </p>
                    </div>
                    <div>
                      <div className="font-medium text-primary mb-1">Customer Module</div>
                      <p className="text-sm">
                        Customer profiles, service history, preferences, loyalty points, membership
                        status
                      </p>
                    </div>
                    <div>
                      <div className="font-medium text-primary mb-1">Financial Module</div>
                      <p className="text-sm">
                        Expense tracking, revenue reports, cash flow analysis, profit margins,
                        export capabilities
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  Authentication and permissions are role-based. Barbers see their schedules and
                  customer history. Front desk staff access POS and scheduling. The owner has full
                  access to financial reports and system configuration. Everyone sees only what
                  they need.
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
                subtitle="What made this project complex"
              />

              <div className="space-y-6 text-text-secondary text-lg">
                <div className="card">
                  <h3 className="text-lg font-semibold mb-3">Multiple User Roles</h3>
                  <p>
                    Different staff members need different access levels. Building a permissions
                    system that was secure but still flexible enough for daily operations took
                    careful design. I used Django's built-in permissions with custom role abstractions.
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold mb-3">Real-Time Scheduling Conflicts</h3>
                  <p>
                    Preventing double bookings required handling concurrent appointment creation
                    properly. I implemented database-level constraints and optimistic locking to
                    ensure schedule integrity even when multiple people book at the same time.
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold mb-3">Financial Accuracy</h3>
                  <p>
                    Money calculations need to be exact. I used Django's DecimalField throughout,
                    proper transaction handling for sales, and built validation to ensure cash flow
                    reports always balance. Financial data can't have rounding errors.
                  </p>
                </div>

                <div className="card">
                  <h3 className="text-lg font-semibold mb-3">Data Migration</h3>
                  <p>
                    They had years of customer data in spreadsheets. I wrote migration scripts to
                    import historical data while cleaning and validating it. Some records were
                    incomplete, so the system had to handle partial data gracefully.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Operational Impact */}
        <section className="section-padding bg-background-light/30">
          <div className="container-custom">
            <div className="max-w-3xl">
              <SectionHeader
                title="Operational Impact"
                subtitle="How the system changed daily operations"
              />

              <div className="space-y-6 text-text-secondary text-lg">
                <p>
                  The owner told me the system cut their administrative work in half. What used to
                  take hours monthly reports, inventory checks, appointment reconciliation—now takes
                  minutes. The system generates reports automatically. Inventory updates in real time.
                  Scheduling conflicts don't happen anymore.
                </p>

                <p>
                  Customer service improved. Barbers can see a customer's history before they sit down.
                  No more asking "what did we do last time?" Front desk staff can answer questions
                  about appointments, loyalty points, or membership status instantly.
                </p>

                <p>
                  The financial tracking revealed things they didn't know. Which services were most
                  profitable. Which products weren't selling. Peak hours and slow periods. Data they
                  couldn't easily get from spreadsheets became immediately visible.
                </p>

                <div className="card">
                  <h3 className="text-xl font-semibold mb-4">Measurable Results</h3>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-start">
                      <span className="text-primary mr-3">✓</span>
                      <span>Administrative time reduced by approximately 50%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">✓</span>
                      <span>Zero scheduling conflicts since deployment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">✓</span>
                      <span>Complete digital record of all customers and services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">✓</span>
                      <span>Real-time inventory tracking prevents stockouts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">✓</span>
                      <span>Automated financial reports save hours each month</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3">✓</span>
                      <span>System used daily by entire staff, in production</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What I Learned */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl">
              <SectionHeader
                title="What I Learned"
                subtitle="Lessons from building a production business system"
              />

              <div className="space-y-6 text-text-secondary text-lg">
                <p>
                  This was the most complex system I've built. Not because of the technology Django
                  and React are proven tools—but because of the business logic. A barbershop has
                  intricate workflows that aren't obvious until you watch people work.
                </p>

                <p>
                  I learned that understanding the domain is more important than writing clever code.
                  Spending time at the barbershop, watching how appointments get scheduled, how sales
                  happen, how they track inventory that was more valuable than any technical decision.
                </p>

                <p>
                  I also learned that production systems need different considerations than side
                  projects. Data validation matters. Error handling matters. User roles and permissions
                  matter. Backups matter. When people rely on your software for their livelihood, you
                  can't cut corners.
                </p>

                <p>
                  The biggest lesson: good software makes people's jobs easier, not more complicated.
                  Every feature I added went through the filter of "does this actually help them work
                  better?" If the answer was no, I didn't build it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="section-padding bg-background-light/30">
          <div className="container-custom">
            <div className="max-w-3xl">
              <SectionHeader
                title="Interested in Similar Work?"
              />

              <div className="space-y-6 text-text-secondary text-lg">
                <p>
                  I build systems like this for businesses that need custom solutions. If you're
                  dealing with manual processes, spreadsheets, or software that doesn't fit your
                  workflow, let's talk about building something better.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/projects/acai-delivery" className="btn-secondary">
                  Previous: Açaí Delivery System
                </a>
                <a href="/contact" className="btn-primary">
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
