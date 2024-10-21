import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center gap-10">
            <h1 className="text-4xl font-bold text-gray-800">Welcome to my Portfolio!!</h1>
            <h2 className="text-2xl font-bold text-gray-800">
                <a
                    href="https://js-web-team-sb.vercel.app/"
                    className="font-semibold  hover:text-blue-500 transition-colors"
                >
                    About me
                </a>
            </h2>
            <div className="flex flex-row items-center gap-10 w-full max-w-4xl p-4 border rounded-lg shadow-md">
                <div className="flex-shrink-0 w-1/3 pr-8 ml-20">
                    <Image
                        src="/2.jpg"
                        alt="My Photo"
                        width={500}
                        height={500}
                        className="w-full h-auto rounded-full"
                    />
                </div>
                <div className="flex flex-col ml-20">
                    <span className="text-lg font-semibold">이름: 전성배</span>
                    <span className="text-lg">학번: 92451097</span>
                    <span className="text-lg">전공: 정보보호학전공</span>
                </div>
            </div>
        </div>
    );
}
