
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {

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

export const PostSchema = SchemaFactory.createForClass(Post);

