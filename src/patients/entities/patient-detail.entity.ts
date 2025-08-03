import { ApiProperty } from "@nestjs/swagger";
import { Patient } from "generated/prisma";
import { AppointmentDetailInPatient } from "./appointment-detail-in-patient.entity";
import { Type } from "class-transformer";

export class PatientDetailEntity implements Patient {
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
  
  @ApiProperty({ type: String, required: false, nullable: true })
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

  @ApiProperty({ type: [AppointmentDetailInPatient] })
  @Type(() => AppointmentDetailInPatient)
  appointments: AppointmentDetailInPatient[]
}