import { ApiProperty } from '@nestjs/swagger'
import { Exclude } from 'class-transformer'

export class CreateImageDto {
  @ApiProperty({
    default: false,
  })
  isDownloaded: boolean

  @ApiProperty({
    default: 'Image Url',
  })
  imageUrl: string

  @ApiProperty({
    default: 'John Doe',
  })
  creator: string

  @ApiProperty({
    default: 'Travel',
  })
  genre: string

  @Exclude()
  createdAt: Date
}
