import { Component, OnInit } from "@angular/core";
import { ResourcesService } from "src/app/core/resources.service";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
})
export class ClientComponent implements OnInit {
  appTitle: string;

  constructor(private readonly resourceService: ResourcesService) {}

  ngOnInit(): void {
    this.appTitle = this.resourceService.appTitle;
  }
}
