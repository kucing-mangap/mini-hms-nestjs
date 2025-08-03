import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { MedicalRecordsService } from './medical-records.service';
import { CreateMedicalRecordDto } from './dto/create-medical-record.dto';
import { UpdateMedicalRecordDto } from './dto/update-medical-record.dto';
import { MedicalRecordEntity } from './entities/medical-record.entity';
import { ApiOperation, ApiCreatedResponse, ApiOkResponse, ApiNotFoundResponse, ApiBadRequestResponse, ApiParam, ApiTags, ApiNoContentResponse } from '@nestjs/swagger';
import { MedicalRecordDetailEntity } from './entities/medical-record-detail.entity';

@ApiTags("Medical Records")
@Controller('medical-records')
export class MedicalRecordsController {
  constructor(private readonly medicalRecordsService: MedicalRecordsService) {}

  @Post()
  @ApiOperation({ summary: 'Create medical record', description: 'Create a new medical record' })
  @ApiCreatedResponse({ description: 'Medical record created successfully', type: MedicalRecordEntity })
  create(@Body() createMedicalRecordDto: CreateMedicalRecordDto) {
    return this.medicalRecordsService.create(createMedicalRecordDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all medical records', description: 'Return all registered medical records' })
  @ApiOkResponse({ description: 'List of Medical Records', type: MedicalRecordEntity, isArray: true })
  findAll() {
    return this.medicalRecordsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get medical record by ID', description: 'Return a single medical record' })
  @ApiOkResponse({ description: 'Medical record found', type: MedicalRecordDetailEntity })
  @ApiNotFoundResponse({ description: 'Medical record not found' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiParam({ name: 'id', description: 'ID of the medical record to retrieve' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.medicalRecordsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update medical record by ID', description: 'Update a medical record' })
  @ApiOkResponse({ description: 'Medical record updated', type: MedicalRecordEntity })
  @ApiNotFoundResponse({ description: 'Medical record not found' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiParam({ name: 'id', description: 'ID of the medical record to udpate' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateMedicalRecordDto: UpdateMedicalRecordDto) {
    return this.medicalRecordsService.update(id, updateMedicalRecordDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete medical record by ID', description: 'Delete a medical record based on their ID' })
  @ApiNoContentResponse({ description: 'Medical record deleted' })
  @ApiParam({ name: 'id', description: 'ID of the medical record to delete' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.medicalRecordsService.remove(id);
  }
}
