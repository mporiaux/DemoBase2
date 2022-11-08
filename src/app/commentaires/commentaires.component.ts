import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commentaires',
  templateUrl: './commentaires.component.html',
  styleUrls: ['./commentaires.component.css']
})


export class CommentairesComponent implements OnInit {

  info = {
    nom:"Durant",
    prenom:"Jean",
    tel:"0456"
  }
  commentaires:Commentaire[]=[];
  msgcom:string="";
  nouvcom=false;
  constructor() { }

  ngOnInit(): void {
  }

  addcom(){
    if(this.msgcom!=""){
      var commentaire:Commentaire=new Commentaire(new Date(),this.msgcom);
      this.commentaires.push(commentaire);
      this.msgcom="";
    }
  }

}
class Commentaire {
 /* date:Date;
  msg:string;
  constructor(date:Date,msg:string){
    this.date=date;
    this.msg=msg;
  }*/
  constructor(public date:Date,public msg:string) {
  }
}
