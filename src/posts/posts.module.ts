import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PostEntity } from './entities/post.entity'
import { PostService } from './posts.service'
import { PostController } from './posts.controller'

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity])],
  providers: [PostService],
  controllers: [PostController],
})
export class PostsModule {}
