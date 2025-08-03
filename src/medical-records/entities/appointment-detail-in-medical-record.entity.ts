import { ApiProperty } from "@nestjs/swagger";
import { $Enums, Appointment } from "generated/prisma";
import { DoctorEntity } from "src/doctors/entities/doctor.entity";
import { PatientEntity } from "src/patients/entities/patient.entity";

export class AppointmentDetailInMedicalRecord implements Appointment {
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

    @ApiProperty()
    doctors: DoctorEntity
}