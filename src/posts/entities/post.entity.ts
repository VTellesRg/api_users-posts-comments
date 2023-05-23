
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PostsDocument = HydratedDocument<Posts>;

@Schema()
export class Posts {

    @Prop()
    name: string;

    @Prop()
    user: string;

    @Prop()
    birthdate: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

}

export const PostsSchema = SchemaFactory.createForClass(Posts);

