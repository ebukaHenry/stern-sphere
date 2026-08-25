import { useState } from "react";
import {
  RiRobot2Line,
  RiSendPlane2Fill,
  RiBookOpenLine,
  RiCalculatorLine,
  RiFlaskLine,
  RiLightbulbLine,
  RiUser3Line,
  RiSparklingLine,
} from "react-icons/ri";

const suggestions = [
  {
    icon: RiBookOpenLine,
    text: "Explain photosynthesis",
  },
  {
    icon: RiCalculatorLine,
    text: "Help me with mathematics",
  },
  {
    icon: RiFlaskLine,
    text: "Tell me about the planets",
  },
  {
    icon: RiLightbulbLine,
    text: "Give me a fun question",
  },
];

const getReply = (message) => {
  const text = message.toLowerCase();

  if (text.includes("hello") || text.includes("hi")) {
    return "Hello! 👋 I'm your AI Tutor. What would you like to learn today?";
  }

  if (
    text.includes("math") ||
    text.includes("addition") ||
    text.includes("number")
  ) {
    return "Mathematics is all about understanding numbers, patterns and how things work together. Try me with a question like: What is 25 + 17?";
  }

  if (text.includes("photosynthesis")) {
    return "Photosynthesis is the process plants use to make their own food. Plants use sunlight, water and carbon dioxide to produce food and release oxygen.";
  }

  if (
    text.includes("planet") ||
    text.includes("space") ||
    text.includes("solar system")
  ) {
    return "Our solar system has eight planets. Earth is the third planet from the Sun and is the only planet we currently know to support life.";
  }

  if (text.includes("science")) {
    return "Science helps us understand the world around us. We can learn about living things, matter, energy, space and many other amazing things!";
  }

  if (text.includes("igbo")) {
    return "Igbo is one of Nigeria's major indigenous languages. Would you like to learn some simple Igbo words or greetings?";
  }

  if (text.includes("question")) {
    return "Here's a fun one! 🌟 Which animal is known as the largest land animal in the world?";
  }

  return "That's a great question! 🤔 I'm still learning, but I can help you explore basic topics in mathematics, science, reading, general knowledge and more.";
};

export default function AITutor() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hello! 👋 I'm your AI Tutor. I'm here to help you learn, explore and ask questions. What would you like to learn today?",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = (message = input) => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: trimmedMessage,
    };

    const botMessage = {
      id: Date.now() + 1,
      sender: "bot",
      text: getReply(trimmedMessage),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <main className="min-h-screen bg-slate-50">

      {/* HERO */}
      <section className="bg-red-600">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">

          <div className="max-w-3xl">

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                <RiSparklingLine className="h-7 w-7 text-white" />
              </div>

              <span className="text-sm font-bold uppercase tracking-widest text-red-100">
                Learning Technology
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Meet your AI Tutor.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-red-50">
              Ask questions, explore ideas and practise what you've learned
              with your friendly digital learning companion.
            </p>

          </div>

        </div>
      </section>

      {/* TUTOR AREA */}
      <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">

        <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">

          {/* CHAT HEADER */}
          <div className="flex items-center gap-4 bg-slate-950 px-5 py-5 sm:px-7">

            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-600">
              <RiRobot2Line className="h-7 w-7 text-white" />

              <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-slate-950 bg-green-500" />
            </div>

            <div>
              <h2 className="font-bold text-white">
                AI Tutor
              </h2>

              <p className="text-sm text-slate-400">
                Ready to help you learn
              </p>
            </div>

          </div>

          {/* MESSAGES */}
          <div className="h-[430px] overflow-y-auto p-4 sm:p-6">

            <div className="space-y-5">

              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.sender === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >

                  {message.sender === "bot" && (
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-100">
                      <RiRobot2Line className="h-5 w-5 text-red-600" />
                    </div>
                  )}

                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-7 ${
                      message.sender === "user"
                        ? "rounded-br-md bg-red-600 text-white"
                        : "rounded-bl-md bg-slate-100 text-slate-700"
                    }`}
                  >
                    {message.text}
                  </div>

                  {message.sender === "user" && (
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-900">
                      <RiUser3Line className="h-5 w-5 text-white" />
                    </div>
                  )}

                </div>
              ))}

            </div>

          </div>

          {/* SUGGESTIONS */}
          <div className="border-t border-slate-100 px-4 py-4 sm:px-6">

            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
              Try asking
            </p>

            <div className="flex gap-2 overflow-x-auto pb-1">

              {suggestions.map((suggestion) => {
                const Icon = suggestion.icon;

                return (
                  <button
                    key={suggestion.text}
                    onClick={() => sendMessage(suggestion.text)}
                    className="flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-red-300 hover:bg-red-50 hover:text-red-600"
                  >
                    <Icon className="h-4 w-4" />
                    {suggestion.text}
                  </button>
                );
              })}

            </div>

          </div>

          {/* INPUT */}
          <div className="border-t border-slate-200 p-4 sm:p-5">

            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 rounded-2xl bg-slate-100 p-2"
            >

              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask your AI Tutor something..."
                className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />

              <button
                type="submit"
                disabled={!input.trim()}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-600 text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <RiSendPlane2Fill className="h-5 w-5" />
              </button>

            </form>

            <p className="mt-3 text-center text-xs text-slate-400">
              AI Tutor is designed to support learning, not replace teachers.
            </p>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-widest text-red-600">
              Learn Differently
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Ask. Explore. Understand.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              A friendly learning environment where children can ask
              questions and explore new ideas at their own pace.
            </p>

          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">

            {[
              {
                icon: RiBookOpenLine,
                title: "Explore",
                text: "Discover new subjects and ideas.",
              },
              {
                icon: RiLightbulbLine,
                title: "Understand",
                text: "Get simple explanations for difficult ideas.",
              },
              {
                icon: RiSparklingLine,
                title: "Stay Curious",
                text: "Keep asking questions and discovering more.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 p-7 text-center"
                >
                  <Icon className="mx-auto h-9 w-9 text-red-600" />

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* PARENT NOTE */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-8">

          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Built to support the classroom.
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            Our AI Tutor is intended to complement teachers by giving
            learners another way to practise, ask questions and explore
            ideas.
          </p>

        </div>
      </section>

    </main>
  );
}