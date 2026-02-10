import { Experience } from "@/domain/entities/experience.entity";
import { ExperienceInterface } from "@/domain/interface/experience.interface";
import { LIST_EXPERIENCE } from "../static/experience.static";


export class ExperienceRepository implements ExperienceInterface {
  getExperiences(): Experience[] {
    return LIST_EXPERIENCE.map(p => new Experience(p.company, p.role, p.duration, p.description, p.skills));
  }
}
