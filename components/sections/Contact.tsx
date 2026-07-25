const socialContacts = [
    {
        name: "Email",
        handle: "fadhiil.fiannata@email.com",
        href: "mailto:fadhiil.fiannata@email.com",
        icon: "/assets/email-1572-svgrepo-com.svg",
        alt: "Email Icon",
        glow: "hover:border-rose-500/40 hover:shadow-[0_0_25px_rgba(244,63,94,0.15)] hover:bg-rose-950/20"
    },
    {
        name: "LinkedIn",
        handle: "Fadhiil Fiannata Nugroho",
        href: "https://www.linkedin.com/in/fadhiil-fiannata-nugroho-24a300385/",
        icon: "/assets/linkedin-svgrepo-com.svg",
        alt: "LinkedIn Icon",
        glow: "hover:border-sky-500/40 hover:shadow-[0_0_25px_rgba(14,165,233,0.15)] hover:bg-sky-950/20"
    },
    {
        name: "Discord",
        handle: "fadhiilfiannata",
        href: "https://discordapp.com/users/876832021752709162",
        icon: "/assets/discord2-svgrepo-com.svg",
        alt: "Discord Icon",
        glow: "hover:border-indigo-500/40 hover:shadow-[0_0_25px_rgba(99,102,241,0.15)] hover:bg-indigo-950/20"
    },
    {
        name: "GitHub",
        handle: "@Coydhiil",
        href: "https://github.com/Coydhiil",
        icon: "/assets/github-142-svgrepo-com.svg",
        alt: "GitHub Icon",
        glow: "hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] hover:bg-purple-950/20"
    }
];

export default function Contact() {
    return (
        <section id="contact" className="relative font-paragraph min-h-screen py-24 lg:py-32 overflow-hidden">
            <div className="absolute top-1/6 left-1/5 w-[750px] h-[500px] bg-indigo-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />

            <div className="container mx-auto px-6 sm:px-12 max-w-7xl relative z-10 space-y-12 lg:space-y-16">
                <div className="space-y-4 max-w-3xl">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-600 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-md border border-cyan-400/20">
                        Contact Me
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-header text-white tracking-tight leading-tight">
                        Let’s Connect Together
                    </h2>
                    <p className="text-lg lg:text-base text-white/75 leading-relaxed">
                        I’m always eager to discuss and exchange ideas about IT, and I’m open to opportunities for collaboration or internships. Let’s connect!
                    </p>
                    <div className="flex items-center gap-3">
                        {socialContacts.map((contact, index) => (
                            <a
                                key={index}
                                href={contact.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={contact.name}
                                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-white/80 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95"
                            >
                                <img
                                    src={contact.icon}
                                    alt={contact.alt}
                                    className="w-5 h-5 object-contain"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}