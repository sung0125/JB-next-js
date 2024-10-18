import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

const username = "sung0125";

// Repo 인터페이스를 정의
interface Repo {
    id: number;
    name: string;
    description: string | null;
    stargazers_count: number;
    forks_count: number;
    watchers_count: number; // 추가: 시청자 수를 포함
}

export default async function ReposPage() {
    const response = await fetch(`https://api.github.com/users/${username}/repos`, { next: { revalidate: 60 } });

    await new Promise((resolve) => setTimeout(resolve, 1000));
    const repos: Repo[] = await response.json(); // API 응답을 Repo[] 타입으로 지정

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">업로드한 GitHub </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {repos.map(
                    (
                        repo // 여기에서 repo 타입을 자동으로 인식
                    ) => (
                        <li key={repo.id} className="bg-gray-100 p-4 rounded-md">
                            <Link href={`/repos/${repo.name}`}>
                                <h3 className="text-xl font-bold">{repo.name}</h3>
                                <p>{repo.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="flex items-center gap-1">
                                        <FaStar /> {repo.stargazers_count}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <FaCodeBranch /> {repo.forks_count}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <FaEye /> {repo.watchers_count} {/* 시청자 수 */}
                                    </span>
                                </div>
                            </Link>
                        </li>
                    )
                )}
            </ul>
        </div>
    );
}
