import { Injectable } from '@nestjs/common';
import { User } from "./users.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateStudentDto } from "./dto/create-student.dto";
import { RolesService } from "../roles/roles.service";

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User)
    private userRepository: typeof User,
    private roleService: RolesService
  ) {}

  async createStudent(dto: CreateStudentDto): Promise<User> {
    const user = await this.userRepository.create(dto);
    const role = await this.roleService.getRoleByValue('USER');
    await user.$set('roles', [role.id]);
    user.roles = [role];
    return user;
  }

  async getAllStudents(): Promise<User[]> {
    return await this.userRepository.findAll({ include: { all: true } });
  }

  async getUserByEmail(email: string) {
    return await this.userRepository.findOne({
      where: { email },
      include: { all: true },
    })
  }
}
