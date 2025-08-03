import { ApiProperty } from "@nestjs/swagger";
import { Doctor } from "generated/prisma";
import { AppointmentDetailInDoctor } from "./appointment-detail-in-doctor.entity";
import { Type } from "class-transformer";

export class DoctorDetailEntity implements Doctor {
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

  @ApiProperty({ type: [AppointmentDetailInDoctor] })
  @Type(() => AppointmentDetailInDoctor)
  appointments: AppointmentDetailInDoctor[]
}
