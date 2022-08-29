import Link from "next/link";

export default function Projects() {
  return (
    <div>
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
      mx-auto py-5w-fit h-auto bg-gradient-to-r text-transparent bg-clip-text from-purplegradient to-purplegradient2 text-5xl font-neuzeit font-bold"
          >
            Meus Projetos
          </div>

          <div>
            <div className="grid grid-cols pt-5 sm:grid-cols-4 gap-1 sm:p-[10px] grid-flow-row-dense">
              <div className="text-primary flex items-center justify-center ease-in duration-300 text-2xl sm:text-4xl uppercase font-bold font-bebas bg-secondary sm:col-span-2 row-span-2 shadow-xl min-h-[200px] min-w-[200px]">
                alaska
              </div>
              <div className="text-primary flex items-center justify-center hover:ease-in duration-300 hover:bg-background hover:opacity-50 text-2xl sm:text-4xl uppercase font-bold font-bebas bg-secondary shadow-xl min-h-[200px] min-w-[200px]">
                teste1
              </div>
              <div className="text-primary flex items-center justify-center ease-in duration-300 text-2xl sm:text-4xl uppercase font-bold font-bebas bg-secondary shadow-xl min-h-[200px] min-w-[200px]">
                teste2
              </div>
              <div className="text-primary flex items-center justify-center ease-in duration-300 text-2xl sm:text-4xl uppercase font-bold font-bebas bg-secondary sm:col-span-2 shadow-xl min-h-[200px] min-w-[200px]">
                teste3
              </div>
              <div className="text-primary flex items-center justify-center ease-in duration-300 text-2xl sm:text-4xl uppercase font-bold font-bebas bg-secondary  shadow-xl min-h-[200px] min-w-[200px]">
                teste5
              </div>
              <div className="text-primary flex items-center justify-center ease-in duration-300 text-2xl sm:text-4xl uppercase font-bold font-bebas bg-secondary  shadow-xl min-h-[200px] min-w-[200px]">
                teste6
              </div>
              <div className="text-primary flex items-center justify-center ease-in duration-300 text-2xl sm:text-4xl uppercase font-bold font-bebas bg-secondary sm:col-span-2 row-span-2 shadow-xl min-h-[200px] min-w-[200px]">
                teste7
              </div>
              <div className="text-primary flex items-center justify-center ease-in duration-300 text-2xl sm:text-4xl uppercase font-bold font-bebas bg-secondary sm:col-span-2 shadow-xl min-h-[200px] min-w-[200px]">
                teste8
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
