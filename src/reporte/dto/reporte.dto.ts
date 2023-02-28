import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';
import { TipoReporte } from './tipoReporte.enum';

export class CreateReporteDto {
  @IsString()
  reason: string;
  @IsString()
  deparment: string;
  @IsString()
  reportTo: string;
  @IsArray()
  @Type(() => CreateAttachDto)
  attached: CreateAttachDto[];
  @IsEnum(TipoReporte)
  type: string;
  @IsString()
  subject: string;
  @IsString()
  title: string;
  @IsString()
  justification: string;
}

export class updateReportDto {
  @IsOptional()
  @IsString()
  reason: string;
  @IsOptional()
  @IsString()
  deparment: string;
  @IsOptional()
  @IsString()
  reportTo: string;
  @IsOptional()
  @IsArray()
  @Type(() => CreateAttachDto)
  attached: CreateAttachDto[];
  @IsOptional()
  @IsEnum(TipoReporte)
  type: string;
  @IsOptional()
  @IsString()
  subject: string;
  @IsOptional()
  @IsString()
  title: string;
  @IsOptional()
  @IsString()
  justification: string;
}

export class CreateAttachDto {
  @IsString()
  type: string;
  @IsString()
  name: string;
  @IsString()
  url: string;
}
