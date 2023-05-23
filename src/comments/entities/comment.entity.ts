
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
    @Prop()
    post_id: string;

    @Prop()
    user: string;

    @Prop()
    comment: string;
    
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
