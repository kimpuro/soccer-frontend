import {searchTest} from "@/services/searchPost";

export default async function QueryTest(){
    const res = await searchTest("player", "손흥민");
    console.log(res);

    return (
        <>
            <div className="bg-gray-900 h-full w-full">
            <h1 className="text-white">Query Test</h1>
            <pre className="text-white">{JSON.stringify(res, null, 2)}</pre>
            </div>
            <div className="bg-gray-900 h-dvh"></div>
        </>

    )
}