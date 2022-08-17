import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  imageDetail;
  
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.imageDetail = params;
    });
  }
}
