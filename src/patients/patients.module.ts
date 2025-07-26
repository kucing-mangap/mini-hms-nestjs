import { forwardRef, Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsController } from './patients.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [PatientsController],
  providers: [PatientsService],
  imports: [PrismaModule, forwardRef(() => AuthModule)],
  exports: [PatientsService]
})
export class PatientsModule {}
