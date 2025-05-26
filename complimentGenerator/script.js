const compliments = [
    "You're doing better than you think.",
    "You are enough just as you are.",
    "You are capable of amazing things.",
    "You are stronger than you know.",
    "You are worthy of love and respect.",
    "You are unique and special.",
    "You have the power to create change.",
    "You are a beautiful person inside and out.",
    "You are not alone in this.",
    "You are loved and appreciated.",
    "You have a great sense of humour.",
];

function generateCompliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    document.getElementById("compliment").innerText = compliments[randomIndex];
}