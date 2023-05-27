import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm'

@Entity('images')
export class ImageEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  creator: string

  @Column()
  imageUrl: string

  @Column()
  genre: string

  @Column()
  isDownloaded: boolean

  @CreateDateColumn()
  createdAt: Date
}

