const quotes = [
    { text: "তুমি কে ?  আমি কে ?<br> রাজাকার রাজাকার😜 </br> <br>কে বলেছে কে বলেছে স্বৈরাচার স্বৈরাচার</br> ", author: "কোটা আন্দলন ২০২৪" },
    { text: "কোটা না মেধা ? <br> মেধা , মেধা</br> ", author: "কোটা আন্দলন ২০২৪" },
    { text: "দিনে আহার রাতে প্রহার", author: "কোটা আন্দলন ২০২৪" },
    { text: "আইন তুমি কোথায় ?<br>কাগজের পাতায় ! </br>", author: "কোটা আন্দলন ২০২৪" },
    { text: "দিনে নাটক  রাতে আটক", author: "কোটা আন্দলন ২০২৪" },
    { text: "চাইলে গেলাম অধিকার <br> হয়ে গেলাম রাজাকার😜</br> ", author: "কোটা আন্দলন ২০২৪" },
    { text: "একটি ছাত্রলীগ তুমি জাগ্রত জানোয়ার😁 <br> সারা বিশ্বের বিস্ময় তুমি বাংলার কুলাঙ্গার</br>", author: "কোটা আন্দলন ২০২৪" },
    {
        text: "তারা সামান্য হেসে নিক<br>শীঘ্রই তারা তাদের কৃতকর্মের জন্য প্রচুর কাঁদবে </br>"
        , author: "সূরা আত তাওবা : ৮২"
    },
    { text: "তুমি কখনো মনে করো না যে, জালিমরা যা করে সে বিষয়ে আল্লাহ গাফিল <br> তবে তিনি তাদেরকে সেদিন পর্যন্ত অবকাশ দেন, যেদিন চক্ষু হবে স্থির </br>", author: "সূরা ইবরাহীম, আয়াত ৪২" },
    { text: "চাকরী না দিবু না দে <br> হামার বেটাক মারলু কেনে ? 😢</br>", author: "আবু সাঈদের মা" }
];

let currentIndex = 0;

const quote = document.getElementById('quote');
const author = document.getElementById('author');

// প্রথম কোটটা সেট করা হচ্ছে
quote.innerHTML = quotes[currentIndex].text;
author.innerHTML = quotes[currentIndex].author;

function showNextQuote() {
    currentIndex = (currentIndex + 1) % quotes.length;
    quote.innerHTML = quotes[currentIndex].text;
    author.innerHTML = quotes[currentIndex].author;
}

function tweet() {
    const tweetURL = 'https://twitter.com/intent/tweet?text=' + quote.innerHTML;
    window.open(tweetURL, 'Tweet Window', 'width=600,height=300');
}
