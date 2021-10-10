export class Quote {
    showDetails : boolean;
    constructor (
        public  yourName : string,
        public  yourQuote : string,
        public  authorName : string,
        public  datePosted : Date
    ) {
        this.showDetails = false;
    }
}
