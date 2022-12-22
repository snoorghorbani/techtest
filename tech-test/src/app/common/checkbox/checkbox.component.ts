import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-checkbox",
  templateUrl: "./checkbox.component.html",
  styleUrls: ["./checkbox.component.scss"],
})
export class CheckboxComponent implements OnInit {
  @Input() checked: boolean;
  @Output() changed = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  emit({ target: { checked } }) {
    this.changed.emit(checked);
  }
}
