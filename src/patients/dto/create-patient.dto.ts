import { ApiProperty } from "@nestjs/swagger"
import { IsISO8601, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreatePatientDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password: string

  @IsString()
  @IsOptional()
  @ApiProperty({ type: String, required: false, nullable: true })
  phone?: string | null

  @IsString()
  @IsNotEmpty()
  @IsISO8601()
  @ApiProperty()
  dateOfBirth: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  medicalHistory: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  allergies: string
}
