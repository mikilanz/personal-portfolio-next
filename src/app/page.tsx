import { ProfileUseCase } from "../usecase/profile.usecase";
import { ProfileRepository } from "../infrastructure/repositories/profile.repository.static";
import { Button } from "@/shared/ui/Button";
import { Container } from "@/shared/ui/Container";
import { Section } from "@/shared/ui/Section";

export default function HomePage() {
  const profile = new ProfileUseCase(
    new ProfileRepository()
  ).execute();

  return (
    <Container>
      <section className="py-24">
        <h1 className="text-4xl font-bold tracking-tight">
          {profile.name}
        </h1>
        <p className="mt-3 text-xl text-neutral-600">
          {profile.role}
        </p>
        <p className="mt-6 max-w-xl text-neutral-700">
          {profile.bio}
        </p>

        <div className="mt-8 flex gap-4">
          <Button href="/projects">View Projects</Button>
          <Button href="https://github.com/mikilanz" >
            GitHub
          </Button>
          <Button href="https://www.linkedin.com/in/joimanuel" >
            LinkedIn
          </Button>
        </div>
      </section>

      <Section title="What I Do">
        <ul className="grid gap-4 text-neutral-700 sm:grid-cols-2">
          <li>• Backend system design</li>
          <li>• API & microservices</li>
          <li>• Clean Architecture</li>
          <li>• Remote team collaboration</li>
        </ul>
      </Section>
    </Container>
  );
}
