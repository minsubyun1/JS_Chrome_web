const quotes = [
    { 
      quote:  "Victory belongs to the most persevering.",
      author:  "-Napoleon Bonaparte-",
    },
    {
      quote: "Energy and persistence conquer all things.",
      author: "-Benjamin Franklin-",

    },
    {
      quote: "Success isn't permanent, and failure isn't fatal.",
      author: "-Mike Ditka-",
    },
    {
      quote: "Everything comes to him who hustles while he waits.",
      author: "-Thomas A. Edison-",
    },
    {
      quote: "In the field of observation, chance favors only the prepared mind.",
      author: "-Louis Pasteur-",
    },
    {
      quote: "Destiny is no matter of chance. It is a matter of choice.",
      author: "-William Jennings Bryan-",
    },
    {
      quote: "All you need in this life is ignorance and confidence; then success is sure.",
      author: "-Mark Twain-",
    },
    {
      quote: "It is no use saying, We are doing our best. You have got to succeed in doing what is necessary.",
      author: "-Sir Winston Churchill-",
    },
    {
      quote: "In youth we learn, in age we understand.",
      author: "-Marie Ebner von Eschenbach-",
    },
    {
      quote: "To be mature means to face, and not evade, every fresh crisis that comes.",
      author: "-Fritz Kunkel-",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;