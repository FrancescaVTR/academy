import { Injectable } from '@angular/core';
import { UsersModule } from '../users.module';
import { Student } from '../models/student';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: UsersModule
})
export class UsersService {

  apiUrl: string = "http://localhost:3000";
  // students$: BehaviorSubject<Array<Student>> = new BehaviorSubject<Array<Student>>([]);

  lastUsedId!: number;

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Array<Student>> {
    return this.http.get<Array<Student>>(`${this.apiUrl}/students`)
      .pipe(map((students) => {
        this.lastUsedId = +students[students.length - 1].id!;
        // this.students$.next(students);
        return students
      }));
  }

  addStudent(student: Student): Observable<Student> {
    student.id = (this.lastUsedId + 1).toString();
    return this.http.post<Student>(`${this.apiUrl}/students`, student)
      .pipe(map((stu) => {
        this.lastUsedId++;
        // const newStudentsList = this.students$.value;
        // newStudentsList.push(stu);
        // this.students$.next(newStudentsList);
        return stu;
      }));
  }

  deleteStudent(id: number | string): Observable<Student> {
    return this.http.delete<Student>(`${this.apiUrl}/students/${id}`);
  }

  updateStudent(stu: Partial<Student>) {
    return this.http.patch(`${this.apiUrl}/students/${stu.id}`, stu)
  }
  /*
  Protocollo HTTP / HTTPS
    HyperText Transfer Protocol
       Ipertesto (JSON, XML)
       Trasferimento (Metodi)
         Create   PUT
         Read     GET
         Update   POST
         Delete   DELETE
         URI (Uniform Resource Identifier)
         Header HTTP
       Protocollo (Regole / Linee guida)
  REST (RESTful) API
    Representional State Transfer
      Stateless: Ogni chiamata è storia a sè
  WebSocket (Streaming)

  REST vs SOAP (XML)

  json-server db.json (Non relazionale)
  */ 
}
