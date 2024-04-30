import {soccerTestGet} from "@/services/searchPost";

export default async function SoccerTestResult({params}){
    const res = await soccerTestGet(params.id);

    return (
        <>
            <div className="bg-gray-900 h-dvh w-dvw">
            <h1 className="text-white">{params.id}번</h1>
            <pre className="text-white">{JSON.stringify(res, null, 2)}</pre>
            </div>
        </>

    )
}