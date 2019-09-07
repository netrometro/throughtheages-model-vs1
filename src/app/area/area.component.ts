import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  @Input() color: string = "gray";
  @Input() image: string = "";
  @Input() colorcube: string = "blue";

  displayImage;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.displayImage = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${this.image}`);
  }

}