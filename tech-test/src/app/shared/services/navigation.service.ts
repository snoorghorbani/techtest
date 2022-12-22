import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class NavigationService {
  constructor(private readonly router: Router) {}

  back() {
    this.router.navigate([".."]);
  }
  taskMangement() {
    this.router.navigate(["/tasks"]);
  }
  newTask() {
    this.router.navigate(["/tasks/new"]);
  }
}
