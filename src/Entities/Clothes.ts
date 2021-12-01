import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType} from "type-graphql";

export enum ColourType {
    WHITE = "white",
    RED = "red",
    YELLOW = "yellow",
    PURPLE = "purple"
}


@Entity("clothes", { schema: "mbuya_test" })
@ObjectType()
export class Clothes extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id!: number;

  @Column({
    type: "enum",
    enum: ColourType,
    default: ColourType.WHITE
   })
colour!: ColourType;

@Column("varchar", { name: "name", length: 255 })
name!: string;

@Column("varchar", { name: "description", length: 255 })
image!: string;
  
}
