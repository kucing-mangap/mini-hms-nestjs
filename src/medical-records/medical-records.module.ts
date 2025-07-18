import { Module } from '@nestjs/common';
import { MedicalRecordsService } from './medical-records.service';
import { MedicalRecordsController } from './medical-records.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [MedicalRecordsController],
  providers: [MedicalRecordsService],
  imports: [PrismaModule]
})
export class MedicalRecordsModule {}
