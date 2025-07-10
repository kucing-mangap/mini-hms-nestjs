import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { DoctorsModule } from './doctors/doctors.module';
import { AuthModule } from './auth/auth.module';
import { PatientsModule } from './patients/patients.module';

@Module({
  imports: [PrismaModule, DoctorsModule, AuthModule, PatientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
