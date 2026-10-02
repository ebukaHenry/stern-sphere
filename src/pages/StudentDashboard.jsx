import React from "react";
import { Link } from "react-router-dom";
import {
  RiPlayCircleLine,
  RiBookOpenLine,
  RiArrowRightLine,
  RiUserLine,
} from "react-icons/ri";
import { useAuth } from "../context/AuthContext";

export default function StudentDashboard() {
  const { user } = useAuth();

  // Get the user's name safely
  const fullName = user?.name || "Student";
  const email = user?.email || "";

  // Get initials
  const initials = fullName
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((name) => name.charAt(0).toUpperCase())
    .join("");

  // Simple color selection based on the user's name.
  // This means the avatar doesn't keep changing every render.
  const avatarColors = [
    "bg-red-600",
    "bg-teal-600",
    "bg-blue-700",
    "bg-indigo-700",
    "bg-slate-800",
    "bg-emerald-600",
  ];

  const colorIndex =
    fullName.split("").reduce((total, char) => total + char.charCodeAt(0), 0) %
    avatarColors.length;

  const avatarColor = avatarColors[colorIndex];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Stern<span className="text-red-600">Sphere</span>
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white ${avatarColor}`}
            >
              {initials}
            </div>

            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold text-slate-900">
                {fullName}
              </p>
              <p className="text-xs text-slate-500">{email}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Welcome section */}
        <section className="overflow-hidden rounded-2xl bg-slate-900 p-6 text-white shadow-sm sm:p-8">
          <div className="max-w-3xl">
            <p className="mb-2 text-sm font-medium text-teal-400">
              Your Learning Space
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Welcome, {fullName}
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
              Pick up where you left off and continue building your knowledge,
              one lesson at a time.
            </p>
          </div>
        </section>

        {/* Continue Learning */}
        <section className="mt-8">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Continue Learning
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Continue your classes from where you stopped.
              </p>
            </div>
          </div>

          {/* Empty state */}
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-14 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-50">
              <RiPlayCircleLine className="text-3xl text-teal-600" />
            </div>

            <h4 className="mt-5 text-lg font-bold text-slate-900">
              No classes in progress yet
            </h4>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              Your courses and video lessons will appear here once you start
              learning. When you return, we'll help you continue from where
              you stopped.
            </p>

            <Link
              to="/courses"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Explore Courses
              <RiArrowRightLine className="text-lg" />
            </Link>
          </div>
        </section>

        {/* Student information */}
        <section className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Profile */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50">
                <RiUserLine className="text-xl text-red-600" />
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Student Profile
                </h3>
                <p className="text-xs text-slate-500">
                  Your account information
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Name
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-800">
                  {fullName}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Email
                </p>
                <p className="mt-1 break-all text-sm font-semibold text-slate-800">
                  {email || "No email available"}
                </p>
              </div>
            </div>
          </div>

          {/* Learning progress placeholder */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                <RiBookOpenLine className="text-xl text-teal-600" />
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Your Learning
                </h3>
                <p className="text-xs text-slate-500">
                  Your progress will appear here
                </p>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">
                  Courses started
                </span>

                <span className="font-bold text-slate-900">0</span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-slate-500">
                  Lessons completed
                </span>

                <span className="font-bold text-slate-900">0</span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-slate-500">
                  Learning progress
                </span>

                <span className="font-bold text-teal-600">0%</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
