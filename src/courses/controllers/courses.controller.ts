import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CoursesService } from '../services/courses.service';
import { CreateCourseDto } from '../dto/create-course-dto';
import { UpdateCourseDto } from '../dto/update-course-dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CoursesService) {}

  @Get()
  findAll() {
    return this.courseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.courseService.findOne(+id);
  }

  @Post()
  create(@Body() createCourseDTO: CreateCourseDto) {
    return this.courseService.create(createCourseDTO);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateCourseDTO: UpdateCourseDto) {
    return this.courseService.update(+id, updateCourseDTO);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.courseService.remove(+id);
  }
}
