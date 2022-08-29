import Link from "next/link";
import Image from "next/image";

export default function sobre() {
  return (
    <div className="h-screen flex flex-col relative">
      <div className="text-xs flex h-14 items-center justify-center flex-wrap uppercase font-biotif tracking-wide text-secondary pt-3">
        <Link href="/">
          <a className="px-4 hover:text-primary duration-500">home</a>
        </Link>
        <Link href="/projetos">
          <a className="px-4 hover:text-primary  duration-500 active:border-0">
            projetos
          </a>
        </Link>
      </div>

      <div className="flex flex-col p-5">
        <div
          className="
      mx-auto py-5w-fit h-auto bg-gradient-to-r text-transparent bg-clip-text from-orangegradient  to-orangegradient2 text-5xl font-neuzeit font-bold"
        >
          Uma frase de efeito legal.
        </div>

        <div className="mx-auto">
          <div className="flex flex-col container mx-auto sm:flex-row sm:max-w-5xl items-center">
            <div className="pt-5 sm:w-1/2 flex justify-center">
              <Image
                className="rounded-lg object-cover"
                alt="Yan"
                src="/images/profile.jpg"
                width="336"
                height="336"
                priority
              />
            </div>
            <div className="text-secondary text-justify sm:w-1/3 pt-5 flex justify-center">
              <p className="">
                Oi, eu sou o Yan. Sou Desenvolvedor front-end, me formei em
                Sistemas de Informação pela Universidade Unigranrio. Atualmente
                trabalho como Freelancer e estudo desenvolvimento mobile e UI/UX
                como hobby.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex py-5 items-center justify-center text-secondary text-biotif h-14 absolute bottom-0 my-auto w-full">
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
  );
}

// bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
// text-5xl font-neuzeit font-bold
