import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { ApiBadRequestResponse, ApiNotFoundResponse, ApiOperation, ApiCreatedResponse, ApiOkResponse, ApiNoContentResponse, ApiParam } from '@nestjs/swagger';
import { AppointmentEntity } from './entities/appointment.entity';
import { AppointmentDetailEntity } from './entities/appointment-detail.entity';

@Controller('appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Post()
  @ApiOperation({ summary: 'Create appointment', description: 'Create a new appointment' })
  @ApiCreatedResponse({ description: 'Appointment created successfully', type: AppointmentEntity })
  create(@Body() createAppointmentDto: CreateAppointmentDto) {
    return this.appointmentsService.create(createAppointmentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all appointments', description: 'Return all registered appointments' })
  @ApiOkResponse({ description: 'List of Appointments', type: AppointmentEntity, isArray: true })
  findAll() {
    return this.appointmentsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get appointment by ID', description: 'Return a single appointment' })
  @ApiOkResponse({ description: 'Appointment found', type: AppointmentDetailEntity })
  @ApiNotFoundResponse({ description: 'Appointment not found' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiParam({ name: 'id', description: 'ID of the appointment to retrieve' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.appointmentsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update appointment by ID', description: 'Update an appointment' })
  @ApiOkResponse({ description: 'Appointment updated', type: AppointmentEntity })
  @ApiNotFoundResponse({ description: 'Appointment not found' })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiParam({ name: 'id', description: 'ID of the appointment to udpate' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateAppointmentDto: UpdateAppointmentDto) {
    return this.appointmentsService.update(id, updateAppointmentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete appointment by ID', description: 'Delete an appointment based on their ID' })
  @ApiNoContentResponse({ description: 'Appointment deleted' })
  @ApiParam({ name: 'id', description: 'ID of the appointment to delete' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.appointmentsService.remove(id);
  }
}
