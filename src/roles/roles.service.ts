import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from "./Dto/create-role.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Role } from "./roles.model";

@Injectable()
export class RolesService {

  constructor(
    @InjectModel(Role) private roleRepo: typeof Role
  ) {}

  async createRole(dto: CreateRoleDto) {
    return await this.roleRepo.create(dto);
  }

  async getRoleByValue(values: string) {
    return await this.roleRepo.findOne({
      where: {
        values
      }
    })
  }
}
