import { StaticProjectRepository } from "@/infrastructure/repositories/project.repository.static";
import { Container } from "@/shared/ui/Container";
import { ProjectCard } from "@/shared/ui/ProjectCard";
import { Section } from "@/shared/ui/Section";
import { ProjectsUseCase } from "@/usecase/project.usecase";

export default function ProjectsPage() {
  const projects = new ProjectsUseCase(
    new StaticProjectRepository()
  ).execute();

  return (
    <Container>
      <Section title="Projects">
        <div className="grid gap-6 sm:grid-cols-2">
            
          {projects.map(project => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tech={project.tech}
              url={project.url}
            />
          ))}
        </div>
      </Section>
    </Container>
  );
}
