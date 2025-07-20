import { Injectable } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class DoctorsService {
  constructor(private prisma: PrismaService, private readonly authService: AuthService) {}
  
  async create(createDoctorDto: CreateDoctorDto) {
    createDoctorDto.password = await this.authService.hashPassword(createDoctorDto.password)
    return this.prisma.doctor.create({ data: createDoctorDto })
  }

  findAll() {
    return this.prisma.doctor.findMany()
  }

  findOne(id: number) {
    // return this.prisma.doctor.findUnique({ where: { id }})
    
    return this.prisma.doctor.findUnique({ 
      where: { id },
      include: {
        appointments: {
          include: {
            patient: true,
          }
        }
      }
    })
  }

  async update(id: number, updateDoctorDto: UpdateDoctorDto) {
    if (updateDoctorDto.password) {
      updateDoctorDto.password = await this.authService.hashPassword(updateDoctorDto.password)
    }

    return this.prisma.doctor.update({
      where: { id },
      data: updateDoctorDto
    })
  }

  remove(id: number) {
    return this.prisma.doctor.delete({ where: { id } })
  }
}
