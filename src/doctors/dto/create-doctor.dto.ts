import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CreateDoctorDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'First name of the Doctor' })
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Last name of the Doctor' })
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ description: 'Email of the Doctor' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Phone number of the Doctor' })
  phone: string

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty({ description: 'Password for the Doctor account (min. length of 8)' })
  password: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Specialty of the Doctor', example: 'Neurology' })
  specialty: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'Experiences that the Doctor had (in year format)', example: 3 })
  experience: number;
}
