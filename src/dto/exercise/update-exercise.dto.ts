import { IsString } from 'class-validator';
import { muscularGroup } from 'src/schemas/exercise.schema';

export class UpdateExerciseDto {
  @IsString()
  name: string;

  @IsString()
  muscularGroup: muscularGroup;
}
