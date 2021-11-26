import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType} from "type-graphql";

export enum ColourType {
    WHITE = "WHITE",
    RED = "red",
    YELLOW = "yellow",
    PURPLE = "purple"
}


@Entity("cloth", { schema: "mbuya_test" })
@ObjectType()
export class Cloth extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id!: number;

  @Column({
    type: "enum",
    enum: ColourType,
    default: ColourType.WHITE
})
colour!: ColourType;
  
}
