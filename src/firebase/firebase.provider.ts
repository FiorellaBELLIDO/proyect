import { ReporteEntity } from './entity/reporte.entity';

export const FirestoreDatabaseProvider = 'firestoredb';
export const FirestoreOptionsProvider = 'firestoreOptions';
export const FirestoreCollectionProviders: string[] = [
  ReporteEntity.collectionName,
];
