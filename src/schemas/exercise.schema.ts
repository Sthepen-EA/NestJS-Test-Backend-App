import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum muscularGroup {
  Pecho = 'Pecho',
  Espalda = 'Espalda',
  Hombro = 'Hombro',
  Cuadricep = 'Cuadricep',
  Femoral = 'Femoral',
  Glúteo = 'Glúteo',
  Aductores = 'Aductores',
  Bícep = 'Bícep',
  Antrebrazo = 'Antrebrazo',
  Trícep = 'Trícep',
  Pantorilla = 'Pantorilla',
  Abdomen = 'Abdomen',
}
@Schema({
  timestamps: true,
})
export class Exercise {
  @Prop({ required: true, unique: true, trim: true })
  name: string;

  @Prop({ required: true, trim: true })
  muscularGroup: muscularGroup;
}

export const ExerciseSchema = SchemaFactory.createForClass(Exercise);
