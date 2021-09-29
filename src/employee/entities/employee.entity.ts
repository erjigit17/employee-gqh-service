import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Employee {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  @Field()
  firstName: string;
  @Field()
  @Column()
  lastName: string;
  @Field()
  @Column()
  description: string;
  @Field({ nullable: true })
  @Column({ nullable: true })
  city: string;
}
