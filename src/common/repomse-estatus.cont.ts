export const AppErrors = {
  OK: {
    code: 200,
    message: 'OK',
  },
  BadRequest: {
    code: 400,
    message: 'Solicitud malformada',
  },
  NotFound: {
    code: 404,
    message: 'Recurso no disponible',
  },
  BadGateway: {
    code: 500,
    message: 'Servicio no disponible',
  },
  TimeOut: {
    code: 408,
    message: 'Excedió el tiempo de conexión',
  },
  Unauthorized: {
    code: 401,
    message: 'Acceso no authorizado',
  },
};
