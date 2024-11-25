import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { CreateExerciseDto } from 'src/dto/create-exercise.dto';
import { UpdateExerciseDto } from 'src/dto/update-exercise.dto';

@Controller('exercises')
export class ExercisesController {
  constructor(private exerciseService: ExercisesService) {}

  @Get()
  findAllExercises() {
    return this.exerciseService.findAllExercises();
  }

  @Get(':id')
  async findExerciseById(@Param('id') id: string) {
    const exercise = await this.exerciseService.finExerciseById(id);

    if (!exercise) throw new NotFoundException('Exercise not found');

    return exercise;
  }

  @Post()
  async createExercise(@Body() exercise: CreateExerciseDto) {
    try {
      return await this.exerciseService.createExercise(exercise);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Exercise already exists');
      }
      throw error;
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteExercise(@Param('id') id: string) {
    const exercise = await this.exerciseService.deleteExercise(id);
    if (!exercise) throw new NotFoundException('Exercise not found');

    return exercise;
  }

  @Patch(':id')
  async updateExercise(
    @Param('id') id: string,
    @Body() exercise: UpdateExerciseDto,
  ) {
    const updatedExercise = await this.exerciseService.updateExercise(
      id,
      exercise,
    );
    if (!updatedExercise) throw new NotFoundException('Exercise not found');

    return updatedExercise;
  }
}
