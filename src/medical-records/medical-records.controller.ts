import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { MedicalRecordsService } from './medical-records.service';
import { CreateMedicalRecordDto } from './dto/create-medical-record.dto';
import { UpdateMedicalRecordDto } from './dto/update-medical-record.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MedicalRecordEntity } from './entities/medical-record.entity';

@ApiTags("Medical Records")
@Controller('medical-records')
export class MedicalRecordsController {
  constructor(private readonly medicalRecordsService: MedicalRecordsService) {}

  @Post()
  @ApiCreatedResponse({ type: MedicalRecordEntity })
  create(@Body() createMedicalRecordDto: CreateMedicalRecordDto) {
    return this.medicalRecordsService.create(createMedicalRecordDto);
  }

  @Get()
  @ApiOkResponse({ type: MedicalRecordEntity, isArray: true })
  findAll() {
    return this.medicalRecordsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: MedicalRecordEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.medicalRecordsService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: MedicalRecordEntity })
  update(@Param('id') id: number, @Body() updateMedicalRecordDto: UpdateMedicalRecordDto) {
    return this.medicalRecordsService.update(id, updateMedicalRecordDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: MedicalRecordEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.medicalRecordsService.remove(id);
  }
}
