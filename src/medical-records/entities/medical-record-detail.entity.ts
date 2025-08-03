import { ApiProperty } from "@nestjs/swagger";
import { MedicalRecord } from "generated/prisma";
import { AppointmentDetailInMedicalRecord } from "./appointment-detail-in-medical-record.entity";
import { Type } from "class-transformer";

export class MedicalRecordDetailEntity implements MedicalRecord {
  @ApiProperty()
  id: number;

  @ApiProperty()
  appointmentId: number;

  @ApiProperty()
  doctorId: number;

  @ApiProperty()
  recordNotes: string;

  @ApiProperty()
  diagnosis: string;

  @ApiProperty()
  prescribedMedication: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ type: [AppointmentDetailInMedicalRecord] })
  @Type(() => AppointmentDetailInMedicalRecord)
  appointments: AppointmentDetailInMedicalRecord[]
}