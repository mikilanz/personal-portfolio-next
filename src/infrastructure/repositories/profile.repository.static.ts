import { ProfileInterface } from "../../domain/interface/profile.interface";
import { Profile } from "../../domain/entities/profile.entity";
import { PROFILE_DATA } from "../static/profile.static";

export class ProfileRepository implements ProfileInterface {
  getProfile(): Profile {
    return new Profile(
      PROFILE_DATA.name,
      PROFILE_DATA.role,
      PROFILE_DATA.bio
    );
  }
}
