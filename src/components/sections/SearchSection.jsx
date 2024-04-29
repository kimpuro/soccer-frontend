'use client';
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import SearchSelect from "@/components/forms/SearchSelect";

const searchOptions = [
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
    const [selected, setSelected] = useState(searchOptions[0])
    const [searchParams, setSearchParams] = useState('');

    // 폼 제출 시 호출되는 함수
    const handleSubmit = (event) => {
        event.preventDefault();  // 폼의 기본 제출 동작 방지
        console.log('검색어:', searchParams);  // 입력된 검색어 로그
        console.log('선택된 옵션:', selected.name);  // 선택된 옵션의 이름 로그
    };

    // 검색 입력 값 변경 시 호출되는 함수
    const handleInputChange = (event) => {
        setSearchParams(event.target.value);
        console.log('검색어:', event.target.value);
        console.log('선택된 옵션:', selected.name);
    };


    return (
        <div className="fixed isolate overflow-hidden bg-gray-900 h-dvh w-dvw flex items-center justify-center">
            <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8 w-full max-w-lg">
                <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Search anything!
                </h2>
                <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
                    아무거나 검색 해보세요!
                </p>
                <form className="mx-auto mt-10 flex max-w-md gap-x-4" onSubmit={handleSubmit}>

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
                        onChange={handleInputChange}
                    />
                    <button
                        type="submit"
                        className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        검색하기
                    </button>
                </form>
                <Listbox value={selected} onChange={setSelected}>
                    {({ open }) => (
                        <>
                            <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">검색 분류</Listbox.Label>
                            <div className="relative mt-2">
                                <Listbox.Button className="w-full relative cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 ">
                                    <span className="block truncate">{selected.name}</span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
                                </Listbox.Button>

                                <Transition
                                    show={open}
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {searchOptions.map((op) => (
                                            <Listbox.Option
                                                key={op.id}
                                                className={({ active }) =>
                                                    classNames(
                                                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                                        'relative cursor-default select-none py-2 pl-8 pr-4'
                                                    )
                                                }
                                                value={op}
                                            >
                                                {({ selected, active }) => (
                                                    <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {op.name}
                        </span>

                                                        {selected ? (
                                                            <span
                                                                className={classNames(
                                                                    active ? 'text-white' : 'text-indigo-600',
                                                                    'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                                                )}
                                                            >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </>
                    )}
                </Listbox>

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
