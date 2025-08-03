import { ApiProperty } from "@nestjs/swagger";
import { $Enums, Appointment } from "generated/prisma";
import { DoctorEntity } from "src/doctors/entities/doctor.entity";
import { MedicalRecordEntity } from "src/medical-records/entities/medical-record.entity";

export class AppointmentDetailInPatient implements Appointment {
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
  doctor: DoctorEntity

  @ApiProperty()
  medicalRecord: MedicalRecordEntity
}