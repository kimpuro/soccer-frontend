import {soccerTestGet} from "@/services/searchPost";

export default async function SoccerTestResult({params}){
    const res = await soccerTestGet(params.id);

    return (
        <>
            <h1>{params.id}번</h1>
            <pre>{JSON.stringify(res, null, 2)}</pre>
        </>

    )
}