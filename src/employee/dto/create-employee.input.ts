import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateEmployeeDTO {
  @Field()
  id: string;
  @Field()
  firstName: string;
  @Field()
  lastName: string;
  @Field()
  description: string;
  @Field({ nullable: true })
  city: string;
}
