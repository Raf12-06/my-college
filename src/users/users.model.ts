import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../roles/roles.model";
import { UserRole } from "../roles/user-roles.model";

interface UserCreatingAttrs {
  first_name: string;
  second_name: string;
  email: string;
  phone: string;
  password: string;
  birthday: string
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreatingAttrs> {

  @ApiProperty({ example: '1', description: 'Уникальный номер' })
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({ example: 'Иван', description: 'Имя студента' })
  @Column({type: DataType.STRING, allowNull: false})
  first_name: string;

  @ApiProperty({ example: 'Иванов', description: 'Фамилия студента' })
  @Column({type: DataType.STRING, allowNull: false})
  second_name: string;

  @ApiProperty({ example: 'Иванович', description: 'Отчество студента' })
  @Column({type: DataType.STRING})
  third_name: string;

  @ApiProperty({ example: 'ivan@mail.ru', description: 'Email студента' })
  @Column({type: DataType.STRING, allowNull: false, unique: true})
  email: string;

  @ApiProperty({ example: '*****', description: 'Пароль студента' })
  @Column({type: DataType.STRING, allowNull: false})
  password: string;

  @ApiProperty({ example: '89998889955', description: 'Телефон студента' })
  @Column({type: DataType.STRING, allowNull: false, unique: true})
  phone: string;

  @ApiProperty({ example: '2000-01-01', description: 'Дата рождения студента' })
  @Column({type: DataType.DATE, allowNull: false})
  birthday: string;

  @ApiProperty({ example: 'true', description: 'Флаг бана студента' })
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  is_banned: boolean;

  @BelongsToMany(() => Role, () => UserRole)
  roles: Role[]
}
