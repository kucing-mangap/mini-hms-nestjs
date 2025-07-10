import { Module } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { AdminsController } from './admins.controller';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AdminsController],
  providers: [AdminsService],
  imports: [PrismaModule, AuthModule]
})
export class AdminsModule {}
