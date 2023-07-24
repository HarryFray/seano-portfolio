import Link from "next/link";

const Contact = () => {
  return (
    <main className="min-h-screen p-40">
      <h1 className="text-4xl font-bold">SEAN O’NEILL</h1>
      <p className="mt-4">
        Somewhere between wonder and memory, lies the most complex vitality —
        that which makes us human. A system of light and sound, feeling and
        color. There’s an intersection found here, that collectively reminds us
        we’re alive. For me, the moving image awakens that vitality, and at its
        core, contains the power to make us feel.
      </p>
      <p className="mt-4">
        In 2019 I moved my home-base from New York City to Denver, to reconnect
        with the things I enjoy the most. My pursuit is driven by an exposition
        of the incredible stories we all chase, and the places between where we
        land our feet.
      </p>
      <div className="flex flex-col mt-4">
        <Link
          className="w-fit text-base font-semibold hover:line-through mb-1.5"
          href="mailto:hi@SEANOfilms.com"
        >
          hi@SEANOfilms.com
        </Link>
        <Link
          className="w-fit text-base font-semibold hover:line-through mb-1.5"
          href="https://vimeo.com/seanofilms"
        >
          VIMEO
        </Link>
        <Link
          className="w-fit text-base font-semibold hover:line-through mb-1.5"
          href="https://www.instagram.com/seanwithcamera"
        >
          @seanwithcamera
        </Link>
        <Link
          className="w-fit text-base font-semibold hover:line-through mb-1.5"
          href="hi@SEANOfilms.com"
        >
          724.495.9788
        </Link>
      </div>
    </main>
  );
};

export default Contact;
