import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";

import { Task } from "./interfaces";

@Injectable({
  providedIn: "root",
})
export class TaskApiService {
  constructor(private http: HttpClient) {}

  load(): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.apiUrl}/tasks`);
  }

  get(task: Partial<Task>): Observable<Task> {
    return this.http.post<Task>(`${environment.apiUrl}/tasks/${task.id}`, task);
  }

  create(task: Partial<Task>): Observable<Task> {
    return this.http.post<Task>(`${environment.apiUrl}/tasks`, task);
  }

  update(task: Partial<Task>): Observable<Task> {
    console.log(task);
    return this.http.patch<Task>(
      `${environment.apiUrl}/tasks/${task.id}`,
      task
    );
  }

  delete(id: string): Observable<Task> {
    return this.http.delete<Task>(`${environment.apiUrl}/tasks/${id}`);
  }

  search(searchQuery: string): Observable<Task[]> {
    return this.load().pipe(
      map((list: Task[]) =>
        list.filter(
          (value) =>
            value.label.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1
        )
      )
    );
  }
}
