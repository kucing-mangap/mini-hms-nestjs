import { ApiProperty } from "@nestjs/swagger";
import { MedicalRecord } from "generated/prisma";

export class MedicalRecordEntity implements MedicalRecord {
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
}
