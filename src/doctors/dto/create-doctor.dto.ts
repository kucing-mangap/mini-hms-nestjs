import { ApiProperty } from "@nestjs/swagger";

export class CreateDoctorDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string

  @ApiProperty()
  password: string

  @ApiProperty()
  specialty: string;

  @ApiProperty()
  experience: number;
}
