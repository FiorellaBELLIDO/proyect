import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateReporteDto, updateReportDto } from './dto/reporte.dto';
import { ReporteService } from './reporte.service';

@Controller('reporte')
export class ReporteController {
  constructor(private readonly reporteService: ReporteService) {}

  @Get()
  getAllReports() {
    return this.reporteService.getAllReports();
  }

  @Post()
  createReport(@Body() report: CreateReporteDto) {
    return this.reporteService.createReport(report);
  }

  @Put('/:id')
  updateReport(@Param('id') id: string, @Body() report: updateReportDto) {
    return this.reporteService.updateReport(id, report);
  }

  @Delete('/:id')
  deleteReport(@Param('id') id: string) {
    return this.reporteService.deleteReport(id);
  }
}
