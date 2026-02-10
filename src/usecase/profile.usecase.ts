import { ProfileRepository } from "../infrastructure/repositories/profile.repository.static";

export class ProfileUseCase {
  constructor(private readonly repo: ProfileRepository) {}

  execute() {
    return this.repo.getProfile();
  }
}
