import {
  BadGatewayException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CollectionReference } from '@google-cloud/firestore';
import { ReporteEntity } from '../entity/reporte.entity';
import { updateReportDto } from 'src/reporte/dto/reporte.dto';

@Injectable()
export class ReporteRepository {
  constructor(
    @Inject(ReporteEntity.collectionName)
    private reporteModel: CollectionReference<ReporteEntity>,
  ) {}

  async getAll() {
    try {
      const fireReports = await this.reporteModel
        .where('isActive', '==', true)
        .select('type', 'reason', 'deparmet', 'reportTo')
        .get();

      if (fireReports.empty) {
        throw new NotFoundException();
      }
      const reports = fireReports.docs.map((report) => {
        const reportMap = { id: report.id, ...report.data() };
        return reportMap;
      });

      return reports;
    } catch (error: any) {
      console.log(JSON.stringify(error));
      if (error.code == 7) {
        throw new BadGatewayException();
      }
      throw error;
    }
  }

  async save(ReporteEntity: ReporteEntity) {
    let save = false;

    try {
      await this.reporteModel.add(ReporteEntity);
      save = true;
      return save;
    } catch (error: any) {
      console.log(error);
      console.log(JSON.stringify(error));
      if (error.code == 7) {
        throw new BadGatewayException();
      }
      throw error;
    }
  }

  async update(id: string, reporte: updateReportDto) {
    try {
      await this.reporteModel.doc(id).update(reporte);
      return true;
    } catch (error: any) {
      console.log(JSON.stringify(error));
      if (error.code == 7) {
        throw new BadGatewayException();
      } else if (error.code == 5) {
        throw new NotFoundException();
      }
      throw error;
    }
  }

  async delete(id: string) {
    let update = 500;

    try {
      await this.reporteModel.doc(id).update({ isActive: false });
      update = 200;
      return update;
    } catch (error: any) {
      console.log(JSON.stringify(error));
      if (error.code == 5) {
        update = 404;
      }
      return update;
    }
  }
}
