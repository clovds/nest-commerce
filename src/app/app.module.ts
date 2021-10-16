import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { AuthModule } from 'src/auth/auth.module';
import { SharedModule } from 'src/shared/shared.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI), SharedModule, AuthModule],
  providers: [AppService],
  controllers: [AppController]
})
export class AppModule {}
