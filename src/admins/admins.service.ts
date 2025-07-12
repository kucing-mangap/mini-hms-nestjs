import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class AdminsService {
  constructor(private prisma: PrismaService, private readonly authService: AuthService) {}
  
  async create(createAdminDto: CreateAdminDto) {
    createAdminDto.password = await this.authService.hashPassword(createAdminDto.password)
    return this.prisma.admin.create({ data: createAdminDto })
  }

  findAll() {
    return this.prisma.admin.findMany()
  }

  findOne(id: number) {
    return this.prisma.admin.findUnique({ where: { id } })
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    if (updateAdminDto.password) {
      updateAdminDto.password = await this.authService.hashPassword(updateAdminDto.password)
    }
    
    return this.prisma.admin.update({
      where: { id },
      data: updateAdminDto
    })
  }

  remove(id: number) {
    return this.prisma.admin.delete({ where: { id } })
  }
}
