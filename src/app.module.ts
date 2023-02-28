import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import config from './config/config';
import { enviroments } from './config/enviroments';
import { FirestoreModule } from './firebase/firebase.module';
import { ReporteModule } from './reporte/reporte.module';

@Module({
  imports: [
    ReporteModule,
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('development', 'production'),
        FIRESTORE_CLIENT_EMAIL: Joi.string().required(),
        FIRESTORE_PRIVATE_KEY: Joi.string().required(),
        FIRESTORE_PROJECT_ID: Joi.string().required(),
      }),
    }),
    FirestoreModule.forRoot({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        ignoreUndefinedProperties: true,
        credentials: {
          client_email: configService.get<string>('FIRESTORE_CLIENT_EMAIL'),
          private_key: configService.get<string>('FIRESTORE_PRIVATE_KEY'),
        },
        projectId: configService.get<string>('FIRESTORE_PROJECT_ID'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
