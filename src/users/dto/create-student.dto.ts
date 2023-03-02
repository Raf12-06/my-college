import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateStudentDto {
  @IsString({ message: 'must be a string' })
  @ApiProperty({ example: 'Иван', description: 'Имя студента' })
  readonly first_name: string;

  @IsString({ message: 'must be a string' })
  @ApiProperty({ example: 'Иван', description: 'Имя студента' })
  readonly second_name: string;

  @IsString({ message: 'must be a string' })
  @ApiProperty({ example: 'Иван', description: 'Имя студента' })
  @IsEmail()
  readonly email: string;

  @IsString({ message: 'must be a string' })
  @ApiProperty({ example: 'Иван', description: 'Имя студента' })
  readonly phone: string;

  @IsString({ message: 'must be a string' })
  @ApiProperty({ example: 'Иван', description: 'Имя студента' })
  @Length(4, 10, { message: 'aaaaaa' })
  readonly password: string;

  @IsString({ message: 'must be a string' })
  @ApiProperty({ example: 'Иван', description: 'Имя студента' })
  readonly birthday: string;
}
