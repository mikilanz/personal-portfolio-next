import { Project } from "../entities/project.entity";

export interface ProjectInterface {
  getProjects(): Project[];
}
