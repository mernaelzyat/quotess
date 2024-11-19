
const quotes = [
    {
        text: "Be yourself; everyone else is already taken..",
        author: "Oscar Wilde"
    },
    {
        text: "So many books, so little time.",
        author: "Frank Zappa"
    },
    {
        text: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero"
    },
    {
        text: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author: "Bernard M. Baruch"
    },
    {
        text: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    }
];

// Function to random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length); // random index
    return quotes[randomIndex];
}


document.getElementById("newQuoteBtn").addEventListener("click", () => {
    const randomQuote = getRandomQuote();
    document.getElementById("quoteDisplay").textContent = `"${randomQuote.text}"`;
    document.getElementById("authorDisplay").textContent = `--${randomQuote.author}`;
});
