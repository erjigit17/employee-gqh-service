import { CreateEmployeeDTO } from './create-employee.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEmployeeDTO extends PartialType(CreateEmployeeDTO) {
  @Field(() => Int)
  id: string;
}
