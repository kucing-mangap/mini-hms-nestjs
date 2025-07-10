import { ApiProperty } from "@nestjs/swagger";
import { Patient } from "generated/prisma";

export class PatientEntity implements Patient {
  @ApiProperty()
  id: number;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;
  
  @ApiProperty()
  password: string;
  
  @ApiProperty({ required: false, nullable: true })
  phone: string | null;

  @ApiProperty()
  dateOfBirth: Date;

  @ApiProperty()
  medicalHistory: string;

  @ApiProperty()
  allergies: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
