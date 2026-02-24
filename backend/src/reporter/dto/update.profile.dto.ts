import { Address } from '../interfaces/address.interface';
export class UpdateProfileDTO {
  name: string;
  email: string;
  phone: string;
  bio: string;
  address: Address;
}
