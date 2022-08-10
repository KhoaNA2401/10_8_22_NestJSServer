import { Module } from '@nestjs/common';
import { NoteController } from './apis/note/note.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoteservicesService } from './service/noteservices/noteservices.service';

@Module({
  imports: [],
  controllers: [AppController,NoteController],
  providers: [AppService, NoteservicesService],
})
export class AppModule {}
