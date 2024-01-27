import { seanInfo } from "../contact/page";
import Image from "next/image";

interface contactPageProps {
  seanInfo: seanInfo;
}

interface socialLink {
  text: string;
  href: string;
}

const ContactPage = ({ seanInfo }: contactPageProps) => {
  return (
    <main className="min-h-screen p-10 lg:p-40 flex flex-col items-center justify-center">
      <Image
        src={seanInfo.workImage.webp}
        alt="Sean O'Neill at work"
        width={400}
        height={400}
        className="mb-8"
      />
      <div className="text-white text-center whitespace-pre-wrap leading-5 font-light">
        {seanInfo.contactPageText}
      </div>
    </main>
  );
};

export default ContactPage;
