import { Module } from '@nestjs/common';
import { DataSourceOptions } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from '../courses/entities/courses.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'devtraining',
  entities: [Course],
  synchronize: true,
};

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        return {
          ...dataSourceOptions,
        };
      },
    }),
  ],
})
export class DatabaseModule {}
