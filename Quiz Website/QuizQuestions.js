
let questions = [];

const webdevQuestions = [
    {
        question: "What is the result of 2 + 2?",
        answers: [
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Computer Style Sheets", correct: false },
            { text: "Cascading Style Sheets", correct: true },
            { text: "Creative Style Sheets", correct: false },
            { text: "Colorful Style Sheets", correct: false }
        ]
    },
    {
        question: "In JavaScript, what is a ternary operator?",
        answers: [
            { text: "An operator with three operands", correct: true },
            { text: "An operator that works on three types", correct: false },
            { text: "An operator that manipulates three variables", correct: false },
            { text: "An operator used in for loops", correct: false }
        ]
    },
    {
        question: "What is the output of the following code: console.log(typeof [])?",
        answers: [
            { text: "Array", correct: false },
            { text: "Object", correct: true },
            { text: "Undefined", correct: false },
            { text: "Null", correct: false }
        ]
    },
    {
        question: "Which of the following is NOT a programming language?",
        answers: [
            { text: "Python", correct: false },
            { text: "HTML", correct: true },
            { text: "Java", correct: false },
            { text: "C++", correct: false }
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Hyperlinks and Text Markup Language", correct: false },
            { text: "Home Tool Markup Language", correct: false },
            { text: "Hyper Transfer Markup Language", correct: false }
        ]
    },
    {
        question: "What is the purpose of the CSS property 'z-index'?",
        answers: [
            { text: "To control the transparency of an element", correct: false },
            { text: "To specify the font size of an element", correct: false },
            { text: "To control the stacking order of elements", correct: true },
            { text: "To add shadows to an element", correct: false }
        ]
    },
    {
        question: "What is the correct way to write a comment in JavaScript?",
        answers: [
            { text: "// This is a comment", correct: true },
            { text: "<!-- This is a comment -->", correct: false },
            { text: "# This is a comment", correct: false },
            { text: "' This is a comment", correct: false }
        ]
    },
    {
        question: "Which symbol is used to denote an ID in CSS?",
        answers: [
            { text: ".", correct: false },
            { text: "#", correct: true },
            { text: "&", correct: false },
            { text: "*", correct: false }
        ]
    },
    {
        question: "What does SQL stand for?",
        answers: [
            { text: "Structured Query Language", correct: true },
            { text: "Sequential Query Language", correct: false },
            { text: "Simple Query Language", correct: false },
            { text: "Standard Query Language", correct: false }
        ]
    }
];

let generalQuestions = [
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: [
            { text: "Harper Lee", correct: true },
            { text: "Jane Austen", correct: false },
            { text: "J.K. Rowling", correct: false },
            { text: "Charles Dickens", correct: false }
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "London", correct: false },
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Pablo Picasso", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Vincent van Gogh", correct: false },
            { text: "Michelangelo", correct: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "H2O", correct: true },
            { text: "CO2", correct: false },
            { text: "NaCl", correct: false },
            { text: "O2", correct: false }
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "Australia", correct: false },
            { text: "India", correct: false }
        ]
    },
    {
        question: "Who is known as the 'Queen of Pop'?",
        answers: [
            { text: "Madonna", correct: true },
            { text: "Beyoncé", correct: false },
            { text: "Taylor Swift", correct: false },
            { text: "Adele", correct: false }
        ]
    },
    {
        question: "What is the capital of Canada?",
        answers: [
            { text: "Ottawa", correct: true },
            { text: "Toronto", correct: false },
            { text: "Montreal", correct: false },
            { text: "Vancouver", correct: false }
        ]
    },
    {
        question: "Who wrote the Harry Potter series?",
        answers: [
            { text: "J.K. Rowling", correct: true },
            { text: "Stephenie Meyer", correct: false },
            { text: "J.R.R. Tolkien", correct: false },
            { text: "C.S. Lewis", correct: false }
        ]
    },
    {
        question: "What is the currency of Japan?",
        answers: [
            { text: "Yen", correct: true },
            { text: "Dollar", correct: false },
            { text: "Euro", correct: false },
            { text: "Pound", correct: false }
        ]
    }
];

