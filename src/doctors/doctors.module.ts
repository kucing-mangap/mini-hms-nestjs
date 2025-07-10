import { Module } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { DoctorsController } from './doctors.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [DoctorsController],
  providers: [DoctorsService],
  imports: [PrismaModule, AuthModule]
})
export class DoctorsModule {}
