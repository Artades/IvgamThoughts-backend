import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm'

@Entity('posts')
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  body: string

  @Column()
  theme: string

  @CreateDateColumn()
  createdAt: Date
}