let sportsQuestions = [
    {
        question: "Which country hosted the 2020 Summer Olympics?",
        answers: [
            { text: "Japan", correct: true },
            { text: "China", correct: false },
            { text: "Brazil", correct: false },
            { text: "Australia", correct: false }
        ]
    },
    {
        question: "Who won the 2021 UEFA European Championship (Euros)?",
        answers: [
            { text: "Italy", correct: true },
            { text: "France", correct: false },
            { text: "England", correct: false },
            { text: "Germany", correct: false }
        ]
    },
    
    {
        question: "Who won the Formula 1 World Championship in 2021?",
        answers: [
            { text: "Max Verstappen", correct: true },
            { text: "Lewis Hamilton", correct: false },
            { text: "Valtteri Bottas", correct: false },
            { text: "Sebastian Vettel", correct: false }
        ]
    },
    {
        question: "Which team won the 2021 NBA Finals?",
        answers: [
            { text: "Milwaukee Bucks", correct: true },
            { text: "Phoenix Suns", correct: false },
            { text: "Los Angeles Lakers", correct: false },
            { text: "Brooklyn Nets", correct: false }
        ]
    },
    {
        question: "Who won the 2021 Wimbledon Men's Singles title?",
        answers: [
            { text: "Novak Djokovic", correct: true },
            { text: "Roger Federer", correct: false },
            { text: "Rafael Nadal", correct: false },
            { text: "Matteo Berrettini", correct: false }
        ]
    },
    {
        question: "Which athlete holds the world record for the men's 100 meters sprint?",
        answers: [
            { text: "Usain Bolt", correct: true },
            { text: "Tyson Gay", correct: false },
            { text: "Justin Gatlin", correct: false },
            { text: "Yohan Blake", correct: false }
        ]
    },
    {
        question: "Which team won the 2020-2021 UEFA Champions League?",
        answers: [
            { text: "Chelsea", correct: true },
            { text: "Manchester City", correct: false },
            { text: "Real Madrid", correct: false },
            { text: "Bayern Munich", correct: false }
        ]
    },
    
    {
        question: "Who won the ICC Men's T20 World Cup in 2021?",
        answers: [
            { text: "Australia", correct: false },
            { text: "India", correct: false },
            { text: "New Zealand", correct: false },
            { text: "England", correct: true }
        ]
    },
    {
        question: "Which player holds the record for the fastest century in One Day International (ODI) cricket?",
        answers: [
            { text: "AB de Villiers", correct: true },
            { text: "Chris Gayle", correct: false },
            { text: "Virender Sehwag", correct: false },
            { text: "Rohit Sharma", correct: false }
        ]
    },
    {
        question: "Who is the highest run-scorer in the history of Test cricket?",
        answers: [
            { text: "Rahul Dravid", correct: false },
            { text: "Ricky Ponting", correct: false },
            { text: "Brian Lara", correct: false },
            { text: "Sachin Tendulkar", correct: true }
        ]
    }
];

let moviesQuestions = [
    {
        question: "Who directed the movie 'Inception'?",
        answers: [
            { text: "Christopher Nolan", correct: true },
            { text: "Steven Spielberg", correct: false },
            { text: "Quentin Tarantino", correct: false },
            { text: "Martin Scorsese", correct: false }
        ]
    },
    {
        question: "Which movie won the Academy Award for Best Picture in 2020?",
        answers: [
            { text: "1917", correct: false },
            { text: "Joker", correct: false },
            { text: "Parasite", correct: true },
            { text: "Once Upon a Time in Hollywood", correct: false }
        ]
    },
    {
        question: "Who played the lead role in the movie 'The Shawshank Redemption'?",
        answers: [
            { text: "Tom Hanks", correct: false },
            { text: "Morgan Freeman", correct: true },
            { text: "Brad Pitt", correct: false },
            { text: "Leonardo DiCaprio", correct: false }
        ]
    },
    {
        question: "Which actor portrays the character Tony Stark in the Marvel Cinematic Universe?",
        answers: [
            { text: "Chris Evans", correct: false },
            { text: "Chris Hemsworth", correct: false },
            { text: "Robert Downey Jr.", correct: true },
            { text: "Mark Ruffalo", correct: false }
        ]
    },
    {
        question: "Who directed the movie 'Dilwale Dulhania Le Jayenge'?",
        answers: [
            { text: "Karan Johar", correct: false },
            { text: "Aditya Chopra", correct: true },
            { text: "Sanjay Leela Bhansali", correct: false },
            { text: "Yash Chopra", correct: false }
        ]
    },
    {
        question: "Which movie featured the song 'Chaiyya Chaiyya'?",
        answers: [
            { text: "Kabhi Khushi Kabhie Gham", correct: false },
            { text: "Dil Se..", correct: true },
            { text: "Kuch Kuch Hota Hai", correct: false },
            { text: "Kal Ho Naa Ho", correct: false }
        ]
    },
    {
        question: "Who played the role of 'Munna Bhai' in the movie 'Munna Bhai M.B.B.S.'?",
        answers: [
            { text: "Sanjay Dutt", correct: true },
            { text: "Aamir Khan", correct: false },
            { text: "Shah Rukh Khan", correct: false },
            { text: "Salman Khan", correct: false }
        ]
    },
    {
        question: "Who is known as the 'Mahanati' of Telugu cinema?",
        answers: [
            { text: "Anushka Shetty", correct: false },
            { text: "Savitri", correct: true },
            { text: "Trisha Krishnan", correct: false },
            { text: "Ramya Krishnan", correct: false }
        ]
    },
    {
        question: "Which Telugu movie features the characters named 'Bahubali' and 'Bhallaladeva'?",
        answers: [
            { text: "Rangasthalam", correct: false },
            { text: "Srimanthudu", correct: false },
            { text: "Baahubali: The Beginning", correct: true },
            { text: "Arjun Reddy", correct: false }
        ]
    },
    {
        question: "Who directed the Telugu movie 'Arjun Reddy'?",
        answers: [
            { text: "Sukumar", correct: false },
            { text: "Sandeep Reddy Vanga", correct: true },
            { text: "Puri Jagannadh", correct: false },
            { text: "Trivikram Srinivas", correct: false }
        ]
    }
]    

