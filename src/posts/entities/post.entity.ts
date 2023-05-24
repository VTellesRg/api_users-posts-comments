
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PostsDocument = HydratedDocument<Posts>;

@Schema()
export class Posts {

    @Prop()
    user: string;

    @Prop()
    description: string;

    @Prop()
    url_imagem: string;


}

export const PostsSchema = SchemaFactory.createForClass(Posts);

