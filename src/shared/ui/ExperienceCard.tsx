

export function ExperienceCard({
    company,
    role,
    duration,
    description,
    skills
}: {
    company: string;
    role: string;
    duration: string;
    description: string;
    skills: string[];
}) {
    return (
        <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-semibold">{role} at {company}</h3>
            <p className="text-sm text-neutral-500 mb-4">{duration}</p>
            <p className="text-neutral-700 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                    <span key={skill} className="bg-neutral-200 text-neutral-800 text-xs font-medium px-2.5 py-0.5 rounded">{skill}</span>
                ))}
            </div>
        </div>
    );
}