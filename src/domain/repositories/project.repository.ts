import { Project } from "../entities/project.entity";

export interface ProjectRepository {
  getProjects(): Project[];
}