let politicsQuestions = [
    {
        question: "Who is the current President of the United States?",
        answers: [
            { text: "Joe Biden", correct: true },
            { text: "Donald Trump", correct: false },
            { text: "Barack Obama", correct: false },
            { text: "Hillary Clinton", correct: false }
        ]
    },
    {
        question: "What is the capital of Russia?",
        answers: [
            { text: "St. Petersburg", correct: false },
            { text: "Moscow", correct: true },
            { text: "Kiev", correct: false },
            { text: "Vladivostok", correct: false }
        ]
    },
    {
        question: "Who is the Prime Minister of the United Kingdom?",
        answers: [
            { text: "Boris Johnson", correct: true },
            { text: "Theresa May", correct: false },
            { text: "David Cameron", correct: false },
            { text: "Tony Blair", correct: false }
        ]
    },
    {
        question: "What is the political system of China?",
        answers: [
            { text: "Republic", correct: false },
            { text: "Monarchy", correct: false },
            { text: "Communist state", correct: true },
            { text: "Democracy", correct: false }
        ]
    },
    {
        question: "Who is the current Chancellor of Germany?",
        answers: [
            { text: "Angela Merkel", correct: true },
            { text: "Gerhard Schröder", correct: false },
            { text: "Helmut Kohl", correct: false },
            { text: "Adolf Hitler", correct: false }
        ]
    },
    {
        question: "Who is the current Prime Minister of India?",
        answers: [
            { text: "Narendra Modi", correct: true },
            { text: "Manmohan Singh", correct: false },
            { text: "Rahul Gandhi", correct: false },
            { text: "Indira Gandhi", correct: false }
        ]
    },
    {
        question: "Who is known as the 'Iron Lady of India'?",
        answers: [
            { text: "Indira Gandhi", correct: true },
            { text: "Sonia Gandhi", correct: false },
            { text: "Mayawati", correct: false },
            { text: "Mamata Banerjee", correct: false }
        ]
    },
    {
        question: "Which political party does Arvind Kejriwal belong to?",
        answers: [
            { text: "Bharatiya Janata Party (BJP)", correct: false },
            { text: "Indian National Congress (INC)", correct: false },
            { text: "Aam Aadmi Party (AAP)", correct: true },
            { text: "Bahujan Samaj Party (BSP)", correct: false }
        ]
    },
    {
        question: "Who was the first Prime Minister of India?",
        answers: [
            { text: "Jawaharlal Nehru", correct: true },
            { text: "Sardar Vallabhbhai Patel", correct: false },
            { text: "Lal Bahadur Shastri", correct: false },
            { text: "Indira Gandhi", correct: false }
        ]
    },
    {
        question: "What is the symbol of the Bharatiya Janata Party (BJP) in India?",
        answers: [
            { text: "Hand", correct: false },
            { text: "Lotus", correct: true },
            { text: "Elephant", correct: false },
            { text: "Cycle", correct: false }
        ]
    }
];

