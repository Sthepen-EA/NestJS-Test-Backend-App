import { IsNotEmpty, IsString } from 'class-validator';
import { muscularGroup } from 'src/schemas/exercise.schema';

export class CreateExerciseDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  muscularGroup: muscularGroup;
}
