import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Exercise {
  @Prop({ required: true, unique: true, trim: true })
  name: string;
}

export const ExerciseSchema = SchemaFactory.createForClass(Exercise);