let foodQuestions = [
    {
        question: "What is the main ingredient in a classic Italian carbonara sauce?",
        answers: [
            { text: "Cream", correct: false },
            { text: "Bacon", correct: true },
            { text: "Tomatoes", correct: false },
            { text: "Mushrooms", correct: false }
        ]
    },
    {
        question: "Which country is famous for its sushi cuisine?",
        answers: [
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "Thailand", correct: false },
            { text: "India", correct: false }
        ]
    },
    {
        question: "What is the national dish of Spain?",
        answers: [
            { text: "Tacos", correct: false },
            { text: "Paella", correct: true },
            { text: "Ratatouille", correct: false },
            { text: "Sushi", correct: false }
        ]
    },
    {
        question: "What is the main ingredient in a classic French croissant?",
        answers: [
            { text: "Butter", correct: true },
            { text: "Chocolate", correct: false },
            { text: "Cream", correct: false },
            { text: "Almonds", correct: false }
        ]
    },
    {
        question: "What is the traditional bread of India?",
        answers: [
            { text: "Sourdough", correct: false },
            { text: "Baguette", correct: false },
            { text: "Roti", correct: true },
            { text: "Naan", correct: false }
        ]
    },
    {
        question: "Which spice is commonly used in Indian curry dishes?",
        answers: [
            { text: "Basil", correct: false },
            { text: "Cinnamon", correct: false },
            { text: "Turmeric", correct: true },
            { text: "Oregano", correct: false }
        ]
    },
    {
        question: "What is the main ingredient in the Indian dish 'Palak Paneer'?",
        answers: [
            { text: "Cauliflower", correct: false },
            { text: "Spinach", correct: true },
            { text: "Potatoes", correct: false },
            { text: "Lentils", correct: false }
        ]
    },
    {
        question: "Which Indian dessert is made from condensed milk and sugar?",
        answers: [
            { text: "Gulab Jamun", correct: false },
            { text: "Jalebi", correct: false },
            { text: "Barfi", correct: true },
            { text: "Rasgulla", correct: false }
        ]
    },
    {
        question: "What is the main ingredient in the Indian dish 'Biryani'?",
        answers: [
            { text: "Chicken", correct: false },
            { text: "Lamb", correct: false },
            { text: "Rice", correct: true },
            { text: "Potatoes", correct: false }
        ]
    },
    {
        question: "Which Indian snack is made from fried dough and served with chutney?",
        answers: [
            { text: "Pakora", correct: false },
            { text: "Samosa", correct: false },
            { text: "Papdi Chaat", correct: true },
            { text: "Dhokla", correct: false }
        ]
    }
];

let riddleQuestions = [
    {
        question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
        answers: [
            { text: "A Whisper", correct: false },
            { text: "An Echo", correct: true },
            { text: "A Dream", correct: false },
            { text: "A Ghost", correct: false }
        ]
    },
    {
        question: "The more you take, the more you leave behind. What am I?",
        answers: [
            { text: "Memories", correct: false },
            { text: "Leaves", correct: false },
            { text: "Footsteps", correct: true },
            { text: "Footprints", correct: false }
        ]
    },
    {
        question: "What has keys but can't open locks?",
        answers: [
            { text: "A Keyboard", correct: false },
            { text: "A Piano", correct: true },
            { text: "A Map", correct: false },
            { text: "A Calculator", correct: false }
        ]
    },
    {
        question: "I’m tall when I’m young, and I’m short when I’m old. What am I?",
        answers: [
            { text: "A Giraffe", correct: false },
            { text: "A Mountain", correct: false },
            { text: "A Candle", correct: true },
            { text: "A Tree", correct: false }
        ]
    },
    {
        question: "What has a head, a tail, is brown, and has no legs?",
        answers: [
            { text: "A Stick", correct: false },
            { text: "A Slug", correct: false },
            { text: "A Penny", correct: true },
            { text: "A Snake", correct: false }
        ]
    },
    {
        question: "What has to be broken before you can use it?",
        answers: [
            { text: "A Mirror", correct: false },
            { text: "An Egg", correct: true },
            { text: "A Pencil", correct: false },
            { text: "A Nut", correct: false }
        ]
    },
    {
        question: "I’m full of holes, yet I’m full of water. What am I?",
        answers: [
            { text: "A Pool", correct: false },
            { text: "A Hose", correct: false },
            { text: "A Sponge", correct: true },
            { text: "A Faucet", correct: false }
        ]
    },
    {
        question: "The more you take, the more you leave behind. What am I?",
        answers: [
            { text: "Leaves", correct: false },
            { text: "Footprints", correct: false },
            { text: "Footsteps", correct: true },
            { text: "Memories", correct: false }
        ]
    },
    {
        question: "What has a neck but no head?",
        answers: [
            { text: "A Giraffe", correct: false },
            { text: "A Bottle", correct: true },
            { text: "A Shirt", correct: false },
            { text: "A Snake", correct: false }
        ]
    },
    {
        question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
        answers: [
            { text: "A Memory", correct: false },
            { text: "The Letter 'M'", correct: true },
            { text: "A Dream", correct: false },
            { text: "A Second", correct: false }
        ]
    }
];
