export class Quote {
    showDetails : boolean;
    constructor (
        public  yourName : string,
        public  yourQuote : string,
        public  authorName : string
    ) {
         this.showDetails = false;
    }
}
