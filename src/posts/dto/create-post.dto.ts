import { ApiProperty } from '@nestjs/swagger'
import { Exclude } from 'class-transformer'

export class CreatePostDto {
  @ApiProperty({
    default: 'Test Post',
  })
  title: string

  @ApiProperty({
    default: 'Hello this is my first Post',
  })
  body: string

  @ApiProperty({
    default: 'Space',
  })
  theme: string

  @Exclude()
  createdAt: Date
}
