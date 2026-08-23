import { useState } from "react";
import {
  RiArrowRightLine,
  RiBookOpenLine,
  RiBrainLine,
  RiCheckboxCircleLine,
  RiGlobalLine,
  RiLightbulbLine,
  RiSparklingLine,
  RiTeamLine,
} from "react-icons/ri";

import {
  curriculumGrades,
  learningPillars,
  transversalSkills,
} from "../data/curriculumData";

export default function Curriculum() {
  const [activeGrade, setActiveGrade] = useState("nursery-1");

  const selectedGrade = curriculumGrades.find(
    (grade) => grade.id === activeGrade
  );

  return (
    <main className="bg-white text-slate-800">

      {/* HERO */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

          <div className="max-w-4xl">

            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white">
              Our Curriculum
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Learning with purpose.
              <span className="block text-blue-400">
                Growing with confidence.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              A strong Nigerian curriculum foundation enriched with
              child-centred, inquiry-based and competency-focused learning.
            </p>

          </div>

        </div>
      </section>

      {/* CURRICULUM PHILOSOPHY */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">

        <div className="grid gap-10 lg:grid-cols-3">

          <div className="rounded-2xl border border-slate-200 p-7">
            <RiBookOpenLine className="h-8 w-8 text-blue-600" />

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Strong Foundations
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Children develop strong foundations in literacy, mathematics,
              science, health, culture and physical development.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-7">
            <RiBrainLine className="h-8 w-8 text-blue-600" />

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Deeper Thinking
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Children are encouraged to ask questions, investigate ideas,
              solve problems and explain their thinking.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-7">
            <RiGlobalLine className="h-8 w-8 text-blue-600" />

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Global Readiness
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              We develop communication, cultural awareness, collaboration,
              creativity and responsible digital awareness.
            </p>
          </div>

        </div>

      </section>

      {/* LEARNING PILLARS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">

          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Our Learning Model
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Six interconnected learning pillars
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Rather than treating learning as isolated subjects, we connect
              knowledge and skills so children can apply what they learn to
              meaningful situations.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {learningPillars.map((pillar) => (
              <div
                key={pillar.number}
                className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
              >
                <span className="text-sm font-bold text-blue-600">
                  {pillar.number}
                </span>

                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  {pillar.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {pillar.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Beyond Subjects
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Skills for life, not just the classroom
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Every subject provides an opportunity to develop broader
              competencies. Children learn not only what to know, but how to
              think, communicate, collaborate and apply what they know.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

            {transversalSkills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
              >
                <RiCheckboxCircleLine className="h-5 w-5 shrink-0 text-blue-600" />

                <span className="font-medium text-slate-800">
                  {skill}
                </span>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* GRADE CURRICULUM */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">

          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-400">
              Early Years Journey
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Explore our class-by-class curriculum
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Each stage builds naturally on the previous one, gradually
              developing academic foundations, confidence, independence and
              readiness for the next stage of learning.
            </p>
          </div>

          {/* GRADE SELECTOR */}
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {curriculumGrades.map((grade) => {
              const active = activeGrade === grade.id;

              return (
                <button
                  key={grade.id}
                  onClick={() => setActiveGrade(grade.id)}
                  className={`rounded-2xl border p-5 text-left transition ${
                    active
                      ? "border-blue-400 bg-blue-600 text-white"
                      : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  <span className="text-sm font-medium opacity-80">
                    {grade.age}
                  </span>

                  <h3 className="mt-2 text-lg font-bold">
                    {grade.grade}
                  </h3>

                  <p className="mt-1 text-sm opacity-80">
                    {grade.theme}
                  </p>
                </button>
              );
            })}

          </div>

          {/* SELECTED GRADE */}
          {selectedGrade && (
            <div className="mt-10 rounded-3xl bg-white p-6 sm:p-8 lg:p-10">

              <div className="border-b border-slate-200 pb-8">

                <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                  {selectedGrade.age}
                </span>

                <h3 className="mt-2 text-3xl font-bold text-slate-900">
                  {selectedGrade.grade}
                </h3>

                <p className="mt-2 text-lg font-semibold text-blue-600">
                  {selectedGrade.theme}
                </p>

                <p className="mt-5 max-w-3xl leading-8 text-slate-600">
                  {selectedGrade.description}
                </p>

              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                {selectedGrade.areas.map((area) => (
                  <div
                    key={area.title}
                    className="rounded-2xl bg-slate-50 p-6"
                  >
                    <h4 className="font-bold text-slate-900">
                      {area.title}
                    </h4>

                    <ul className="mt-4 space-y-2">
                      {area.topics.map((topic) => (
                        <li
                          key={topic}
                          className="flex gap-2 text-sm leading-6 text-slate-600"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

              </div>

            </div>
          )}

        </div>
      </section>

      {/* LEARNING EXPERIENCE */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">

        <div className="grid gap-8 md:grid-cols-3">

          <div>
            <RiSparklingLine className="h-8 w-8 text-blue-600" />

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Learn Through Play
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Play, exploration and purposeful activities help children develop
              understanding naturally.
            </p>
          </div>

          <div>
            <RiLightbulbLine className="h-8 w-8 text-blue-600" />

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Learn Through Discovery
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Children ask questions, investigate ideas, experiment and learn
              from their experiences.
            </p>
          </div>

          <div>
            <RiTeamLine className="h-8 w-8 text-blue-600" />

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Learn Together
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Collaboration helps children develop communication, empathy,
              confidence and respect.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 lg:px-12 lg:py-20">

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Give your child a strong start.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-blue-50">
            Discover a learning environment designed to build knowledge,
            confidence, creativity and character.
          </p>

          <a
            href="/admissions"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-blue-700 transition hover:bg-blue-50"
          >
            Explore Admissions
            <RiArrowRightLine className="h-5 w-5" />
          </a>

        </div>
      </section>

    </main>
  );
}