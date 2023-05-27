import { Controller, Get, Post, Body} from '@nestjs/common';
import { ImagesService } from './images.service';
import { CreateImageDto } from './dto/create-image.dto';


@Controller('images')
export class ImagesController {
  constructor(private readonly imageService: ImagesService) {}

  @Post()
  async create(@Body() dto: CreateImageDto) {
    return await this.imageService.create(dto)
  }

  @Get()
  findAll() {
    return this.imageService.getImages()
  }
}
