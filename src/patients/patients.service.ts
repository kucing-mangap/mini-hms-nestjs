import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class PatientsService {
  constructor(private prisma: PrismaService, private readonly authService: AuthService) {}
  
  async create(createPatientDto: CreatePatientDto) {
    createPatientDto.password = await this.authService.hashPassword(createPatientDto.password)
    return this.prisma.patient.create({ data: createPatientDto })
  }

  findAll() {
    return this.prisma.patient.findMany()
  }

  findOne(id: number) {
    return this.prisma.patient.findUnique({ where: { id } })
  }

  async update(id: number, updatePatientDto: UpdatePatientDto) {
    if (updatePatientDto.password) {
      updatePatientDto.password = await this.authService.hashPassword(updatePatientDto.password)
    }
    
    return this.prisma.patient.update({
      where: { id },
      data: updatePatientDto
    })
  }

  remove(id: number) {
    return this.prisma.patient.delete({ where: { id } })
  }
}
