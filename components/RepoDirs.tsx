import Link from "next/link";
import { FaFolder } from "react-icons/fa";

interface RepoProps {
    name: string;
}

interface GitHubContent {
    path: string;
    type: string;
}

const RepoDirs: React.FC<RepoProps> = async ({ name }) => {
    const username = "sung0125";
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(`https://api.github.com/repos/${username}/${name}/contents`);
    const contents: GitHubContent[] = await response.json(); // API 응답 타입 지정
    const dirs = contents.filter((content) => content.type === "dir");

    return (
        <div className="mt-2 ">
            <h3 className="text-xl font-bold">Directories</h3>
            <ul>
                {dirs.map((dir) => (
                    <li key={dir.path} className="flex items-center">
                        <FaFolder />
                        <Link
                            className="underline"
                            href={`https://github.com/${username}/${name}/tree/master/${dir.path}`}
                        >
                            {dir.path}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RepoDirs;
