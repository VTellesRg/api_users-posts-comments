
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { Posts, PostsSchema } from './entities/post.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Posts.name, schema: PostsSchema }])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}