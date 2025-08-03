import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiNotFoundResponse, ApiBadRequestResponse, ApiParam, ApiNoContentResponse } from '@nestjs/swagger';
import { PatientEntity } from './entities/patient.entity';
import { PatientDetailEntity } from './entities/patient-detail.entity';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post()
  @ApiOperation({ summary: 'Create patient', description: 'Create a new patient '})
  @ApiCreatedResponse({ description: 'Patient created successfully', type: PatientEntity})
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientsService.create(createPatientDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all patients', description: 'Return all registered patients' })
  @ApiOkResponse({ description: 'List of Patients', type: PatientEntity, isArray: true })
  findAll() {
    return this.patientsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get patient by ID', description: 'Return a single patient' })
  @ApiOkResponse({ description: 'Patient found', type: PatientDetailEntity })
  @ApiNotFoundResponse({ description: 'Patient not found' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiParam({ name: 'id', description: 'ID of the patient to retrieve' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.patientsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update patient by ID', description: 'Update a patient' })
  @ApiOkResponse({ description: 'Patient found', type: PatientEntity })
  @ApiNotFoundResponse({ description: 'Patient not found' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiParam({ name: 'id', description: 'ID of the patient to update' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientsService.update(id, updatePatientDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete patient by ID', description: 'Delete a patient based on their ID' })
  @ApiNoContentResponse({ description: 'Patient deleted' })
  @ApiParam({ name: 'id', description: 'ID of the patient to delete' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.patientsService.remove(id);
  }
}
