import { ExperienceRepository } from "@/infrastructure/repositories/experience.repository.static";
import { Container } from "@/shared/ui/Container";
import { Section } from "@/shared/ui/Section";
import { ExperienceUseCase } from "@/usecase/experience.usecase";

export default function ExperiencePage() {
  const experiences = new ExperienceUseCase(
    new ExperienceRepository()
  ).execute();

  return (
    <Container>
      <Section title="Experience">
        <div className="grid gap-6 sm:grid-cols-2">
        </div>
      </Section>
    </Container>
  );
}
