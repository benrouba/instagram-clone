import { Component, OnInit,HostListener } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  posts:any[]=[]
  page:number=1
  @HostListener('window:scroll', ['$event']) onWindowScroll() {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
     if(pos == max )   {
       this.page++
       console.log("dfsf");
  
       this.getPosts()
     }
  }
  constructor(private http:HttpService) { }

  ngOnInit(): void {
    this.getPosts()
  }
  getPosts(){
    this.http.get('https://randomuser.me/api/?page='+this.page+'&results=10').subscribe(res=>{
      this.http.get('https://picsum.photos/v2/list?page='+this.page+'&limit=10').subscribe(results=>{
       for (let index = 0; index < res.body.results.length; index++) {
        this.posts.push({user:res.body.results[index],picture:results.body[index]})
       
       }
        
      })   
    console.log(this.posts);
    
    
  })
  }
}
