import { ApiProperty } from "@nestjs/swagger";
import { Admin } from "generated/prisma";

export class AdminEntity implements Admin {
  @ApiProperty()
  id: number;

  @ApiProperty()
  firstName: string;

  @ApiProperty({ type: String, required: false, nullable: true })
  lastName: string | null;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
