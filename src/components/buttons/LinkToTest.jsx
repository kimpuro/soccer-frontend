import Link from "next/link";

export default function LinkToTest() {
    return (
            <Link
                href="/soccer/test"
                className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
            >
                테스트 하러 가기
            </Link>
    )
}
