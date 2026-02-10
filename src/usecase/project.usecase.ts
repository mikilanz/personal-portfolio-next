import { ProjectRepository } from "../domain/repositories/project.repository";

export class ProjectsUseCase {
  constructor(private repo: ProjectRepository) {}

  execute() {
    return this.repo.getProjects();
  }
}
