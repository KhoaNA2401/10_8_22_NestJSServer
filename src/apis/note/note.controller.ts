import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Note } from 'src/model/note.model';
import { NoteservicesService } from 'src/service/noteservices/noteservices.service';

@Controller('note')
export class NoteController {
  constructor(private noteService: NoteservicesService) {}

  @Get('/')
  getNoteById(@Query('id') id: string) {
    console.log('note');
    return this.noteService.getNoteById(id);
  }

  @Get('/all')
  getAllNote() {
    return this.noteService.getAllNote();
  }

  @Post('/')
  addNote(@Body() note: Note) {
    console.log(note);
    return this.noteService.addNote(note);
  }

  @Put('/')
  updateNote(@Body() note: Note) {
    return this.noteService.updateNote(note.id, note);
  }

  @Delete('/')
  deleteNote(@Query() id: string) {
    return this.noteService.deleteNote(id);
  }
}
