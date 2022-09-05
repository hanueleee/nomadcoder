const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    },
    {
        quote: "In the end, it’s not the years in your life that count. It’s the life in your years.",
        quthor: "Abraham Lincoln",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
        quthor: "Thomas A. Edison",
    },
    {
        quote: "If you spend too much time thinking about a thing, you’ll never get it done.",
        author: "Bruce Lee",
    },
    {
        quote: "Keep your eyes on the stars and your feet on the ground.",
        quthor: "Theodore Roosevelt",
    },
    {
        quote: "Despite the forecast, live like it’s spring.",
        author: "Lilly Pulitzer",
    },
    {
        quote: "The two most important days in your life are the day you are born and the day you find out why.",
        quthor: "Mark Twain",
    },
    {
        quote: "Success is going from failure to failure without a loss of enthusiasm. ",
        author: "Winston Churchill",
    },
    {
        quote: "There is no use whatever trying to help people who do not help themselves. You cannot push anyone up a ladder unless he be willing to climb himself. ",
        quthor: "Andrew Carnegie",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;