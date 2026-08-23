import {
  RiBookOpenLine,
  RiCalendarEventLine,
  RiStarLine,
  RiCheckLine,
  RiArrowRightLine,
  RiRocketLine,
} from "react-icons/ri";

const programmes = [
  {
    icon: RiBookOpenLine,
    category: "EARLY YEARS",
    title: "Nursery Foundation",
    description:
      "A strong beginning for young learners through play, discovery and foundational learning.",
    features: [
      "Nursery 1",
      "Nursery 2",
      "Literacy foundations",
      "Numeracy foundations",
      "Creative development",
    ],
    price: "₦XX,XXX",
    period: "per term",
  },
  {
    icon: RiStarLine,
    category: "KINDERGARTEN",
    title: "Kindergarten Programme",
    description:
      "A complete early learning experience designed to prepare children for primary education.",
    features: [
      "KG 1",
      "KG 2",
      "Literacy & Mathematics",
      "Science & Discovery",
      "Digital awareness",
    ],
    price: "₦XX,XXX",
    period: "per term",
    popular: true,
  },
  {
    icon: RiCalendarEventLine,
    category: "HOLIDAY",
    title: "Holiday Learning Club",
    description:
      "Fun and purposeful learning experiences during school holidays.",
    features: [
      "Creative activities",
      "STEM exploration",
      "Reading",
      "Arts & crafts",
      "Team projects",
    ],
    price: "₦XX,XXX",
    period: "per programme",
  },
];

export default function Pricing() {
  return (
    <main className="bg-slate-50">

      {/* HERO */}
      <section className="bg-red-600">
        <div className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-8 lg:px-12 lg:py-28">

          <p className="text-sm font-bold uppercase tracking-widest text-red-100">
            Programmes & Fees
          </p>

          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Choose the right learning experience.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-red-50">
            Explore our programmes and discover the learning opportunities
            available for your child.
          </p>

        </div>
      </section>

      {/* PROGRAMMES */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">

        <div className="grid gap-6 lg:grid-cols-3">

          {programmes.map((programme) => {
            const Icon = programme.icon;

            return (
              <div
                key={programme.title}
                className={`relative rounded-3xl bg-white p-7 shadow-sm ring-1 ${
                  programme.popular
                    ? "ring-2 ring-red-600"
                    : "ring-slate-200"
                }`}
              >

                {programme.popular && (
                  <div className="absolute right-5 top-5 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
                    POPULAR
                  </div>
                )}

                <Icon className="h-10 w-10 text-red-600" />

                <p className="mt-6 text-xs font-bold tracking-widest text-red-600">
                  {programme.category}
                </p>

                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  {programme.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {programme.description}
                </p>

                <div className="mt-7 border-t border-slate-200 pt-6">

                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold text-slate-900">
                      {programme.price}
                    </span>

                    <span className="pb-1 text-sm text-slate-500">
                      {programme.period}
                    </span>
                  </div>

                </div>

                <ul className="mt-6 space-y-3">

                  {programme.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-slate-600"
                    >
                      <RiCheckLine className="h-5 w-5 shrink-0 text-red-600" />
                      {feature}
                    </li>
                  ))}

                </ul>

                <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-bold text-white hover:bg-red-600">
                  View Programme
                  <RiArrowRightLine />
                </button>

              </div>
            );
          })}

        </div>

      </section>

      {/* CUSTOM PROGRAMMES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">

          <div className="grid gap-10 md:grid-cols-2 md:items-center">

            <div>
              <RiRocketLine className="h-10 w-10 text-red-600" />

              <h2 className="mt-5 text-3xl font-bold text-slate-900">
                Looking for something different?
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Speak with our team about programmes, clubs or learning
                opportunities that may be suitable for your child.
              </p>
            </div>

            <div className="md:text-right">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-bold text-white hover:bg-red-700"
              >
                Talk to Our Team
                <RiArrowRightLine />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center">

          <h2 className="text-3xl font-bold text-white">
            Don't miss what's next.
          </h2>

          <p className="mt-4 text-slate-300">
            Subscribe for school updates, programmes and useful learning
            resources.
          </p>

          <form className="mt-7 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="min-w-0 flex-1 rounded-xl px-4 py-3 text-slate-900 outline-none"
            />

            <button className="rounded-xl bg-red-600 px-6 py-3 font-bold text-white hover:bg-red-700">
              Subscribe
            </button>
          </form>

        </div>
      </section>

    </main>
  );
}