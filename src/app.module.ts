import { Module } from '@nestjs/common';
import { ExercisesModule } from './exercises/exercises.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.nd3jn.mongodb.net/test',
    ),
    ExercisesModule,
  ],
})
export class AppModule {}

//https://nestjs-test-backend-app-production.up.railway.app/api/v1/exercises
