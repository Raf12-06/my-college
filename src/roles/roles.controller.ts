import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { RolesService } from "./roles.service";
import { CreateRoleDto } from "./Dto/create-role.dto";
import { Role } from "./roles.model";

@Controller('roles')
export class RolesController {

  constructor(
    private roleService: RolesService
  ) {}

  @Post()
  create(@Body() dto: CreateRoleDto): Promise<Role> {
    return this.roleService.createRole(dto);
  }

  @Get('/:values')
  getByValue(@Param('values') values: string): Promise<Role> {
    return this.roleService.getRoleByValue(values);
  }
}
