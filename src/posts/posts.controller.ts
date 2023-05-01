import { Controller, Post, Put, Body, Param, Get } from '@nestjs/common'
import { PostService } from './posts.service'
import { PostEntity } from './entities/post.entity'
import {  ApiTags } from '@nestjs/swagger'
import { CreatePostDto } from './dto/create-post.dto'
import { FindOneOptions } from 'typeorm'

@Controller('posts')
@ApiTags('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @Post()
  async create(@Body() dto: CreatePostDto) {
    return await this.postService.create(dto)
  }
  @Get()
  async findAll(): Promise<PostEntity[]> {
    return this.postService.getPosts()
  }

  @Get(':id')
  async getPostById(@Param('id') id: number): Promise<PostEntity> {
    return this.postService.getPostById(id)
  }
}
