import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../users/users.model";
import { UserRole } from "./user-roles.model";

interface RoleCreatingAttrs {
  value: string;
  description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreatingAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный номер' })
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({ example: 'ADMIN', description: 'Роль' })
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  values: string;

  @ApiProperty({ example: 'Админимстратор', description: 'Описание роли' })
  @Column({type: DataType.STRING, allowNull: false})
  description: string;

  @BelongsToMany(() => User, () => UserRole)
  users: User[]
}
