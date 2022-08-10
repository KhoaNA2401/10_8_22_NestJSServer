import { Injectable } from '@nestjs/common';
import { Note } from 'src/model/note.model';

@Injectable()
export class NoteservicesService {
    db : Map<String, Note> = new Map();

    addNote(note: Note){
        if(note.id==undefined){
            note.id = Date.now().toString();
        }
        this.db.set(note.id, note);
    }
//get by id
    getNoteById(id:string){
        return this.db.get(id);
    }
//get all db.value => array
    getAllNote(){
        return Array.from(this.db.values());
    }
    
    updateNote(id:string, note:Note){
        this.db.set(id,note);
    }

    deleteNote(id:string){
        this.db.delete(id);
    }
}
