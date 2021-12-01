import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType} from "type-graphql";

@Entity("user", { schema: "mbuya_test" })
@ObjectType()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id!: number;

  @Column("varchar", { name: "name", length: 255 })
  name!: string;

  @Column("varchar", { name: "username", length: 255 })
  username!: string;

  @Column("varchar", { name: "login", length: 255 })
  login!: string;

  @Column("varchar", { name: "password", length: 255 })
  password!: string;
  
}
