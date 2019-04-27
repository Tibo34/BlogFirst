export class Post{
    title:string;
    content:string;
    loveits:number;
    created_at:Date;

    constructor(title:string,content:string,date:string,loveits:number){
        this.title=title;
        this.content=content;
        this.created_at=new Date(date);
        this.loveits=loveits;
    }
}