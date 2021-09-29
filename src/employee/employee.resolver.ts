import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateEmployeeDTO } from './dto/create-employee.input';
import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private employeeService: EmployeeService) {}

  @Query(() => [Employee], { name: 'getAllEmployees' })
  findAll() {
    return this.employeeService.findAll();
  }

  @Mutation(() => Employee, { name: 'createEmployee'})
  create(@Args('employee') employee: CreateEmployeeDTO){
    return this.employeeService.create(employee)
  }
}
