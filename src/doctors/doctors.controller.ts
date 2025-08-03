import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNoContentResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiParam } from '@nestjs/swagger';
import { DoctorEntity } from './entities/doctor.entity';
import { DoctorDetailEntity } from './entities/doctor-detail.entity';

@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Post()
  @ApiOperation({ summary: 'Create doctor', description: 'Create a new doctor' })
  @ApiCreatedResponse({ description: 'Doctor created succesfully', type: DoctorEntity })
  create(@Body() createDoctorDto: CreateDoctorDto) {
    return this.doctorsService.create(createDoctorDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all doctors', description: 'Return all registered doctors' })
  @ApiOkResponse({ description: 'List of Doctors', type: DoctorEntity, isArray: true })
  findAll() {
    return this.doctorsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get doctor by ID', description: 'Return a single doctor with additional detail related to it' })
  @ApiOkResponse({ description: 'Doctor found', type: DoctorDetailEntity })
  @ApiNotFoundResponse({ description: 'Doctor not found' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiParam({ name: 'id', description: 'ID of the doctor to retrieve' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.doctorsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update doctor by ID', description: 'Update a doctor' })
  @ApiOkResponse({ description: 'Doctor updated', type: DoctorEntity })
  @ApiNotFoundResponse({ description: 'Doctor not found' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiParam({ name: 'id', description: 'ID of the doctor to update' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDoctorDto: UpdateDoctorDto) {
    return this.doctorsService.update(id, updateDoctorDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete doctor by ID', description: 'Delete a doctor based on their ID' })
  @ApiNoContentResponse({ description: 'Doctor deleted' })
  @ApiParam({ name: 'id', description: 'ID of the doctor to delete' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.doctorsService.remove(id);
  }
}
