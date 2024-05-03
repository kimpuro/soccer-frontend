import TabProvider from "@/app/(test)/context/TabProvider";
import TestPost from "@/app/(test)/context/TestPost";


export default function Home() {
    return (
        <TabProvider>
            <TestPost />
        </TabProvider>
    );
}