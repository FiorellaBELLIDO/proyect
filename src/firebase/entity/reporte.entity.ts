export class ReporteEntity {
  static collectionName = 'NEST_REPORTE';

  reason: string;
  deparment: string;
  reportTo: string;
  attached: AttachEntity[];
  type: string;
  subject: string;
  title: string;
  justification: string;
  status: string;
  isActive: boolean;
}

export class AttachEntity {
  type: string;
  name: string;
  url: string;
}
