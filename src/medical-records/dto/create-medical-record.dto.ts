import { IsNumber, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateMedicalRecordDto {
  @IsNumber()  
  @IsNotEmpty()
  @ApiProperty({ description: 'ID of the appointment' })
  appointmentId: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'ID of the doctor' })
  doctorId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Notes from a patient (or complaints from a patient)', example: 'Patient reported severe headaches' })
  recordNotes: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Diagnosis based on "record notes"', example: 'Migraine' })
  diagnosis: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Prescribed medication for the patient', example: 'Ibuprofen, Paracetamol, etc.' })
  prescribedMedication: string;
}
