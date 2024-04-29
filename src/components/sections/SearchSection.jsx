'use client';
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import SearchSelect from "@/components/forms/SearchSelect";

const people = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
    { id: 7, name: 'Caroline Schultz' },
    { id: 8, name: 'Mason Heaney' },
    { id: 9, name: 'Claudie Smitham' },
    { id: 10, name: 'Emil Schaefer' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function SearchSection() {
    const [selected, setSelected] = useState(people[0])
    return (
        <div className="fixed isolate overflow-hidden bg-gray-900 h-dvh w-dvw flex items-center justify-center">
            <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8 w-full max-w-lg">
                <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Search anything!
                </h2>
                <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
                    아무거나 검색 해보세요!
                </p>
                <form className="mx-auto mt-10 flex max-w-md gap-x-4 ">

                    <label htmlFor="search" className="sr-only">
                        검색창
                    </label>
                    <input
                        id="search"
                        name="search"
                        type="search"
                        required
                        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                        placeholder="무엇을 검색할까요?"
                    />
                    <button
                        type="submit"
                        className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        검색하기
                    </button>
                </form>
                <SearchSelect />

                <svg
                    viewBox="0 0 1024 1024"
                    className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
                    aria-hidden="true"
                >
                    <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                            fillOpacity="0.7"/>
                    <defs>
                        <radialGradient
                            id="759c1415-0410-454c-8f7c-9a820de03641"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(512 512) rotate(90) scale(512)"
                        >
                            <stop stopColor="#7775D6"/>
                            <stop offset={1} stopColor="#E935C1" stopOpacity={0}/>
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </div>
    )
}
