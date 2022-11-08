export class Personne {
  private dateAct : Date = new Date();

  constructor(private nom : string,private prenom :string,private annee :number) {

  }

  getAge():number {
    var age = this.dateAct.getFullYear()-this.annee;
    return age;
  }

  infos():string{
    return this.prenom+" "+this.nom+" a "+this.getAge()+" ans";
  }
}
