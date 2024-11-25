import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateExerciseDto } from 'src/dto/create-exercise.dto';
import { UpdateExerciseDto } from 'src/dto/update-exercise.dto';
import { Exercise } from 'src/schemas/exercise.schema';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectModel(Exercise.name) private exerciseModel: Model<Exercise>,
  ) {}

  findAllExercises() {
    return this.exerciseModel.find();
  }

  async createExercise(exercise: CreateExerciseDto) {
    const newExercise = new this.exerciseModel(exercise);
    return newExercise.save();
  }

  async finExerciseById(id: string) {
    return this.exerciseModel.findById(id);
  }

  async deleteExercise(id: string) {
    return this.exerciseModel.findByIdAndDelete(id);
  }

  async updateExercise(id: string, exercise: UpdateExerciseDto) {
    return this.exerciseModel.findByIdAndUpdate(id, exercise);
  }
}
