import {
  RiBookOpenLine,
  RiBrainLine,
  RiFlaskLine,
  RiGlobalLine,
  RiLightbulbLine,
  RiArrowRightLine,
} from "react-icons/ri";

const stages = [
  {
    grade: "Nursery 1",
    age: "3–4 Years",
    title: "Discover & Belong",
    text: "Building confidence, communication, curiosity and early learning foundations.",
  },
  {
    grade: "Nursery 2",
    age: "4–5 Years",
    title: "Explore & Communicate",
    text: "Strengthening literacy, numeracy, independence and discovery.",
  },
  {
    grade: "KG 1",
    age: "5–6 Years",
    title: "Think, Create & Investigate",
    text: "Connecting literacy, mathematics, science, creativity and technology.",
  },
  {
    grade: "KG 2",
    age: "5–6+ Years",
    title: "Imagine, Solve & Lead",
    text: "Preparing children for primary education through confidence and deeper thinking.",
  },
];

const approaches = [
  {
    icon: RiBookOpenLine,
    title: "Strong Academic Foundations",
    text: "Literacy, mathematics, science and cultural learning form the foundation of our academic programme.",
  },
  {
    icon: RiBrainLine,
    title: "Critical Thinking",
    text: "Children are encouraged to question, reason, investigate and solve problems.",
  },
  {
    icon: RiFlaskLine,
    title: "Learning Through Discovery",
    text: "Hands-on activities and experiments help children understand the world around them.",
  },
  {
    icon: RiLightbulbLine,
    title: "Creativity & Innovation",
    text: "Art, music, design and imaginative activities allow children to create and express themselves.",
  },
  {
    icon: RiGlobalLine,
    title: "Global Awareness",
    text: "Children develop cultural awareness and an appreciation of the wider world.",
  },
];

export default function Academics() {
  return (
    <main className="bg-white text-slate-800">

      {/* HERO */}
      <section className="bg-red-600">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <p className="text-sm font-bold uppercase tracking-widest text-red-100">
            Academics
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Where curiosity becomes capability.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-red-50 sm:text-xl">
            A strong Nigerian curriculum foundation enriched with
            child-centred, inquiry-based and competency-focused learning.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-red-600">
              Our Academic Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Learning that goes beyond the classroom.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Our academic programme develops strong foundations while
              encouraging children to think, explore, communicate and create.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              We combine academic knowledge with the skills children need to
              become confident lifelong learners.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
            <RiBrainLine className="h-10 w-10 text-red-500" />

            <h3 className="mt-6 text-2xl font-bold">
              Our goal
            </h3>

            <p className="mt-4 leading-8 text-slate-300">
              To develop children who can understand what they learn,
              communicate their ideas, solve problems and approach new
              challenges with confidence.
            </p>
          </div>

        </div>
      </section>

      {/* STAGES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">

          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-red-600">
              Learning Journey
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Growing one stage at a time.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {stages.map((stage, index) => (
              <div
                key={stage.grade}
                className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
              >
                <span className="text-sm font-bold text-red-600">
                  0{index + 1}
                </span>

                <h3 className="mt-3 text-2xl font-bold text-slate-900">
                  {stage.grade}
                </h3>

                <p className="mt-1 font-semibold text-red-600">
                  {stage.title}
                </p>

                <p className="mt-4 leading-7 text-slate-600">
                  {stage.text}
                </p>

                <p className="mt-4 text-sm font-medium text-slate-400">
                  {stage.age}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* APPROACH */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">

        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-red-600">
            How We Teach
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            More than subjects. More than memorisation.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {approaches.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon className="h-8 w-8 text-red-600" />

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

      </section>

      {/* CTA */}
      <section className="bg-red-600">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 lg:px-12">

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Explore our complete curriculum.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-red-100">
            Discover what your child will learn at every stage of the Early
            Years journey.
          </p>

          <a
            href="/curriculum"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-red-600 hover:bg-red-50"
          >
            View Curriculum
            <RiArrowRightLine className="h-5 w-5" />
          </a>

        </div>
      </section>

    </main>
  );
}