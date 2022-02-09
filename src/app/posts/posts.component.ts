import { Component, OnInit, ViewChild,Input } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @ViewChild('post', { static: false }) post?: ModalDirective;
  @Input ()postInfo:any
  constructor() { }

  ngOnInit(): void {
    console.log(this.postInfo);
    
  }
  openmodal(){
    console.log(this.postInfo);
    
  }

}
