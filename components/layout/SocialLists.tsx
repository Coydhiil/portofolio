import Image from "next/image";

export default function SocialLists({ ...props }) {
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

  return (
    <div className="flex items-center gap-3 pt-2">
      {socialContacts.map((contact, index) => (
        <a
          key={index}
          href={contact.href}
          target="_blank"
          rel="noopener noreferrer"
          title={contact.name}
          {...props}
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
  );
}
