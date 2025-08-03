import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsISO8601, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreatePatientDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'First name of the patient' })
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Last name of the patient' })
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ description: 'Email of the patient' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty({ description: 'Password for the Patient account (min. length of 8)' })
  password: string

  @IsString()
  @IsOptional()
  @ApiProperty({ description: 'Phone number of the patient', type: String, required: false, nullable: true })
  phone?: string | null

  @IsString()
  @IsNotEmpty()
  @IsISO8601()
  @ApiProperty({ description: `Patient's date of birth in ISO8601 format`,  example: '1985-05-15T00:00:00.000Z' })
  dateOfBirth: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Medical history of the patient' })
  medicalHistory: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Allergies of the patient', example: 'Peanuts' })
  allergies: string
}
