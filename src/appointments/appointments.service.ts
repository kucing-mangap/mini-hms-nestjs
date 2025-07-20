import { Injectable } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AppointmentsService {
  constructor(private prisma: PrismaService) {}
  
  create(createAppointmentDto: CreateAppointmentDto) {
    return this.prisma.appointment.create({ data: createAppointmentDto })
  }

  findAll() {
    return this.prisma.appointment.findMany()
  }

  findOne(id: number) {
    // return this.prisma.appointment.findUnique({ where: { id } })

    return this.prisma.appointment.findUnique({
      where: { id },
      include: {
        doctor: true,
        patient: true,
        medicalRecord: true
      }
    })
  }

  update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    return this.prisma.appointment.update({
      where: { id },
      data: updateAppointmentDto
    })
  }

  remove(id: number) {
    return this.prisma.appointment.delete({ where: { id } })
  }
}
