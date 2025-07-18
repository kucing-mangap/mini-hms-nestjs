import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { DoctorsModule } from './doctors/doctors.module';
import { AuthModule } from './auth/auth.module';
import { PatientsModule } from './patients/patients.module';
import { AdminsModule } from './admins/admins.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { MedicalRecordsModule } from './medical-records/medical-records.module';

@Module({
  imports: [PrismaModule, DoctorsModule, AuthModule, PatientsModule, AdminsModule, AppointmentsModule, MedicalRecordsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
