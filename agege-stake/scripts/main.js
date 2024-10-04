const quotes = [
  {
    scriptureOrAuthor: "D&C 4:4",
    quote: "For behold the field is white already to harvest...",
    color: "#FF5733",
    backgroundColor: "#FFFFFF",
  },
  {
    scriptureOrAuthor: "Matthew 28:19",
    quote: "Go ye therefore, and teach all nations...",
    color: "#C70039",
    backgroundColor: "#FFFFFF",
  },
  {
    scriptureOrAuthor: "Alma 29:9",
    quote: "I know that which the Lord hath commanded me...",
    color: "#900C3F",
    backgroundColor: "#FFFFFF",
  },
  {
    scriptureOrAuthor: "Dieter F. Uchtdorf",
    quote: "The Lord's love for His children is infinite...",
    color: "#581845",
    backgroundColor: "#FFFFFF",
  },
  {
    scriptureOrAuthor: "Mosiah 28:3",
    quote: "Now they were desirous that salvation should be declared...",
    color: "#FFC300",
    backgroundColor: "#000",
  },
  {
    scriptureOrAuthor: "Russell M. Nelson",
    quote: "Every member of the Church is a missionary...",
    color: "#DAF7A6",
    backgroundColor: "#000",
  },
  {
    scriptureOrAuthor: "Tosin Okunaiya",
    quote: "Always be Intentional In all you do...",
    color: "#DAF7A6",
    backgroundColor: "#000",
  },
  {
    scriptureOrAuthor: "Mark 16:15",
    quote:
      "And he said unto them, Go ye into all the world, and preach the gospel...",
    color: "#FF5733",
    backgroundColor: "#FFFFFF",
  },
  {
    scriptureOrAuthor: "D&C 18:15",
    quote:
      "And if it so be that you should labor all your days in crying repentance...",
    color: "#C70039",
    backgroundColor: "#FFFFFF",
  },
  {
    scriptureOrAuthor: "Henry B. Eyring",
    quote: "You can take courage and comfort in the Lord’s promise...",
    color: "#900C3F",
    backgroundColor: "#FFFFFF",
  },
  {
    scriptureOrAuthor: "D&C 88:81",
    quote: "Behold, I sent you out to testify and warn the people...",
    color: "#581845",
    backgroundColor: "#FFFFFF",
  },
  {
    scriptureOrAuthor: "Isaiah 52:7",
    quote:
      "How beautiful upon the mountains are the feet of him that bringeth good tidings...",
    color: "#FFC300",
    backgroundColor: "#000",
  },
  {
    scriptureOrAuthor: "David A. Bednar",
    quote:
      "We invite all to come unto Christ through ordinances and covenants...",
    color: "#DAF7A6",
    backgroundColor: "#0a0a",
  },
  {
    scriptureOrAuthor: "2 Nephi 26:33",
    quote:
      "And he inviteth them all to come unto him and partake of his goodness...",
    color: "#FF5733",
    backgroundColor: "#FFFFFF",
  },
  {
    scriptureOrAuthor: "Jeffrey R. Holland",
    quote: "You have callings, both temporal and spiritual, to minister...",
    color: "#C70039",
    backgroundColor: "#FFFFFF",
  },
  {
    scriptureOrAuthor: "D&C 6:36",
    quote: "Look unto me in every thought; doubt not, fear not...",
    color: "#900C3F",
    backgroundColor: "#FFFFFF",
  },
  {
    scriptureOrAuthor: "Moroni 10:32",
    quote: "Yea, come unto Christ, and be perfected in him...",
    color: "#581845",
    backgroundColor: "#FFFFFF",
  },
  {
    scriptureOrAuthor: "Neil L. Andersen",
    quote:
      "The blessings of missionary work are abundant and beyond measure...",
    color: "#FFC300",
    backgroundColor: "#FFFFFF",
  },
  {
    scriptureOrAuthor: "3 Nephi 5:13",
    quote: "Behold, I am a disciple of Jesus Christ, the Son of God...",
    color: "#DAF7A6",
    backgroundColor: "#afaf00",
  },
  {
    scriptureOrAuthor: "Luke 10:2",
    quote: "The harvest truly is great, but the labourers are few...",
    color: "#FF5733",
    backgroundColor: "#FFFFFF",
  },
  {
    scriptureOrAuthor: "Thomas S. Monson",
    quote: "You are never alone in the work of salvation...",
    color: "#C70039",
    backgroundColor: "#FFFFFF",
  },
  {
    scriptureOrAuthor: "Alma 13:24",
    quote: "For angels are declaring it unto many at this time in our land...",
    color: "#900C3F",
    backgroundColor: "#FFFFFF",
  },
  {
    scriptureOrAuthor: "Spencer W. Kimball",
    quote: "No greater work exists than to bring souls to Christ...",
    color: "#581845",
    backgroundColor: "#FFFFFF",
  },
  {
    scriptureOrAuthor: "1 Peter 3:15",
    quote:
      "But sanctify the Lord God in your hearts: and be ready always to give an answer...",
    color: "#FFC300",
    backgroundColor: "#000",
  },
  {
    scriptureOrAuthor: "Jacob 5:71",
    quote:
      "And the Lord of the vineyard said unto them: Go to, and labor in the vineyard...",
    color: "#DAF7A6",
    backgroundColor: "#a0a",
  },
  {
    scriptureOrAuthor: "Elder Dallin H. Oaks",
    quote:
      "Missionary work isn’t just a program in the Church, it is what we are all about...",
    color: "#FF5733",
    backgroundColor: "#FFFFFF",
  },
  {
    scriptureOrAuthor: "Doctrine and Covenants 33:9",
    quote:
      "Open your mouths and they shall be filled, and you shall become even as Nephi of old...",
    color: "#C70039",
    backgroundColor: "#FFFFFF",
  },
  {
    scriptureOrAuthor: "2 Timothy 4:2",
    quote: "Preach the word; be instant in season, out of season...",
    color: "#900C3F",
    backgroundColor: "#FFFFFF",
  },
  {
    scriptureOrAuthor: "M. Russell Ballard",
    quote: "Missionary work isn’t about numbers, it’s about love...",
    color: "#581845",
    backgroundColor: "#FFFFFF",
  },
  {
    scriptureOrAuthor: "Helaman 5:12",
    quote:
      "And now, my sons, remember, remember that it is upon the rock of our Redeemer...",
    color: "#FFC300",
    backgroundColor: "#FFFFFF",
  },
  {
    scriptureOrAuthor: "D&C 64:33",
    quote:
      "Wherefore, be not weary in well-doing, for ye are laying the foundation of a great work...",
    color: "#DAF7A6",
    backgroundColor: "#000",
  },
  {
    scriptureOrAuthor: "Romans 10:14",
    quote: "How then shall they call on him in whom they have not believed?...",
    color: "#FF5733",
    backgroundColor: "#FFFFFF",
  },
  {
    scriptureOrAuthor: "John 15:16",
    quote: "Ye have not chosen me, but I have chosen you, and ordained you...",
    color: "#C70039",
    backgroundColor: "#FFFFFF",
  },
  {
    scriptureOrAuthor: "Ezra Taft Benson",
    quote:
      "The Lord works from the inside out. The world works from the outside in...",
    color: "#900C3F",
    backgroundColor: "#FFFFFF",
  },
  {
    scriptureOrAuthor: "Doctrine and Covenants 123:12",
    quote:
      "For there are many yet on the earth among all sects, parties, and denominations...",
    color: "#581845",
    backgroundColor: "#FFFFFF",
  },
  {
    scriptureOrAuthor: "Amos 3:7",
    quote:
      "Surely the Lord GOD will do nothing, but he revealeth his secret unto his servants the prophets...",
    color: "#FFC300",
    backgroundColor: "#FFFFFF",
  },
];
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

function displayRandomQuotes() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  document.getElementById("scripture").innerHTML =
    randomQuote.scriptureOrAuthor;
  document.getElementById("quoteText").innerHTML = randomQuote.quote;
  document.querySelector(".quotes").style.backgroundColor = randomQuote.color;
  document.querySelector("#quoteText").style.color =
    randomQuote.backgroundColor;
  document.querySelector("#scripture").style.color =
    randomQuote.backgroundColor;
}
setInterval(displayRandomQuotes, 10000);
window.onload = displayRandomQuotes;
