import { ApiProperty } from "@nestjs/swagger";
import { Doctor } from "generated/prisma";

export class DoctorEntity implements Doctor {
  @ApiProperty()
  id: number;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string

  @ApiProperty()
  password: string

  @ApiProperty()
  specialty: string;

  @ApiProperty()
  experience: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
