import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity} from 'typeorm'
import { Field, Int } from 'type-graphql'

@Entity()
export class Product extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column()
  name!: string;

  @Field(() => Int)
  @Column("int", {default: 0})
  quantity!: number;

  @Field(() => String)
  @CreateDateColumn({type: 'timestamp'})
  createAt!: string
}