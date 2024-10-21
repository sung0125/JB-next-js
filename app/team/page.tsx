import Image from "next/image";

interface TeamMemberProps {
    name: string;
    image: string;
    github: string;
    portfolio: string;
}

const TeamMember = ({ name, image, github, portfolio }: TeamMemberProps) => (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
        <Image src={image} alt={name} width={200} height={200} className="rounded-full mb-4" />
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <a href={github} className="text-blue-500 hover:underline mb-1">
            GitHub
        </a>
        <a href={portfolio} className="text-green-500 hover:underline">
            Portfolio
        </a>
    </div>
);

const TeamPage = () => {
    const teamMembers: TeamMemberProps[] = [
        {
            name: "이지훈",
            image: "/지훈.jpg",
            github: "https://github.com/Hoodscp",
            portfolio: "https://2024-2-jbu-portfolio.vercel.app/",
        },
        {
            name: "홍정현",
            image: "/img3.jpg",
            github: "https://github.com/anon418",
            portfolio: "https://int-dusky.vercel.app/",
        },
        {
            name: "고은이",
            image: "/profile.jpg",
            github: "https://github.com/goeuni",
            portfolio: "https://portfolio-goeunis-projects.vercel.app/",
        },
    ];

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold text-center mb-8">우리 팀 소개</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                    <TeamMember key={index} {...member} />
                ))}
            </div>
        </div>
    );
};

export default TeamPage;
