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
        </div>
      </div>
    </main>
  )
}

