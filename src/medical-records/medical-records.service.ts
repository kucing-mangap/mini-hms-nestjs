import { Injectable } from '@nestjs/common';
import { CreateMedicalRecordDto } from './dto/create-medical-record.dto';
import { UpdateMedicalRecordDto } from './dto/update-medical-record.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MedicalRecordsService {
  constructor(private prisma: PrismaService) {}
  
  create(createMedicalRecordDto: CreateMedicalRecordDto) {
    return this.prisma.medicalRecord.create({ data: createMedicalRecordDto })
  }

  findAll() {
    return this.prisma.medicalRecord.findMany()
  }

  findOne(id: number) {
    return this.prisma.medicalRecord.findUnique({ where: {id } })
  }

  update(id: number, updateMedicalRecordDto: UpdateMedicalRecordDto) {
    return this.prisma.medicalRecord.update({
      where: { id },
      data: updateMedicalRecordDto
    })
  }

  remove(id: number) {
    return this.prisma.medicalRecord.delete({ where: { id } })
  }
}
