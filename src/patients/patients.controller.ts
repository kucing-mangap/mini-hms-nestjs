import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { AuthService } from 'src/auth/auth.service';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { PatientEntity } from './entities/patient.entity';

@Controller('patients')
export class PatientsController {
  constructor(
    private readonly patientsService: PatientsService,
    private readonly authService: AuthService
  ) {}

  @Post()
  @ApiCreatedResponse({ type: PatientEntity })
  async create(@Body() createPatientDto: CreatePatientDto) {
    const hashedPassword = await this.authService.hashPassword(createPatientDto.password)
    const patientData = {
      ...createPatientDto,
      password: hashedPassword
    }
    
    return this.patientsService.create(patientData);
  }

  @Get()
  @ApiOkResponse({ type: PatientEntity, isArray: true })
  findAll() {
    return this.patientsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: PatientEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.patientsService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: PatientEntity })
  update(@Param('id', ParseIntPipe) id: number, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientsService.update(id, updatePatientDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: PatientEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.patientsService.remove(id);
  }
}
