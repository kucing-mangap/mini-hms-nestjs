import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNoContentResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiParam } from '@nestjs/swagger';
import { AdminEntity } from './entities/admin.entity';

@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Post()
  @ApiOperation({ summary: 'Create admin', description: 'Create a new admin' })
  @ApiCreatedResponse({ description: 'Admin created successfully', type: AdminEntity })
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminsService.create(createAdminDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all admins', description: 'Return all registered admins' })
  @ApiOkResponse({ description: 'List of Admins', type: AdminEntity, isArray: true })
  findAll() {
    return this.adminsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get admin by ID', description: 'Return a single admin' })
  @ApiOkResponse({ description: 'Admin found', type: AdminEntity })
  @ApiNotFoundResponse({ description: 'Admin not found' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiParam({ name: 'id', description: 'ID of the admin to retrieve' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.adminsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update admin by ID', description: 'Update an admin' })
  @ApiOkResponse({ description: 'Admin updated', type: AdminEntity })
  @ApiNotFoundResponse({ description: 'Admin not found' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiParam({ name: 'id', description: 'ID of the admin to udpate' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminsService.update(id, updateAdminDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete admin by ID', description: 'Delete a doctor based on their ID' })
  @ApiNoContentResponse({ description: 'Admin deleted' })
  @ApiParam({ name: 'id', description: 'ID of the admin to delete' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.adminsService.remove(id);
  }
}
