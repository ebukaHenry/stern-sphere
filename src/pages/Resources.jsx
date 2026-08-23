import {
  RiArticleLine,
  RiBookOpenLine,
  RiParentLine,
  RiGraduationCapLine,
  RiDownloadLine,
  RiMailLine,
  RiArrowRightLine,
} from "react-icons/ri";

const resources = [
  {
    icon: RiParentLine,
    category: "Parent Guide",
    title: "Helping Your Child Learn at Home",
    text: "Simple ways parents can turn everyday activities into learning opportunities.",
  },
  {
    icon: RiBookOpenLine,
    category: "Learning Activity",
    title: "Fun Number Activities for Early Learners",
    text: "Practical activities that help young children develop early mathematical thinking.",
  },
  {
    icon: RiGraduationCapLine,
    category: "Teacher Resource",
    title: "Making Science Fun in Early Years",
    text: "Ideas for encouraging children to observe, question and investigate.",
  },
  {
    icon: RiArticleLine,
    category: "Education",
    title: "Why Children Learn Through Play",
    text: "Understanding the importance of meaningful play in early childhood.",
  },
];

export default function Resources() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-red-600">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

          <p className="text-sm font-bold uppercase tracking-widest text-red-100">
            Resources
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Ideas that keep learning going.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-red-50">
            Helpful resources for parents, teachers and anyone passionate
            about helping children learn and grow.
          </p>

        </div>
      </section>

      {/* RESOURCE CARDS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">

        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-red-600">
              Explore
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Featured resources
            </h2>
          </div>

          <button className="flex items-center gap-2 font-semibold text-red-600">
            View all
            <RiArrowRightLine />
          </button>

        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {resources.map((resource) => {
            const Icon = resource.icon;

            return (
              <article
                key={resource.title}
                className="overflow-hidden rounded-2xl border border-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-36 items-center justify-center bg-slate-100">
                  <Icon className="h-12 w-12 text-red-600" />
                </div>

                <div className="p-6">

                  <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                    {resource.category}
                  </span>

                  <h3 className="mt-3 font-bold text-slate-900">
                    {resource.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {resource.text}
                  </p>

                  <button className="mt-5 flex items-center gap-2 text-sm font-bold text-red-600">
                    Read More
                    <RiArrowRightLine />
                  </button>

                </div>
              </article>
            );
          })}

        </div>

      </section>

      {/* DOWNLOADS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">

          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl bg-white p-7 ring-1 ring-slate-200">
              <RiDownloadLine className="h-9 w-9 text-red-600" />

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Downloads
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Access useful school documents, guides and learning materials.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 ring-1 ring-slate-200">
              <RiGraduationCapLine className="h-9 w-9 text-red-600" />

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Teacher Resources
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Discover ideas and resources designed to support educators.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 lg:py-20">

          <RiMailLine className="mx-auto h-10 w-10 text-red-500" />

          <h2 className="mt-5 text-3xl font-bold text-white">
            Stay connected to learning.
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            Get parenting tips, learning activities, school news and useful
            educational ideas delivered to your inbox.
          </p>

          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-red-500"
            />

            <button
              type="submit"
              className="rounded-xl bg-red-600 px-6 py-3 font-bold text-white hover:bg-red-700"
            >
              Subscribe
            </button>
          </form>

          <p className="mt-4 text-xs text-slate-500">
            No spam. Just useful ideas and updates.
          </p>

        </div>
      </section>

    </main>
  );
}