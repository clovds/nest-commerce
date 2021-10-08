import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { AuthModule } from 'src/auth/auth.module';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI), SharedModule, AuthModule]
})
export class AppModule {}
