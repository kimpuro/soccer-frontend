import Link from "next/link";

export default function LinkButton() {
    return (
            <Link
                href="/test"
                className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20 absolute"
            >
                테스트 하러 가기
            </Link>
    )
}
