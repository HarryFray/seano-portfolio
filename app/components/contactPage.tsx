import { seanInfo } from "../contact/page";
import Image from "next/image";

interface contactPageProps {
  seanInfo: seanInfo;
}

interface socialLinke {
  text: string;
  href: string;
}

const socialLinks: socialLinke[] = [
  {
    text: "hi@SEANOfilms.com",
    href: "mailto:hi@SEANOfilms.com",
  },
  {
    text: "@seanwithcamera",
    href: "https://www.instagram.com/seanwithcamera",
  },
  {
    text: "724.495.9788",
    href: "tel:+17244959788",
  },
  {
    text: "VIMEO",
    href: "https://vimeo.com/seanofilms",
  },
];

const ContactPage = ({ seanInfo }: contactPageProps) => {
  return (
    <main className="min-h-screen p-10 lg:p-40">
      <p className="mt-12 text-white">
        Somewhere between wonder and memory, lies the most complex vitality —
        that which makes us human. A system of light and sound, feeling and
        color. There’s an intersection found here, that collectively reminds us
        we’re alive. For me, the moving image awakens that vitality, and at its
        core, contains the power to make us feel.
      </p>
      <p className="mt-4 text-white">
        In 2019 I moved my home-base from New York City to Denver, to reconnect
        with the things I enjoy the most. My pursuit is driven by an exposition
        of the incredible stories we all chase, and the places between where we
        land our feet.
      </p>
      <div
        className="flex flex-col mt-4 justify-between align-top 
          lg:mt-20 lg:flex-row"
      >
        <div className="flex flex-col text-white mb-4">
          {socialLinks.map(({ text, href }, index) => (
            <a
              key={index}
              className="w-fit text-base font-semibold hover:line-through mb-1.5"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {text}
            </a>
          ))}
        </div>
        <Image
          src={seanInfo.workImage.webp}
          alt="Sean O'Neill at work"
          width={400}
          height={400}
        />
      </div>
    </main>
  );
};

export default ContactPage;
