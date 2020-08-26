// import { Quote } from './quote';

// describe('Quote', () => {
//   it('should create an instance', () => {
//     expect(new Quote()).toBeTruthy();
//   });
// });
import { Quote } from './quote';
import { QuoteComponent } from './quote/quote.component';

describe('Quote', () => {
  it('should create an instance', () => {
    expect(new QuoteComponent()).toBeTruthy();
  });
});