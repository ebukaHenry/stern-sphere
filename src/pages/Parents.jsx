import {
  RiHeartLine,
  RiMessage2Line,
  RiCalendarLine,
  RiBookOpenLine,
  RiShieldCheckLine,
  RiQuestionLine,
  RiArrowRightLine,
} from "react-icons/ri";

const parentFeatures = [
  {
    icon: RiMessage2Line,
    title: "Regular Communication",
    text: "Stay informed about your child's learning, activities and school life.",
  },
  {
    icon: RiBookOpenLine,
    title: "Learning Updates",
    text: "Understand what your child is learning and how you can support learning at home.",
  },
  {
    icon: RiCalendarLine,
    title: "Events & Activities",
    text: "Keep up with school events, important dates and activities.",
  },
  {
    icon: RiHeartLine,
    title: "Child Wellbeing",
    text: "We care about the emotional, social and physical wellbeing of every child.",
  },
  {
    icon: RiShieldCheckLine,
    title: "Safety & Protection",
    text: "Children deserve an environment where they feel safe, respected and supported.",
  },
  {
    icon: RiQuestionLine,
    title: "Parent Support",
    text: "Our team is available to answer questions and help families navigate school life.",
  },
];

const homeTips = [
  "Read with your child regularly.",
  "Encourage questions and curiosity.",
  "Practise numbers through everyday activities.",
  "Allow your child to make age-appropriate choices.",
  "Talk about what your child learned at school.",
  "Celebrate effort, not only results.",
];

export default function Parents() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-red-600">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

          <p className="text-sm font-bold uppercase tracking-widest text-red-100">
            For Parents
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Education works best when we work together.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-red-50">
            We see parents as partners in their child's learning journey.
          </p>

        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {parentFeatures.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 p-7"
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

      {/* HOME LEARNING */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-red-500">
                Learning At Home
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Small moments can create big learning opportunities.
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Learning doesn't stop when the school day ends. Simple
                everyday experiences can help children develop language,
                mathematics, creativity and independence.
              </p>
            </div>

            <div className="space-y-3">

              {homeTips.map((tip, index) => (
                <div
                  key={tip}
                  className="flex gap-4 rounded-xl bg-white/5 p-4 text-slate-200"
                >
                  <span className="font-bold text-red-500">
                    0{index + 1}
                  </span>

                  <span>{tip}</span>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-24">

        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-red-600">
            Parent FAQ
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">

          {[
            "What age can my child start?",
            "What documents are required for admission?",
            "How are parents updated about their child's progress?",
            "How often are assessments conducted?",
            "How does the school support individual learning needs?",
          ].map((question) => (
            <details key={question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-slate-900">
                {question}
                <span className="text-red-600">+</span>
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                Please contact our admissions team for detailed information
                about this area of school life.
              </p>
            </details>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="bg-red-600">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center">

          <h2 className="text-3xl font-bold text-white">
            Have a question?
          </h2>

          <p className="mt-4 text-red-100">
            Our team would be happy to help.
          </p>

          <a
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-red-600"
          >
            Contact Us
            <RiArrowRightLine />
          </a>

        </div>
      </section>

    </main>
  );
}