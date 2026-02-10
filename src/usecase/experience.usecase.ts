import { ExperienceRepository } from "@/infrastructure/repositories/experience.repository.static";

export class ExperienceUseCase {
  constructor(private repo: ExperienceRepository) {}

  execute() {
    return this.repo.getExperiences();
  }
}
