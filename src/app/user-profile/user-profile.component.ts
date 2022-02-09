import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
user:any
posts:any[]=[]
postInfo:any
hoverIndex:number = -1;
  constructor(private route: ActivatedRoute, private http: HttpService) { }

  ngOnInit(): void {
    this.getUser(this.route.snapshot.params['id'])
  }
  getUser(id: any) {
    this.http.get('https://randomuser.me/api/?id=' + id).subscribe(res => {
     if (res?.status===200) {
      this.http.get('https://picsum.photos/v2/list?page=1&limit=24').subscribe(results => {
        results.body.forEach((element:any) => {
          this.posts.push({picture:element})
        });
      })
      this.user=res.body.results[0]
     }
    })
  }
  onHover(i:any){
    this.hoverIndex = i;
   
  }
  openmodal(post:any){
    this.postInfo=post
    console.log(this.postInfo);
    console.log(this.user);
    
    
    
  }
}
