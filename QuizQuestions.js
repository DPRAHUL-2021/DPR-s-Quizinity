// Through This shuffleArray Function We Shuffle The Array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to get random questions from a category
function getRandomQuestions(category) {
    let selectedQuestions = [];
    switch (category) {
        case "Movies":
            selectedQuestions = getRandomQuestionsFromCategory(moviesQuestions);
            break;
        case "Sports":
            selectedQuestions = getRandomQuestionsFromCategory(sportsQuestions);
            break;
        case "Politics":
            selectedQuestions = getRandomQuestionsFromCategory(politicsQuestions);
            break;
        case "General Trivia":
            selectedQuestions = getRandomQuestionsFromCategory(generalQuestions);
            break;
        case "Web Development":
            selectedQuestions = getRandomQuestionsFromCategory(webdevQuestions);
            break;
        case "Food":
            selectedQuestions = getRandomQuestionsFromCategory(foodQuestions);
            break;
        case "Riddles":
            selectedQuestions = getRandomQuestionsFromCategory(riddleQuestions);
            break;
        default:
            console.error("Invalid category selected.");
            break;
    }
    return selectedQuestions;
}

function getRandomQuestionsFromCategory(categoryQuestions) {
    const shuffledQuestions = shuffleArray([...categoryQuestions]);
    return shuffledQuestions.slice(0, 7); // Select the first 7 questions
}


