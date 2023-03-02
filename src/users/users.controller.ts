import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateStudentDto } from "./dto/create-student.dto";
import { UsersService } from "./users.service";
import { User } from "./users.model";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('Студены')
@Controller('users')
export class UsersController {

  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: 'Создание студента' })
  @ApiResponse({ status: 201, type: User })
  @Post()
  create(@Body() userDto: CreateStudentDto): Promise<User> {
    return this.userService.createStudent(userDto);
  }

  @ApiOperation({ summary: 'Получение всех студентов' })
  @ApiResponse({ status: 200, type: [User] })
  @Get()
  getAll() {
    return this.userService.getAllStudents();
  }
}
