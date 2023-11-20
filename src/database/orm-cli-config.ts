import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1699991891348 } from '../migrations/1699991891348-CreateCoursesTable';
import { CreateTagsTable1700502895508 } from '../migrations/1700502895508-CreateTagsTable';
import { CreateCoursesTagsTable1700505486234 } from '../migrations/1700505486234-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1700508469040 } from '../migrations/1700508469040-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1700513202686 } from '../migrations/1700513202686-AddTagsIdToCoursesTagsTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1699991891348,
    CreateTagsTable1700502895508,
    CreateCoursesTagsTable1700505486234,
    AddCoursesIdToCoursesTagsTable1700508469040,
    AddTagsIdToCoursesTagsTable1700513202686,
  ],
});
