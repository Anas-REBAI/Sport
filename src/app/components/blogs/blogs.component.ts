import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogTab: any = [
    {date:"12 mai 2020", title:"hgfuydgs", description:"fdhdgh"},
    {date:"25 mai 2023", title:"hgfuydgs", description:"fdhdgh"},
    {date:"06 mai 2021", title:"hgfuydgs", description:"fdhdgh"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
