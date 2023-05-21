import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreatePostDto } from './dto/create-post.dto'
import { PostEntity } from './entities/post.entity'

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
  ) {}

  async create(dto: CreatePostDto) {
    return await this.postRepository.save(dto)
  }
  async getPosts(): Promise<PostEntity[]> {
    return this.postRepository.find()
  }
  async getPostById(id: number): Promise<PostEntity> {
    return this.postRepository.findOne({ where: { id } })
  }

  
  async deletePostById(id: number): Promise<PostEntity> {
    const postToDelete = await this.postRepository.findOne({ where: { id } })
    if (!postToDelete) {
      throw new NotFoundException(`Post with ID ${id} not found`)
    }
    await this.postRepository.delete(id)
    return postToDelete
  }
}
