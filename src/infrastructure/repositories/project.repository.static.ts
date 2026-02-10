import { Project } from "@/domain/entities/project.entity";
import { ProjectRepository } from "../../domain/repositories/project.repository";
import { LIST_PROJECTS } from "../static/project.static";

export class StaticProjectRepository implements ProjectRepository {
  getProjects(): Project[] {
    return LIST_PROJECTS.map(p => new Project(p.title, p.tech, p.description, p.url));
  }
}
