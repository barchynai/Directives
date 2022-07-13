import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the beach',
      url:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the mountains',
      url:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the park',
      url:'https://images.unsplash.com/photo-1588314168741-5698d3502e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the downtown',
      url:'https://images.unsplash.com/photo-1619050405558-b5f39da6eef8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG93bnRvd258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the beach',
      url:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the mountains',
      url:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the park',
      url:'https://images.unsplash.com/photo-1588314168741-5698d3502e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the downtown',
      url:'https://images.unsplash.com/photo-1619050405558-b5f39da6eef8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG93bnRvd258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the beach',
      url:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the mountains',
      url:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the park',
      url:'https://images.unsplash.com/photo-1588314168741-5698d3502e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the downtown',
      url:'https://images.unsplash.com/photo-1619050405558-b5f39da6eef8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG93bnRvd258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the beach',
      url:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the mountains',
      url:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the park',
      url:'https://images.unsplash.com/photo-1588314168741-5698d3502e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the downtown',
      url:'https://images.unsplash.com/photo-1619050405558-b5f39da6eef8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG93bnRvd258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the beach',
      url:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the mountains',
      url:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the park',
      url:'https://images.unsplash.com/photo-1588314168741-5698d3502e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the downtown',
      url:'https://images.unsplash.com/photo-1619050405558-b5f39da6eef8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG93bnRvd258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the beach',
      url:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the mountains',
      url:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the park',
      url:'https://images.unsplash.com/photo-1588314168741-5698d3502e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the downtown',
      url:'https://images.unsplash.com/photo-1619050405558-b5f39da6eef8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG93bnRvd258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    }
  ]

  checkWindowIndex(index: number){
    return Math.abs(this.currentPage - index) < 5;
  }
}
