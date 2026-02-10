import { StaticProfileRepository } from "../infrastructure/repositories/profile.repository.static";

export class ProfileUseCase {
  constructor(private readonly repo: StaticProfileRepository) {}

  execute() {
    return this.repo.getProfile();
  }
}
