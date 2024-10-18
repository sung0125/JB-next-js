import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-gray-100 shadow-md py-6">
            <nav className="container mx-auto flex justify-between items-center">
                <div>
                    <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-500 transition-colors">
                        Myportfolio
                    </Link>
                </div>

                <ul className="flex space-x-8">
                    <li>
                        <Link
                            href="/firstsemester"
                            className="text-gray-700 font-semibold text-lg hover:text-blue-500 transition-colors"
                        >
                            1학기 수업
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/repos"
                            className="text-gray-700 font-semibold text-lg hover:text-blue-500 transition-colors"
                        >
                            Repository
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/team"
                            className="text-gray-700 font-semibold text-lg hover:text-blue-500 transition-colors"
                        >
                            팀원소개
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
