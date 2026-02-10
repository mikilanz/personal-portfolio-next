import { ProjectRepository } from "@/infrastructure/repositories/project.repository.static";

export class ProjectsUseCase {
  constructor(private repo: ProjectRepository) {}

  execute() {
    return this.repo.getProjects();
  }
}
