import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { DoctorEntity } from './entities/doctor.entity';

@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Post()
  @ApiCreatedResponse({ type: DoctorEntity })
  create(@Body() createDoctorDto: CreateDoctorDto) {    
    return this.doctorsService.create(createDoctorDto);
  }

  @Get()
  @ApiOkResponse({ type: DoctorEntity, isArray: true })
  findAll() {
    return this.doctorsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: DoctorEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.doctorsService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: DoctorEntity })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDoctorDto: UpdateDoctorDto) {
    return this.doctorsService.update(id, updateDoctorDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: DoctorEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.doctorsService.remove(id);
  }
}
