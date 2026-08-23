import {
  RiBookOpenLine,
  RiBrainLine,
  RiGlobalLine,
  RiHeartLine,
  RiLightbulbLine,
  RiTeamLine,
  RiSparklingLine,
  RiArrowRightLine,
} from "react-icons/ri";

const philosophyPoints = [
  {
    icon: RiHeartLine,
    title: "Every Child Matters",
    text: "We recognise every child as an individual with unique strengths, interests, abilities and potential.",
  },
  {
    icon: RiSparklingLine,
    title: "Learning Through Discovery",
    text: "Children learn best when they can explore, experiment, ask questions, create and make meaningful connections.",
  },
  {
    icon: RiBrainLine,
    title: "Learning Beyond Memorisation",
    text: "We develop understanding, reasoning, creativity and problem-solving alongside strong academic foundations.",
  },
  {
    icon: RiTeamLine,
    title: "Learning Together",
    text: "Children develop communication, empathy, teamwork and respect through meaningful interaction with others.",
  },
  {
    icon: RiGlobalLine,
    title: "Rooted in Culture",
    text: "We celebrate Nigerian and African heritage while helping children understand and appreciate the wider world.",
  },
  {
    icon: RiLightbulbLine,
    title: "Preparing for Tomorrow",
    text: "We intentionally develop curiosity, independence, digital awareness and lifelong learning habits.",
  },
];

export default function About() {
  return (
    <main className="bg-white text-slate-800">

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-4xl">

            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white">
              Our Educational Philosophy
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Rooted in Nigeria.
              <span className="block text-blue-400">
                Inspired by the world.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              We combine the Nigerian educational foundation with modern,
              child-centred approaches that develop confident, curious and
              capable lifelong learners.
            </p>

          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Who We Are
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Education that develops the whole child
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                At our school, we believe education is more than preparing
                children to pass examinations. It is about helping every child
                discover who they are, understand the world around them and
                develop the confidence to participate in it.
              </p>

              <p>
                Our curriculum is rooted in the Nigerian educational framework
                and enriched by internationally informed approaches to
                child-centred, play-based and competency-focused learning.
              </p>

              <p>
                We combine academic foundations in literacy, numeracy, science
                and cultural education with creativity, communication,
                collaboration, independence, problem-solving and digital
                awareness.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8 sm:p-10">
            <RiBookOpenLine className="h-10 w-10 text-blue-600" />

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              Our Promise to Every Child
            </h3>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              We want every child to leave our Early Years programme as a
              curious thinker, confident communicator, creative problem-solver,
              kind collaborator and independent learner.
            </p>

            <div className="mt-8 border-l-4 border-blue-600 pl-5">
              <p className="font-semibold leading-7 text-slate-900">
                Our goal is not simply to prepare children for the next class.
                Our goal is to prepare them for a lifetime of learning.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Our Philosophy
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Children are not empty vessels to be filled.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              They are naturally curious learners. Our role is to create an
              environment where that curiosity can grow into knowledge,
              confidence, creativity and character.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {philosophyPoints.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SIX PILLARS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Our Framework
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Six foundations of learning
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Every learning experience contributes to several areas of a
              child's development. This allows academic learning and personal
              development to grow together.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">

            {[
              ["01", "Language & Communication"],
              ["02", "Mathematics & Logical Thinking"],
              ["03", "Science, Discovery & Technology"],
              ["04", "Creativity & Expression"],
              ["05", "Personal, Social & Cultural Development"],
              ["06", "Physical Development & Wellbeing"],
            ].map(([number, title]) => (
              <div
                key={number}
                className="rounded-2xl border border-slate-200 p-6"
              >
                <span className="text-sm font-bold text-blue-600">
                  {number}
                </span>

                <h3 className="mt-3 font-bold text-slate-900">
                  {title}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* GLOBAL CONNECTION */}
      <section className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-100">
                International Perspective
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Local roots. Global outlook.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-50">
                We believe children should understand where they come from
                while developing the confidence and skills to engage with the
                wider world.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-7 text-white backdrop-blur">
              <p className="leading-8">
                Our international outlook is reflected in the way we encourage
                communication, cultural awareness, collaboration, creativity,
                responsible technology use and curiosity about the world.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 lg:px-12 lg:py-24">

        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Preparing children for a lifetime of learning.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Explore our curriculum and discover how learning progresses from
          Nursery 1 through Kindergarten 2.
        </p>

        <a
          href="/curriculum"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
        >
          Explore Our Curriculum
          <RiArrowRightLine className="h-5 w-5" />
        </a>

      </section>

    </main>
  );
}