let questions = [];


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
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Au", correct: true },
            { text: "Ag", correct: false },
            { text: "Fe", correct: false },
            { text: "Cu", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Mars", correct: true },
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: false },
            { text: "Mercury", correct: false }
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Charles Dickens", correct: false },
            { text: "Jane Austen", correct: false },
            { text: "Mark Twain", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for oxygen?",
        answers: [
            { text: "O2", correct: false },
            { text: "O", correct: true },
            { text: "CO2", correct: false },
            { text: "H2O", correct: false }
        ]
    },
    {
        question: "Which mammal can fly?",
        answers: [
            { text: "Bat", correct: true },
            { text: "Mouse", correct: false },
            { text: "Squirrel", correct: false },
            { text: "Rabbit", correct: false }
        ]
    },
    {
        question: "Who painted the Sistine Chapel ceiling?",
        answers: [
            { text: "Leonardo da Vinci", correct: false },
            { text: "Raphael", correct: false },
            { text: "Michelangelo", correct: true },
            { text: "Donatello", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for sodium?",
        answers: [
            { text: "Na", correct: true },
            { text: "Ni", correct: false },
            { text: "K", correct: false },
            { text: "Mg", correct: false }
        ]
    },
    {
        question: "Which ocean is the largest?",
        answers: [
            { text: "Pacific Ocean", correct: true },
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false }
        ]
    },
    {
        question: "What is the capital of Australia?",
        answers: [
            { text: "Sydney", correct: false },
            { text: "Melbourne", correct: false },
            { text: "Canberra", correct: true },
            { text: "Perth", correct: false }
        ]
    },
    {
        question: "Who wrote '1984'?",
        answers: [
            { text: "George Orwell", correct: true },
            { text: "Aldous Huxley", correct: false },
            { text: "Ray Bradbury", correct: false },
            { text: "Margaret Atwood", correct: false }
        ]
    },
    {
        question: "What is the tallest mammal?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: true },
            { text: "Horse", correct: false },
            { text: "Rhino", correct: false }
        ]
    },
    {
        question: "Which is the largest organ in the human body?",
        answers: [
            { text: "Liver", correct: false },
            { text: "Skin", correct: true },
            { text: "Brain", correct: false },
            { text: "Heart", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for carbon?",
        answers: [
            { text: "C", correct: true },
            { text: "Ca", correct: false },
            { text: "Co", correct: false },
            { text: "Cu", correct: false }
        ]
    },

    {
        question: "Who wrote 'The Great Gatsby'?",
        answers: [
            { text: "F. Scott Fitzgerald", correct: true },
            { text: "Ernest Hemingway", correct: false },
            { text: "John Steinbeck", correct: false },
            { text: "Virginia Woolf", correct: false }
        ]
    },
    {
        question: "What is the largest mammal in the world?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Hippo", correct: false }
        ]
    },
    {
        question: "Who painted 'Starry Night'?",
        answers: [
            { text: "Vincent van Gogh", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Leonardo da Vinci", correct: false },
            { text: "Claude Monet", correct: false }
        ]
    },
    {
        question: "What is the boiling point of water in Celsius?",
        answers: [
            { text: "100°C", correct: true },
            { text: "0°C", correct: false },
            { text: "50°C", correct: false },
            { text: "200°C", correct: false }
        ]
    },
    {
        question: "Which planet is closest to the sun?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: false },
            { text: "Mercury", correct: true },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "Who discovered penicillin?",
        answers: [
            { text: "Alexander Fleming", correct: true },
            { text: "Marie Curie", correct: false },
            { text: "Albert Einstein", correct: false },
            { text: "Isaac Newton", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for iron?",
        answers: [
            { text: "Fe", correct: true },
            { text: "Ir", correct: false },
            { text: "In", correct: false },
            { text: "Au", correct: false }
        ]
    },
    {
        question: "Which country is known as the 'Land of the Midnight Sun'?",
        answers: [
            { text: "Norway", correct: true },
            { text: "Sweden", correct: false },
            { text: "Finland", correct: false },
            { text: "Russia", correct: false }
        ]
    },
    {
        question: "Who wrote 'Pride and Prejudice'?",
        answers: [
            { text: "Jane Austen", correct: true },
            { text: "Emily Brontë", correct: false },
            { text: "Charlotte Brontë", correct: false },
            { text: "Louisa May Alcott", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for silver?",
        answers: [
            { text: "Ag", correct: true },
            { text: "Si", correct: false },
            { text: "Sn", correct: false },
            { text: "Sv", correct: false }
        ]
    }
];

let webdevQuestions = [
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
            { text: "Hypertext Markup Language", correct: true },
            { text: "Hyperlink and Text Markup Language", correct: false },
            { text: "Home Tool Markup Language", correct: false },
            { text: "Hyperlink Text Management Language", correct: false }
        ]
    },
    {
        question: "Which tag is used to define an unordered list in HTML?",
        answers: [
            { text: "ul", correct: true },
            { text: "ol", correct: false },
            { text: "li", correct: false },
            { text: "u", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        answers: [
            { text: "color", correct: true },
            { text: "font-color", correct: false },
            { text: "text-color", correct: false },
            { text: "foreground-color", correct: false }
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Cascading Style Sheets", correct: true },
            { text: "Creative Style Sheets", correct: false },
            { text: "Colorful Style Sheets", correct: false },
            { text: "Computer Style Sheets", correct: false }
        ]
    },
    {
        question: "Which property is used to set the background color of an element in CSS?",
        answers: [
            { text: "background-color", correct: true },
            { text: "color", correct: false },
            { text: "bgcolor", correct: false },
            { text: "background", correct: false }
        ]
    },
    {
        question: "What does HTTP stand for?",
        answers: [
            { text: "Hypertext Transfer Protocol", correct: true },
            { text: "Hypertext Transfer Process", correct: false },
            { text: "Hypertext Transmission Protocol", correct: false },
            { text: "Hypertext Testing Protocol", correct: false }
        ]
    },
    {
        question: "Which programming language is commonly used for client-side web development?",
        answers: [
            { text: "JavaScript", correct: true },
            { text: "Python", correct: false },
            { text: "Java", correct: false },
            { text: "C#", correct: false }
        ]
    },
    {
        question: "What does CSS3 introduce?",
        answers: [
            { text: "New features and enhancements to CSS", correct: true },
            { text: "A new programming language", correct: false },
            { text: "A new version of JavaScript", correct: false },
            { text: "A new markup language", correct: false }
        ]
    },
    {
        question: "Which HTML tag is used to link an external CSS file?",
        answers: [
            { text: "link", correct: true },
            { text: "css", correct: false },
            { text: "style", correct: false },
            { text: "href", correct: false }
        ]
    },
    {
        question: "What is the box model in CSS?",
        answers: [
            { text: "A model used to describe the space around and within elements", correct: true },
            { text: "A model used to describe the layout of a webpage", correct: false },
            { text: "A model used to describe the positioning of elements", correct: false },
            { text: "A model used to describe the color and style of elements", correct: false }
        ]
    },
    {
        question: "What is the purpose of JavaScript?",
        answers: [
            { text: "To add interactivity and dynamic behavior to web pages", correct: true },
            { text: "To define the structure and layout of web pages", correct: false },
            { text: "To style web pages", correct: false },
            { text: "To transfer data between the client and server", correct: false }
        ]
    },
    {
        question: "What does CSS specificity refer to?",
        answers: [
            { text: "The weight of a CSS rule determined by the number of selectors", correct: true },
            { text: "The speed at which a CSS file is loaded by the browser", correct: false },
            { text: "The ability of a CSS rule to override another rule", correct: false },
            { text: "The size of a CSS file", correct: false }
        ]
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: [
            { text: "click", correct: true },
            { text: "hover", correct: false },
            { text: "keydown", correct: false },
            { text: "submit", correct: false }
        ]
    },
    {
        question: "What does the 'async' attribute do in the <script> tag?",
        answers: [
            { text: "Allows the script to be downloaded asynchronously", correct: true },
            { text: "Specifies that the script should be executed asynchronously", correct: false },
            { text: "Specifies that the script should be executed synchronously", correct: false },
            { text: "Allows the script to be downloaded synchronously", correct: false }
        ]
    },
    {
        question: "What does the 'flexbox' layout model in CSS provide?",
        answers: [
            { text: "A more efficient way to layout, align, and distribute space among items in a container", correct: true },
            { text: "A way to create flexible images in CSS", correct: false },
            { text: "A way to create flexible text in CSS", correct: false },
            { text: "A way to create flexible grids in CSS", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to control the size of text?",
        answers: [
            { text: "font-size", correct: true },
            { text: "text-size", correct: false },
            { text: "font-style", correct: false },
            { text: "text-style", correct: false }
        ]
    },
    {
        question: "What is a 'pseudo-class' in CSS?",
        answers: [
            { text: "A keyword added to a selector that specifies a special state of the selected element(s)", correct: true },
            { text: "A class defined in JavaScript", correct: false },
            { text: "A class defined using the 'class' attribute in HTML", correct: false },
            { text: "A class with no specific properties or styles", correct: false }
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
            { text: "~ This is a comment", correct: false },
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
    },
    {
        question: "Which country won the most gold medals in the 2020 Tokyo Olympics?",
        answers: [
            { text: "United States", correct: true },
            { text: "China", correct: false },
            { text: "Japan", correct: false },
            { text: "Russia", correct: false }
        ]
    },
    {
        question: "Who won the 2021 FIFA Ballon d'Or award?",
        answers: [
            { text: "Lionel Messi", correct: true },
            { text: "Cristiano Ronaldo", correct: false },
            { text: "Robert Lewandowski", correct: false },
            { text: "Mohamed Salah", correct: false }
        ]
    },
    {
        question: "Which country hosted the 2022 FIFA World Cup?",
        answers: [
            { text: "Qatar", correct: true },
            { text: "United Arab Emirates", correct: false },
            { text: "Saudi Arabia", correct: false },
            { text: "Egypt", correct: false }
        ]
    },
    {
        question: "Who won the 2021 Tour de France?",
        answers: [
            { text: "Tadej Pogačar", correct: true },
            { text: "Primoz Roglic", correct: false },
            { text: "Mark Cavendish", correct: false },
            { text: "Egan Bernal", correct: false }
        ]
    },
    {
        question: "Which team won the 2021 Copa America?",
        answers: [
            { text: "Argentina", correct: true },
            { text: "Brazil", correct: false },
            { text: "Colombia", correct: false },
            { text: "Chile", correct: false }
        ]
    },
    {
        question: "Who won the 2021 Australian Open Men's Singles title?",
        answers: [
            { text: "Novak Djokovic", correct: true },
            { text: "Rafael Nadal", correct: false },
            { text: "Dominic Thiem", correct: false },
            { text: "Roger Federer", correct: false }
        ]
    },
    {
        question: "Which golfer won the 2021 Masters Tournament?",
        answers: [
            { text: "Hideki Matsuyama", correct: true },
            { text: "Jordan Spieth", correct: false },
            { text: "Justin Thomas", correct: false },
            { text: "Dustin Johnson", correct: false }
        ]
    },
    {
        question: "Who won the 2021 NBA Most Valuable Player (MVP) award?",
        answers: [
            { text: "Nikola Jokić", correct: true },
            { text: "Stephen Curry", correct: false },
            { text: "Giannis Antetokounmpo", correct: false },
            { text: "LeBron James", correct: false }
        ]
    },
    {
        question: "Which team won the 2021 UEFA Europa League?",
        answers: [
            { text: "Villarreal", correct: true },
            { text: "Manchester United", correct: false },
            { text: "AS Roma", correct: false },
            { text: "Arsenal", correct: false }
        ]
    },
    {
        question: "Who won the 2021 NFL Super Bowl?",
        answers: [
            { text: "Tampa Bay Buccaneers", correct: true },
            { text: "Kansas City Chiefs", correct: false },
            { text: "Green Bay Packers", correct: false },
            { text: "Buffalo Bills", correct: false }
        ]
    },
    {
        question: "Which country won the most medals in the 2020 Summer Paralympics?",
        answers: [
            { text: "China", correct: true },
            { text: "United States", correct: false },
            { text: "Great Britain", correct: false },
            { text: "Russia", correct: false }
        ]
    },
    {
        question: "Who won the 2021 French Open Women's Singles title?",
        answers: [
            { text: "Barbora Krejčíková", correct: true },
            { text: "Ashleigh Barty", correct: false },
            { text: "Naomi Osaka", correct: false },
            { text: "Serena Williams", correct: false }
        ]
    },
    {
        question: "Which team won the 2021 UEFA Super Cup?",
        answers: [
            { text: "Chelsea", correct: true },
            { text: "Bayern Munich", correct: false },
            { text: "Real Madrid", correct: false },
            { text: "Liverpool", correct: false }
        ]
    },
    {
        question: "Who won the 2021 NHL Stanley Cup?",
        answers: [
            { text: "Tampa Bay Lightning", correct: true },
            { text: "Montreal Canadiens", correct: false },
            { text: "Boston Bruins", correct: false },
            { text: "Vegas Golden Knights", correct: false }
        ]
    },
    {
        question: "Which player won the 2021 Ballon d'Or Féminin award?",
        answers: [
            { text: "Alexia Putellas", correct: true },
            { text: "Sam Kerr", correct: false },
            { text: "Vivianne Miedema", correct: false },
            { text: "Pernille Harder", correct: false }
        ]
    },
    {
        question: "Who won the 2021 Indian Premier League (IPL) tournament?",
        answers: [
            { text: "Chennai Super Kings", correct: true },
            { text: "Kolkata Knight Riders", correct: false },
            { text: "Mumbai Indians", correct: false },
            { text: "Royal Challengers Bangalore", correct: false }
        ]
    },
    {
        question: "Which tennis player won the most Grand Slam singles titles in history?",
        answers: [
            { text: "Serena Williams", correct: false },
            { text: "Margaret Court", correct: true },
            { text: "Steffi Graf", correct: false },
            { text: "Martina Navratilova", correct: false }
        ]
    },
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
    },
    {
        question: "Who directed the movie 'Lagaan: Once Upon a Time in India'?",
        answers: [
            { text: "Ashutosh Gowariker", correct: true },
            { text: "Karan Johar", correct: false },
            { text: "Sanjay Leela Bhansali", correct: false },
            { text: "Rajkumar Hirani", correct: false }
        ]
    },
    {
        question: "In which Indian city is the movie 'Dil Chahta Hai' primarily set?",
        answers: [
            { text: "Mumbai", correct: false },
            { text: "Goa", correct: false },
            { text: "Sydney", correct: false },
            { text: "Mumbai and Sydney", correct: true }
        ]
    },
    {
        question: "Who played the role of 'Baburao Ganpatrao Apte' in the movie 'Hera Pheri'?",
        answers: [
            { text: "Paresh Rawal", correct: true },
            { text: "Akshay Kumar", correct: false },
            { text: "Sunil Shetty", correct: false },
            { text: "Govinda", correct: false }
        ]
    },
    {
        question: "What is the name of the character played by Aamir Khan in the movie '3 Idiots'?",
        answers: [
            { text: "Rancho", correct: true },
            { text: "Farhan", correct: false },
            { text: "Raju", correct: false },
            { text: "Chatur", correct: false }
        ]
    },
    {
        question: "Who directed the Indian movie 'Gully Boy'?",
        answers: [
            { text: "Zoya Akhtar", correct: true },
            { text: "Anurag Kashyap", correct: false },
            { text: "Imtiaz Ali", correct: false },
            { text: "Vikramaditya Motwane", correct: false }
        ]
    },
    {
        question: "Which actor plays the role of 'Kabir Singh' in the movie of the same name?",
        answers: [
            { text: "Shahid Kapoor", correct: true },
            { text: "Ranveer Singh", correct: false },
            { text: "Arjun Kapoor", correct: false },
            { text: "Ranbir Kapoor", correct: false }
        ]
    },
    {
        question: "Who is the director of the movie 'Andhadhun'?",
        answers: [
            { text: "Sriram Raghavan", correct: true },
            { text: "Anurag Kashyap", correct: false },
            { text: "Dibakar Banerjee", correct: false },
            { text: "Anurag Basu", correct: false }
        ]
    },
    {
        question: "Which Indian movie is based on the life of the Indian mathematician Anand Kumar?",
        answers: [
            { text: "Super 30", correct: true },
            { text: "Ramanujan", correct: false },
            { text: "The Man Who Knew Infinity", correct: false },
            { text: "Shakuntala Devi", correct: false }
        ]
    },
    {
        question: "Who composed the music for the Indian movie 'Swades'?",
        answers: [
            { text: "A.R. Rahman", correct: true },
            { text: "Harris Jayaraj", correct: false },
            { text: "Pritam", correct: false },
            { text: "Vishal-Shekhar", correct: false }
        ]
    },
    {
        question: "Which Bollywood movie is a remake of the Hollywood film 'Knight and Day'?",
        answers: [
            { text: "Bang Bang!", correct: true },
            { text: "Dhoom 3", correct: false },
            { text: "Ek Tha Tiger", correct: false },
            { text: "Race 2", correct: false }
        ]
    },
    {
        question: "Who played the lead role in the movie 'Queen'?",
        answers: [
            { text: "Kangana Ranaut", correct: true },
            { text: "Deepika Padukone", correct: false },
            { text: "Priyanka Chopra", correct: false },
            { text: "Anushka Sharma", correct: false }
        ]
    },
    {
        question: "Which Indian movie is based on the life of the Indian wrestler Mahavir Singh Phogat?",
        answers: [
            { text: "Dangal", correct: true },
            { text: "Sultan", correct: false },
            { text: "Mary Kom", correct: false },
            { text: "Bhaag Milkha Bhaag", correct: false }
        ]
    },
    {
        question: "Who directed the Indian movie 'Padmaavat'?",
        answers: [
            { text: "Sanjay Leela Bhansali", correct: true },
            { text: "Karan Johar", correct: false },
            { text: "Ashutosh Gowariker", correct: false },
            { text: "Rajkumar Hirani", correct: false }
        ]
    },
    {
        question: "Who played the lead role in the Indian movie 'Uri: The Surgical Strike'?",
        answers: [
            { text: "Vicky Kaushal", correct: true },
            { text: "Ranbir Kapoor", correct: false },
            { text: "Ayushmann Khurrana", correct: false },
            { text: "Rajkummar Rao", correct: false }
        ]
    },
    {
        question: "Who directed the Indian movie 'PK'?",
        answers: [
            { text: "Rajkumar Hirani", correct: true },
            { text: "Aamir Khan", correct: false },
            { text: "Karan Johar", correct: false },
            { text: "Sanjay Leela Bhansali", correct: false }
        ]
    },
    {
        question: "In which Indian city is the movie 'Gully Boy' primarily set?",
        answers: [
            { text: "Mumbai", correct: true },
            { text: "Delhi", correct: false },
            { text: "Kolkata", correct: false },
            { text: "Chennai", correct: false }
        ]
    },
    {
        question: "Who played the role of 'Rani Padmavati' in the movie 'Padmaavat'?",
        answers: [
            { text: "Deepika Padukone", correct: true },
            { text: "Kangana Ranaut", correct: false },
            { text: "Priyanka Chopra", correct: false },
            { text: "Anushka Sharma", correct: false }
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
    },
    {
        question: "Who is the current Chief Minister of West Bengal?",
        answers: [
            { text: "Mamata Banerjee", correct: true },
            { text: "Amit Shah", correct: false },
            { text: "Yogi Adityanath", correct: false },
            { text: "Nitin Gadkari", correct: false }
        ]
    },
    {
        question: "Which political party is commonly associated with the symbol 'Hand'?",
        answers: [
            { text: "Shiv Sena", correct: false },
            { text: "Bharatiya Janata Party (BJP)", correct: false },
            { text: "Indian National Congress (INC)", correct: true },
            { text: "Aam Aadmi Party (AAP)", correct: false }
        ]
    },
    {
        question: "Who is the current Chief Minister of Uttar Pradesh?",
        answers: [
            { text: "Yogi Adityanath", correct: true },
            { text: "Mayawati", correct: false },
            { text: "Akhilesh Yadav", correct: false },
            { text: "Rahul Gandhi", correct: false }
        ]
    },
    {
        question: "Which political party is commonly associated with the symbol 'Cycle'?",
        answers: [
            { text: "Bharatiya Janata Party (BJP)", correct: false },
            { text: "Aam Aadmi Party (AAP)", correct: false },
            { text: "Samajwadi Party", correct: true },
            { text: "Indian National Congress (INC)", correct: false }
        ]
    },
    {
        question: "Who is the current Chief Minister of Maharashtra?",
        answers: [
            { text: "Raj Thackeray", correct: false },
            { text: "Devendra Fadnavis", correct: false },
            { text: "Uddhav Thackeray", correct: true },
            { text: "Sharad Pawar", correct: false }
        ]
    },
    {
        question: "Which Indian state is governed by the TRS party?",
        answers: [
            { text: "Kerala", correct: false },
            { text: "Telangana", correct: true },
            { text: "Tamil Nadu", correct: false },
            { text: "Karnataka", correct: false }
        ]
    },
    {
        question: "Who is the current Chief Minister of Bihar?",
        answers: [
            { text: "Lalu Prasad Yadav", correct: false },
            { text: "Nitish Kumar", correct: true },
            { text: "Tejashwi Yadav", correct: false },
            { text: "Sushil Kumar Modi", correct: false }
        ]
    },
    {
        question: "Which political party is commonly associated with the symbol 'Two Leaves'?",
        answers: [
            { text: "Dravida Munnetra Kazhagam (DMK)", correct: false },
            { text: "All India Anna Dravida Munnetra Kazhagam (AIADMK)", correct: true },
            { text: "Shiv Sena", correct: false },
            { text: "Telugu Desam Party (TDP)", correct: false }
        ]
    },
    {
        question: "Who is the current Chief Minister of Kerala?",
        answers: [
            { text: "Rahul Gandhi", correct: false },
            { text: "V.S. Achuthanandan", correct: false },
            { text: "Oommen Chandy", correct: false },
            { text: "Pinarayi Vijayan", correct: true }
        ]
    },
    {
        question: "Which political party is commonly associated with the symbol 'Hand Pump'?",
        answers: [
            { text: "Trinamool Congress (TMC)", correct: false },
            { text: "Rashtriya Janata Dal (RJD)", correct: true },
            { text: "Bahujan Samaj Party (BSP)", correct: false },
            { text: "Janata Dal (United) (JDU)", correct: false }
        ]
    },
    {
        question: "Who is the current Chief Minister of Tamil Nadu?",
        answers: [
            { text: "O. Panneerselvam", correct: false },
            { text: "J. Jayalalithaa", correct: false },
            { text: "K. Palaniswami", correct: false },
            { text: "M.K. Stalin", correct: true }
        ]
    },
    {
        question: "Which political party is commonly associated with the symbol 'Elephant'?",
        answers: [
            { text: "Indian National Congress (INC)", correct: false },
            { text: "Bharatiya Janata Party (BJP)", correct: false },
            { text: "Bahujan Samaj Party (BSP)", correct: true },
            { text: "All India Trinamool Congress (AITC)", correct: false }
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
    },
    {
        question: "What is the main ingredient in the Greek dish 'Moussaka'?",
        answers: [
            { text: "Eggplant", correct: true },
            { text: "Zucchini", correct: false },
            { text: "Tomato", correct: false },
            { text: "Potato", correct: false }
        ]
    },
    {
        question: "Which dairy product is used to make the Italian cheese 'Parmesan'?",
        answers: [
            { text: "Milk", correct: false },
            { text: "Cream", correct: false },
            { text: "Butter", correct: false },
            { text: "Milk curd", correct: true }
        ]
    },
    {
        question: "What is the primary ingredient in the Indian dish 'Dhokla'?",
        answers: [
            { text: "Rice", correct: false },
            { text: "Wheat flour", correct: false },
            { text: "Chickpea flour", correct: true },
            { text: "Cornmeal", correct: false }
        ]
    },
    {
        question: "Which fruit is known as the 'king of fruits' in many South Asian countries?",
        answers: [
            { text: "Mango", correct: true },
            { text: "Papaya", correct: false },
            { text: "Banana", correct: false },
            { text: "Guava", correct: false }
        ]
    },
    {
        question: "What is the main ingredient in the Mexican dish 'Tacos'?",
        answers: [
            { text: "Rice", correct: false },
            { text: "Noodles", correct: false },
            { text: "Tortilla", correct: true },
            { text: "Bread", correct: false }
        ]
    },
    {
        question: "Which vegetable is commonly used to make 'Kimchi', a traditional Korean dish?",
        answers: [
            { text: "Carrot", correct: false },
            { text: "Cabbage", correct: true },
            { text: "Broccoli", correct: false },
            { text: "Zucchini", correct: false }
        ]
    },
    {
        question: "Which Indian dessert is made from vermicelli, milk, and sugar?",
        answers: [
            { text: "Gajar Halwa", correct: false },
            { text: "Ras Malai", correct: false },
            { text: "Seviyan Kheer", correct: true },
            { text: "Halwa", correct: false }
        ]
    },
    {
        question: "What is the main ingredient in the Indian dish 'Dosa'?",
        answers: [
            { text: "Lentils", correct: false },
            { text: "Rice", correct: true },
            { text: "Potato", correct: false },
            { text: "Spinach", correct: false }
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
    },
    {
        question: "What can be caught but never thrown?",
        answers: [
            { text: "A Cold", correct: true },
            { text: "A Ball", correct: false },
            { text: "A Fish", correct: false },
            { text: "A Frisbee", correct: false }
        ]
    },
    {
        question: "What can travel around the world while staying in a corner?",
        answers: [
            { text: "A Stamp", correct: true },
            { text: "A Bird", correct: false },
            { text: "A Letter", correct: false },
            { text: "A Plane", correct: false }
        ]
    },
    {
        question: "What belongs to you, but other people use it more than you do?",
        answers: [
            { text: "Your Name", correct: true },
            { text: "Your House", correct: false },
            { text: "Your Car", correct: false },
            { text: "Your Phone", correct: false }
        ]
    },
    {
        question: "I’m not alive, but I can grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?",
        answers: [
            { text: "A Tree", correct: true },
            { text: "A River", correct: false },
            { text: "A Fish", correct: false },
            { text: "A Plant", correct: false }
        ]
    },
    {
        question: "What has a heart that doesn't beat?",
        answers: [
            { text: "A Robot", correct: false },
            { text: "An Artichoke", correct: false },
            { text: "An Apple", correct: true },
            { text: "A Fish", correct: false }
        ]
    },
    {
        question: "What is always in front of you but can’t be seen?",
        answers: [
            { text: "The Future", correct: true },
            { text: "Your Nose", correct: false },
            { text: "The Sky", correct: false },
            { text: "The Horizon", correct: false }
        ]
    },
    {
        question: "What starts with an 'e' and ends with an 'e' but usually only contains one letter?",
        answers: [
            { text: "Envelope", correct: true },
            { text: "Example", correct: false },
            { text: "Experience", correct: false },
            { text: "Eagle", correct: false }
        ]
    },
    {
        question: "What has a neck but no head?",
        answers: [
            { text: "A Bottle", correct: true },
            { text: "A Giraffe", correct: false },
            { text: "A Snake", correct: false },
            { text: "A Tree", correct: false }
        ]
    },
    {
        question: "What is full of holes but still holds water?",
        answers: [
            { text: "A Sponge", correct: true },
            { text: "A Strainer", correct: false },
            { text: "A Sieve", correct: false },
            { text: "A Teabag", correct: false }
        ]
    },
    {
        question: "What has keys but can't open locks?",
        answers: [
            { text: "A Piano", correct: true },
            { text: "A Computer", correct: false },
            { text: "A Map", correct: false },
            { text: "A Door", correct: false }
        ]
    },
    {
        question: "What can be as big as an elephant but weighs nothing?",
        answers: [
            { text: "A Shadow", correct: true },
            { text: "A Dream", correct: false },
            { text: "A Cloud", correct: false },
            { text: "A Thought", correct: false }
        ]
    },
    {
        question: "What can you hold without ever touching or using your hands?",
        answers: [
            { text: "A Conversation", correct: true },
            { text: "Your Breath", correct: false },
            { text: "A Laugh", correct: false },
            { text: "A Promise", correct: false }
        ]
    },
    {
        question: "What is so fragile that saying its name breaks it?",
        answers: [
            { text: "Silence", correct: true },
            { text: "Glass", correct: false },
            { text: "Egg", correct: false },
            { text: "Mirror", correct: false }
        ]
    },
    {
        question: "What has a thumb and four fingers but is not alive?",
        answers: [
            { text: "A Glove", correct: true },
            { text: "A Hand", correct: false },
            { text: "A Mitten", correct: false },
            { text: "A Puppet", correct: false }
        ]
    },
    {
        question: "I’m light as a feather, yet the strongest person can't hold me for much longer than a minute. What am I?",
        answers: [
            { text: "Breath", correct: true },
            { text: "A Whisper", correct: false },
            { text: "Hope", correct: false },
            { text: "A Bubble", correct: false }
        ]
    },
    {
        question: "What has a face and two hands, but no arms or legs?",
        answers: [
            { text: "A Clock", correct: true },
            { text: "A Coin", correct: false },
            { text: "A Mirror", correct: false },
            { text: "A Mask", correct: false }
        ]
    },
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
    }
];
