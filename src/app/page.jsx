import MainSection from "@/components/sections/MainSection";
import LinkToTest from "@/components/buttons/LinkToTest";
import LinkToChart from "@/components/buttons/LinkToChart";

export default function Home() {
    return (
        <>
            <MainSection/>
            <div className="absolute m-5">
                <LinkToTest/>
                <LinkToChart/>
            </div>
        </>
    );
}
