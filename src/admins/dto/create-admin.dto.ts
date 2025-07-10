import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength, IsOptional } from "class-validator";

export class CreateAdminDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  firstName: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ type: String, required: false, nullable: true })
  lastName?: string | null

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty()
  password: string
}
