import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-addchecker',
  templateUrl: './addchecker.component.html',
  styleUrls: ['./addchecker.component.css']
})
export class AddcheckerComponent implements OnInit {
  selectedfile:File;
  constructor(public http:HttpClient) { }

  ngOnInit() {
  }

  onfileselected(event){
    console.log(event)
    this.selectedfile = <File>event.target.files[0];
  }

  onupload(){
    const fd = new FormData();
    fd.append('image',this.selectedfile,this.selectedfile.name);
    this.http.post('http://localhost:3000/api/upload',fd).subscribe((res)=>{console.log(res) });
  }
}
