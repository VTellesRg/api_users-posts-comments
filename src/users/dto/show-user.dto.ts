import { Expose, Exclude } from 'class-transformer';

export class ShowUserDto {
    @Expose()
    name: string;

    @Expose()
    user: string;

    @Expose()
    email: string;

    @Expose()
    profile_photo: string;

}