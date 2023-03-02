import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateStudentDto } from "../users/dto/create-student.dto";
import { AuthService } from "./auth.service";

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {}

  @Post('/login')
  login(@Body() userDto: CreateStudentDto) {
    return this.authService.login(userDto);
  }

  @Post('/registration')
  registration(@Body() userDto: CreateStudentDto) {
    return this.authService.registration(userDto);
  }
}
