import {
  RiBuildingLine,
  RiTeamLine,
  RiComputerLine,
  RiBookOpenLine,
  RiBarChartBoxLine,
  RiHandHeartLine,
  RiArrowRightLine,
} from "react-icons/ri";

const services = [
  {
    icon: RiBookOpenLine,
    title: "Curriculum Development",
    text: "Support schools in designing meaningful, modern and well-structured learning programmes.",
  },
  {
    icon: RiTeamLine,
    title: "Teacher Development",
    text: "Professional development opportunities designed to strengthen teaching practice.",
  },
  {
    icon: RiComputerLine,
    title: "Educational Technology",
    text: "Explore digital tools and technology solutions that improve learning and school operations.",
  },
  {
    icon: RiBarChartBoxLine,
    title: "Assessment & Progress",
    text: "Develop better approaches to monitoring learner progress and identifying learning needs.",
  },
  {
    icon: RiBuildingLine,
    title: "School Development",
    text: "Practical ideas and strategies for creating stronger learning environments.",
  },
  {
    icon: RiHandHeartLine,
    title: "Partnerships",
    text: "Collaborate with us on educational programmes, projects and learning initiatives.",
  },
];

export default function Schools() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

          <p className="text-sm font-bold uppercase tracking-widest text-red-500">
            For Schools
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Partnerships for better education.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            We believe stronger schools create stronger communities. Our
            partnerships are designed to support educators, school leaders and
            learners.
          </p>

        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">

        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-red-600">
            What We Offer
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Building better learning environments together.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon className="h-9 w-9 text-red-600" />

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.text}
                </p>
              </div>
            );
          })}

        </div>

      </section>

      {/* PARTNERSHIP */}
      <section className="bg-red-600">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-red-100">
                Partner With Us
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Let's create better opportunities for learners.
              </h2>

              <p className="mt-5 leading-8 text-red-50">
                Whether you are a school owner, administrator, teacher or
                educational organisation, we are open to meaningful
                partnerships.
              </p>
            </div>

            <div>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-red-600"
              >
                Become a Partner
                <RiArrowRightLine />
              </a>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}