import { Injectable } from '@angular/core';
import { Post } from '../Model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  listPost:Post[]=[
    new Post('MHR champion','le mhr peut-il encore décrocher le titre?','1/01/2019',0),
    new Post('Top14','Qui remportera le titre','04/27/2019',0),
    new Post('dragonBall Super','reprise de la série Dragon Ball super','04/15/2019',0)
  ];

  constructor() { 
   
  }


}
