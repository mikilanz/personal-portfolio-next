import { Project } from "@/domain/entities/project.entity";
import { ProjectInterface } from "../../domain/interface/project.interface";
import { LIST_PROJECTS } from "../static/project.static";

export class ProjectRepository implements ProjectInterface {
  getProjects(): Project[] {
    return LIST_PROJECTS.map(p => new Project(p.title, p.tech, p.description, p.url));
  }
}
