
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {

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

export const CommentSchema = SchemaFactory.createForClass(Comment);
