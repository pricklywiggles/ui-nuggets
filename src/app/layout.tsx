import './globals.css';
import { Encode_Sans as Encode, Mr_Dafoe as Dafoe } from 'next/font/google';
import { Nav } from '@/components/nav';
import Image from 'next/image';
import { Credits } from '@/components/credits';

const encode = Encode({ subsets: ['latin'] });
const dafoe = Dafoe({ weight: '400', subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-slate-900" lang="en">
      <body className={`${encode.className} relative isolate`}>
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-[90px] sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[100/99] w-[36.125rem] -translate-x-1/2 translate-y-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(70%-30rem)] sm:w-full"
            style={{
              clipPath:
                'polygon(7% 8%, 32% 2%, 30% 19%, 56% 8%, 58% 31%, 82% 20%, 22% 52%, 98% 24%, 81% 54%, 52% 99%, 71% 5%)'
            }}
          />
        </div>
        <div className="bg-slate-950 text-gray-200 bg-opacity-20 border-r-[1px] border-opacity-10 border-gray-200">
          <div className="relative pb-10 pl-10 mt-5">
            <a
              href="https://github.com/pricklywiggles/ui-nuggets"
              className="absolute right-5 top-2 border-[1px] border-gray-400 rounded-full"
            >
              <Image
                className=" text-white w-6 "
                src="/images/github.svg"
                width={500}
                height={500}
                alt="Github logo"
              />
            </a>
            <div className="text-blue-400 w-fit text-6xl font-extrabold scale-x-110">
              UI
            </div>
            <div
              className={`${dafoe.className} absolute text-yellow-500 text-5xl top-6 left-8 -rotate-12`}
            >
              Nuggets
            </div>
          </div>
          <Nav />
        </div>
        <main>
          {children}
          <Credits />
        </main>
      </body>
    </html>
  );
}
