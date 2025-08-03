import { ApiProperty } from "@nestjs/swagger";
import { $Enums, Appointment } from "generated/prisma";

export class AppointmentEntity implements Appointment {
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
}
