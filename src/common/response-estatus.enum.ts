export enum OK {
  code = 200,
  message = 'OK',
}

export enum Unauthorized {
  code = 401,
  message = 'No tiene acceso al recurso',
}

export enum BadRequest {
  code = 400,
  message = 'Solicitud malformada',
}

export enum NotFound {
  code = 404,
  message = 'Recurso no disponible',
}

export enum BadGateway {
  code = 500,
  message = 'Servicio no disponible',
}

export enum TimeOut {
  code = 408,
  message = 'Excedió el tiempo de conexión',
}
