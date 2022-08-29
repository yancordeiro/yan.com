import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yan Cordeiro</title>
        <meta />
        <html lang="pt-BR">
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
            rel="stylesheet"
          />
        </html>
      </Head>

      <div className="h-screen flex flex-col">
        <div className="text-xs flex h-14 items-center justify-center flex-wrap uppercase font-biotif tracking-wide text-secondary ">
          <Link href="/sobre">
            <a className="px-4 hover:text-primary duration-500">sobre mim</a>
          </Link>
          <Link href="/projetos">
            <a className="px-4 hover:text-primary  duration-500 active:border-0">
              projetos
            </a>
          </Link>
        </div>

        <div className="m-auto max-w-3xl ">
          <div className="text-primary flex flex-col relative h-full py-5 items-center justify-center text-xl">
            <h1 className="w-fit bg-gradient-to-r text-transparent bg-clip-text from-bluegradient  to-bluegradient2 text-5xl font-neuzeit font-bold">
              Yan Cordeiro
            </h1>
            <p className="py-6">Front-end Developer.</p>
            <p className="text-secondary text-lg">
              Simple, beautiful and useful products.
            </p>
          </div>
        </div>

        <div className=" flex py-5 items-center justify-center text-secondary text-biotif h-14 ">
          <a
            href="https://www.linkedin.com/in/yancordeiro/"
            target="_blank"
            rel="noreferrer"
            className="px-2.5 sm:px-5 hover:text-primary duration-500"
          >
            linkedin
          </a>
          <a
            href="https://github.com/yancordeiro"
            target="_blank"
            rel="noreferrer"
            className="px-2.5 sm:px-5 hover:text-primary duration-500"
          >
            github
          </a>
          <a
            href="https://www.instagram.com/cabeler4/"
            target="_blank"
            rel="noreferrer"
            className="px-2.5 sm:px-5 hover:text-primary duration-500"
          >
            instagram
          </a>
          <a
            href="https://discord.com/users/308423025013948417"
            target="_blank"
            rel="noreferrer"
            className="px-2.5 sm:px-5 hover:text-primary duration-500"
          >
            discord
          </a>
        </div>
      </div>
    </div>
  );
}
