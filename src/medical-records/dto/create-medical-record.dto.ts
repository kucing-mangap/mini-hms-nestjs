import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMedicalRecordDto {
  @IsNumber()  
  @IsNotEmpty()
  @ApiProperty()
  appointmentId: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  doctorId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  recordNotes: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  diagnosis: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  prescribedMedication: string;
}
