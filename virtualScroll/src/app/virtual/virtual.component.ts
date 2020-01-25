import { Component, OnInit, ViewChild } from "@angular/core";
import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";

@Component({
  selector: "app-virtual",
  templateUrl: "./virtual.component.html",
  styleUrls: ["./virtual.component.css"]
})
export class VirtualComponent implements OnInit {
  personas: Array<number> = Array(500).fill(0);

  @ViewChild(CdkVirtualScrollViewport, { static: false })
  viewport: CdkVirtualScrollViewport;

  constructor() {}

  ngOnInit() {}

  irFinal() {
    this.viewport.scrollToIndex(this.personas.length);
  }

  irInicio() {
    this.viewport.scrollToIndex(0);
  }

  irCentro() {
    this.viewport.scrollToIndex(this.personas.length / 2);
  }
}
