<<<<<<< HEAD
'use client'
import { CircleHelp, MoveLeft } from "lucide-react"
import Body from "@/components/ui/body";
import React, { useState } from 'react';
import Stepper from '@/components/ui/stepper'



export default function Home() {
  const question = {
    name1: 'Etes-vous particulier ?',
    name2: 'Possedez-vous une parcelle?',
    name3: 'Exploitez-vous une parcelle',
  }

  return (
    <main className="h-screen w- bg-[url('/nat-7.jpg')] bg-gradient-to-r from-gray-400 to-green-900 bg-no-repeat bg-cover bg-center overflow-hidden">
      <div className="flex flex-row item-center my-6 text-white	">
        <h1 className=" flex flex-row mx-8 gap-x-3"> <MoveLeft /> Retour</h1>
      </div>

      <div className="flex justify-center items-center md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-teal-2100">
        <div className="mb-10 space-y-5">
          < Stepper />
          {/* <div className='flex justify-center items-center'>
            <ul className="flex flex-row gap-x-3 ">
              <li>
                <div className="flex item-center justify-center">
                  <span className="size-[46px] flex justify-center items-center flex-shrink-0 size-[46px] rounded-full border-4 border-green-100 bg-green-200 text-white border-green-900 bg-green-800 text-white">
                    <CircleHelp />
                  </span>
                  <div className="ms-2 w-36 h-px bg-gray-200 mt-5 place-content-center"></div>
                </div>
                <div className="mt-3 block text-md text-white">
                  Questions
                </div>
              </li>
              <li>
                <div className="flex flex-row item-center">
                  <span className="size-[46px] flex justify-center items-center flex-shrink-0 size-[46px] rounded-full border-4 border-green-100 bg-green-200 text-white border-green-900 bg-green-800 text-white">
                    <CircleHelp />
                  </span>
                  <div className="ms-2 w-36 h-px bg-gray-200 mt-5 place-content-center"></div>
                </div>
                <div className="mt-3 block text-md text-white ">
                  Calcul du montant
                </div>
              </li>
              <li>
                <div className="min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle">
                  <span className="size-[46px] flex justify-center items-center flex-shrink-0 size-[46px] rounded-full border-4 border-green-100 bg-green-200 text-white border-green-900 bg-green-800 text-white">
                    <CircleHelp />
                  </span>
                  <div className="ms-2 w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 block text-md text-white ">
                  Result
                </div>
              </li>
            </ul>
          </div> */}
          <div>
            <Body />
          </div>
=======
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
>>>>>>> eff00e1a662265e69e14548b5e3672e3c54f63a9
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
