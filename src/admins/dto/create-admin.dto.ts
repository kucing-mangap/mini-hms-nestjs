import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateAdminDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'First name of the Admin' })
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Last name of the Admin' })
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ description: 'Email of the Admin' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty({ description: 'Password for the Admin account (min. length of 8)' })
  password: string;
}
