export class QuoteMessage {
    constructor (
        public  id:number,
        public  yourName : string,
        public  yourQuote : string,
        public  authorName : string,
        public  datePosted : Date
    ) {

    }
}
