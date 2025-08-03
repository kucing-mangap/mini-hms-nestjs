import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { $Enums } from "generated/prisma";

export class CreateAppointmentDto {
  @IsNumber()
  @ApiProperty()
  patientId: number

  @IsNumber()
  @ApiProperty()
  doctorId: number
  
  @IsString()
  @ApiProperty()
  appointmentDate: Date

  @IsString()
  @ApiProperty()
  appointmentType: $Enums.AppointmentType;

  @IsString()
  @ApiProperty()
  appointmentStatus: $Enums.AppointmentStatus;
}
