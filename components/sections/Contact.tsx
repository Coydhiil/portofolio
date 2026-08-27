"use client";
import Image from "next/image";

import { useState } from "react";

export default function Contact() {
  const socialContacts = [
    {
      name: "Email",
      handle: "fadhiil.fiannata@email.com",
      href: "mailto:fadhiil.fiannata@email.com",
      icon: "/assets/email-1572-svgrepo-com.svg",
      alt: "Email Icon",
      glow: "hover:border-rose-500/40 hover:shadow-[0_0_25px_rgba(244,63,94,0.15)] hover:bg-rose-950/20",
    },
    {
      name: "LinkedIn",
      handle: "Fadhiil Fiannata Nugroho",
      href: "https://www.linkedin.com/in/fadhiil-fiannata-nugroho/",
      icon: "/assets/linkedin-svgrepo-com.svg",
      alt: "LinkedIn Icon",
      glow: "hover:border-sky-500/40 hover:shadow-[0_0_25px_rgba(14,165,233,0.15)] hover:bg-sky-950/20",
    },
    {
      name: "Discord",
      handle: "fadhiilfiannata",
      href: "https://discordapp.com/users/876832021752709162",
      icon: "/assets/discord2-svgrepo-com.svg",
      alt: "Discord Icon",
      glow: "hover:border-indigo-500/40 hover:shadow-[0_0_25px_rgba(99,102,241,0.15)] hover:bg-indigo-950/20",
    },
    {
      name: "GitHub",
      handle: "@Coydhiil",
      href: "https://github.com/Coydhiil",
      icon: "/assets/github-142-svgrepo-com.svg",
      alt: "GitHub Icon",
      glow: "hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] hover:bg-purple-950/20",
    },
  ];

  const [message, setMessage] = useState("");

  return (
    <section
      id="contact"
      className="relative font-paragraph min-h-screen py-24 lg:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6 sm:px-12 max-w-7xl relative z-10 space-y-12 lg:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-600 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-md border border-cyan-400/20">
              Contact Me
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-header text-white tracking-tight leading-tight">
              Let's Connect Together.
            </h2>
            <p className="text-lg lg:text-base text-white/75 leading-relaxed">
              I'm always eager to discuss and exchange ideas about IT, and I’m
              open to opportunities for collaboration or internships. Let’s
              connect!
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socialContacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={contact.name}
                  className="p-2.5 rounded-full bg-neutral-800 hover:bg-cyan-600 transition-all duration-300 active:scale-95"
                >
                  <Image
                    src={contact.icon}
                    alt={contact.alt}
                    width={24}
                    height={24}
                    className="w-5 h-5 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-neutral-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">
            <form
              action={process.env.NEXT_PUBLIC_FORM_URL}
              method="POST"
              className="flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="font-body text-xs text-white uppercase tracking-wider mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 focus:border-cyan-500/50 focus:outline-none text-zinc-100 font-body text-sm placeholder-white/50 transition-colors duration-300"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="font-body text-xs text-white uppercase tracking-wider mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    required
                    className="px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 focus:border-cyan-500/50 focus:outline-none text-zinc-100 font-body text-sm placeholder-white/50 transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <label
                    htmlFor="message"
                    className="font-body text-xs text-white uppercase tracking-wider"
                  >
                    Message
                  </label>
                  <span className="font-mono text-xs text-white/50">
                    {message.length} / 2000
                  </span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  minLength={10}
                  maxLength={2000}
                  rows={6}
                  placeholder="Your message..."
                  required
                  className="overflow-auto scrollbar-thin scrollbar-gutter-stable scrollbar-thumb-cyan-500/50 scrollbar-track-white/5 px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 focus:border-cyan-500/50 focus:outline-none text-zinc-100 font-body text-sm placeholder-white/50 resize-none transition-colors duration-300"
                />
                {message.length > 0 && message.length < 10 && (
                  <span className="text-xs text-red-400 mt-1.5 font-body">
                    At least 10 characters
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="w-full self-start px-8 py-3.5 rounded-lg flex gap-2 items-center justify-center bg-cyan-400 hover:bg-cyan-300 text-black hover:shadow-[0_0_20px_rgba(0,229,255,0.35)] shadow-lg font-body text-sm font-bold tracking-wider active:scale-95 transition-all duration-300 group"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
