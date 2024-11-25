import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateExerciseDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
