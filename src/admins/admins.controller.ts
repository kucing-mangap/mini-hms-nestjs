import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { AuthService } from 'src/auth/auth.service';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { AdminEntity } from './entities/admin.entity';

@Controller('admins')
export class AdminsController {
  constructor(
    private readonly adminsService: AdminsService,
    private readonly authService: AuthService
  ) {}

  @Post()
  @ApiCreatedResponse({ type: AdminEntity })
  async create(@Body() createAdminDto: CreateAdminDto) {
    const hashedPassword = await this.authService.hashPassword(createAdminDto.password)
    const adminData = {
      ...createAdminDto,
      password: hashedPassword
    }
    
    return this.adminsService.create(adminData);
  }

  @Get()
  @ApiOkResponse({ type: AdminEntity, isArray: true })
  findAll() {
    return this.adminsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: AdminEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.adminsService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: AdminEntity })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminsService.update(id, updateAdminDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: AdminEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.adminsService.remove(id);
  }
}
