import Link from "next/link";

const Contact = () => {
  return (
    <main className="min-h-screen p-40">
      <Link
        href="/"
        className="text-4xl font-bold text-center hover:line-through text-white"
      >
        SEAN O’NEILL
      </Link>
      <p className="mt-16 text-white">
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
      <div className="flex flex-col mt-20 text-white">
        <Link
          className="w-fit text-base font-semibold hover:line-through mb-1.5"
          href="mailto:hi@SEANOfilms.com"
        >
          hi@SEANOfilms.com
        </Link>
        <Link
          className="w-fit text-base font-semibold hover:line-through mb-1.5"
          href="https://www.instagram.com/seanwithcamera"
        >
          @seanwithcamera
        </Link>
        <Link
          className="w-fit text-base font-semibold hover:line-through mb-1.5"
          href="tel:+17244959788"
        >
          724.495.9788
        </Link>
        <Link
          className="w-fit text-base font-semibold hover:line-through mb-1.5"
          href="https://vimeo.com/seanofilms"
        >
          VIMEO
        </Link>
      </div>
    </main>
  );
};

export default Contact;
