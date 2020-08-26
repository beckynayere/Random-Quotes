// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-quote-box',
//   templateUrl: './quote-box.component.html',
//   styleUrls: ['./quote-box.component.css']
// })
// export class QuoteBoxComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
 //export class QuoteComponent {
//   showDescription: boolean;
//   constructor(
//     public id: number,
//     public detail: string,
//     public author: string,
//     public upVote: number,
//     public downVote: number,
//     public dateCreated: Date,
//     public originator: string
//   ) {
//     this.showDescription = false;
//   }
// }
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Do not let your happiness depend on something you may lose.', 'C.S.Lewis', 0, 0, new Date(2019, 6, 9), 'Sanaipei'),
    // tslint:disable-next-line: max-line-length
    new Quote(2, 'Some of us think holding on makes us strong; but sometimes it is letting go.', 'Hnnah Hermes', 0, 1, new Date(2020, 11, 28), 'Messi'),
    // tslint:disable-next-line: max-line-length
    new Quote(3, 'If you avoid the conflict to keep the peace you start a war inside yourself', 'Albert Einsten', 0, 5, new Date(2020, 7, 22), 'Martineli')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  addNewQuote(quote) {
    const quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote);
  }

  // tslint:disable-next-line: typedef
  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  // tslint:disable-next-line: typedef
  deleteQuote(index) {
    const toDelete = confirm(`Are you sure you want to delete '${this.quotes[index].detail}'?`);

    if (toDelete) {
      this.quotes.splice(index, 1);
    }
  }

  // tslint:disable-next-line: typedef
  upVoteQuote(index) {
    index.upVote += 1;
  }

  // tslint:disable-next-line: typedef
  downVoteQuote(index) {
    index.downVote += 1;
  }

  // tslint:disable-next-line: typedef
  findMax() {
    return Math.max.apply(Math, this.quotes.map((quote) => quote.upVote));
  }
}


//   constructor() { }

//   ngOnInit(): void {
//   }

//   // tslint:disable-next-line: typedef
//   addNewQuote(quote) {
//     const quoteLength = this.quotes.length;
//     quote.id = quoteLength + 1;
//     this.quotes.push(quote);
//   }

//   // tslint:disable-next-line: typedef
//   toggleDetails(index) {
//     this.quotes[index].showDescription = !this.quotes[index].showDescription;
//   }

//   // tslint:disable-next-line: typedef
//   deleteQuote(index) {
//     const toDelete = confirm(`Are you sure you want to delete '${this.quotes[index].detail}'?`);

//     if (toDelete) {
//       this.quotes.splice(index, 1);
//     }
//   }

//   // tslint:disable-next-line: typedef
//   upVoteQuote(index) {
//     index.upVote += 1;
//   }

//   // tslint:disable-next-line: typedef
//   downVoteQuote(index) {
//     index.downVote += 1;
//   }

//   // tslint:disable-next-line: typedef
//   findMax() {
//     return Math.max.apply(Math, this.quotes.map((quote) => quote.upVote));
//   }
// }

