import { Resultdto } from './result.dto';

export class ReponseDto<Type> {
  constructor(public result: Resultdto, public data?: Type) {}
}
