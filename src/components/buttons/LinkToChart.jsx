import Link from "next/link";

export default function LinkToChart() {
    return (
        <Link
            href="/chart/test"
            className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20 m-5"
        >
            차트 보러 가기
        </Link>
    )
}
