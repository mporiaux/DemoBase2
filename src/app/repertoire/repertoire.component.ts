import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repertoire',
  templateUrl: './repertoire.component.html',
  styleUrls: ['./repertoire.component.css']
})
export class RepertoireComponent implements OnInit {
  contacts : Contact[] =[];
  nom:string="";
  tel:string="";
  nomRech:string="";
  newContact:Contact|null=null;
  foundContact:Contact|null=null;

  constructor() { }

  ngOnInit(): void {
  }

  addContact():void{
    this.newContact=new Contact(this.nom,this.tel);
    this.contacts.push(this.newContact);
  }

  search():void {
    let found:boolean=false;
    for(let c  of this.contacts){
       if(this.nomRech == c.nom){
         this.foundContact=c;
         found=true;
       }
    }
    if(!found) this.foundContact=null;
  }





}
class Contact {
  constructor(public nom:string,public tel:string) {
  }
}
