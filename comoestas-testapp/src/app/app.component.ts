import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comoestas-testapp';

  cars = [
    "Saab",
    "Volvo",
    "BMW"
  ];

  phrases = [
    "Todo va a estar bien.",
    "Todo pasa por una razón.",
    "La vida sigue su curso.",
    "Las cosas siempre mejoran con el tiempo.",
    "Al final, todo se arregla.",
    "Después de la tormenta, viene la calma.",
  ];

  phrase = "";
  imgSource = "";

  illustrations = [
    "https://th.bing.com/th/id/OIG.9nKxL9QWrqxshndIYGPI?pid=ImgGn",
    "https://img.freepik.com/vector-gratis/personas-divertidos-felices-ilustraciones-emojis_53876-59076.jpg",
    "https://previews.123rf.com/images/atthameeni/atthameeni1702/atthameeni170200013/71538224-dibujo-a-mano-abstracto-personas-felices-ni%C3%B1os-felicidad-concepto-ilustraci%C3%B3n-vectorial-eps10.jpg",
    "https://img.freepik.com/vector-premium/dibujos-animados-chico-chico-feliz-tema-estudiante-felicidad-infantil_18591-6290.jpg",
    "https://media.istockphoto.com/id/1050787688/es/vector/tierra-linda-de-la-historieta.jpg?s=612x612&w=0&k=20&c=1BTLzH3pK2WFcoM0DRcbozHZIzYMz3m43a2EmFWCxH4=",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png"
  ];

   selectedItemIndex = 0;
    registerIndex = 0;



  ngOnInit() {
    this.refresh();
  }

   refresh() {
     this.selectedItemIndex = Math.floor(Math.random() * this.phrases.length);
     this.registerIndex = this.selectedItemIndex;

     console.log(this.selectedItemIndex);
     console.log(this.registerIndex);
     console.log("dsa");

     this.phrase = this.phrases[this.selectedItemIndex];
     this.imgSource = this.illustrations[this.selectedItemIndex];
  }

    // console.log(cars.length);
    // console.log(cars[2]);

    // console.log(Math.floor(Math.random()*cars.length));

//     var selectedItemIndex = 0;
// var registerIndex = 0;

// console.log(selectedItemIndex);

// function refresh() {
//   //var item = cars[Math.floor(Math.random()*cars.length)];
//   var lastItemRepeated = false;
//   console.log(lastItemRepeated);

//   //console.log(item);
//   selectedItemIndex = Math.floor(Math.random() * phrases.length);
//   registerIndex = selectedItemIndex;

//   console.log(selectedItemIndex);
//   console.log(registerIndex);
//   console.log("dsa");
//   // document.getElementById("phrase").innerHTML = "Hello JavaScript!";
//   document.getElementById("phrase").innerHTML = phrases[selectedItemIndex];
//   document.getElementById("image").src = illustrations[selectedItemIndex];


// }


//refresh();


  
}
