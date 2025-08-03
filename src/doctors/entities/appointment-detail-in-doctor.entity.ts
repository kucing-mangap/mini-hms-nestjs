import { Appointment } from "generated/prisma";
import { ApiProperty } from "@nestjs/swagger";
import { $Enums } from "generated/prisma";
import { PatientEntity } from "src/patients/entities/patient.entity";

export class AppointmentDetailInDoctor implements Appointment {
  @ApiProperty()
  id: number;

  @ApiProperty()
  patientId: number;

  @ApiProperty()
  doctorId: number;

  @ApiProperty()
  appointmentDate: Date;

  @ApiProperty()
  appointmentType: $Enums.AppointmentType;

  @ApiProperty()
  appointmentStatus: $Enums.AppointmentStatus;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  patients: PatientEntity
}