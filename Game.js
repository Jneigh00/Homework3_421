const {createApp} = Vue;

createApp({
    data(){
        return{
            questions:[
                {
                    question: "Who was the first president of the United States?",
                    answers: ["A. John Adams", "B. John F Kennedy", "C. George Washington", "D. Donald Trump"],
                    correctAnswer: "C. George Washington",
                    score: 100,
                },
                {
                    question: "What is the only day that Chick-Fil-A is not open?",
                    answers: ["A. Sunday", "B. Saturday", "C. Friday", "D. Thursday"],
                    correctAnswer: "A. Sunday",
                    score: 200
                },
                {
                    question: "Who makes the Avengers?",
                    answers: ["A. Marvel", "B. DC", "C. Pixar", "D. Dreamworks"],
                    correctAnswer: "A. Marvel",
                    score: 300
                },
                {
                    question: "Which actor played Iron Man in the 2008 Film 'Iron Man'?",
                    answers: ["A. Chris Pratt", "B. George Lucas", "Lebron James", "D. Robert Downey Jr"],
                    correctAnswer: "D. Robert Downey Jr",
                    score: 500
                },
                {
                    question: "Who is the NBA All-Time leader in Steals?",
                    answers: ["A. Jason Kidd", "B. Steve Nash", "C. John Stockton", "D. Lebron James"],
                    correctAnswer: "C. John Stockton",
                    score: 1000
                },
                {
                    question: "People with what blood type are considered universal donors?",
                    answers: ["A. AB", "B. O+", "C. O-", "D. B"],
                    correctAnswer: "C. O-",
                    score: 2000
                },
                {
                    question: "What is the last letter of the Greek alphabet?",
                    answers: ["A. Alpha", "B. Omega", "C. Beta", "D. Omicron"],
                    correctAnswer: "B. Omega",
                    score: 4000
                },
                {
                    question: "What is the highest-grossing holiday movie of all time?",
                    answers: ["A. Elf", "B. The Grinch (Jim Carrey)", "C. Home Alone", "D. Die Hard"],
                    correctAnswer: "B. Home Alone",
                    score: 8000
                },
                {
                    question: "Who was Saturday Night Live's first celebrity host?",
                    answers: ["A. Will Farrel", "B. Harrison Ford", "C. George Carlin", "D. Joe Biden"],
                    correctAnswer: "C. George Carlin",
                    score: 16000
                },
                {
                    question: "What was Walt Disney afraid of?",
                    answers: ["A. Spiders", "B. Clowns", "C. Mice", "D. heights"],
                    correctAnswer: "C. Mice",
                    score: 32000
                },
                {
                  question: "Which soft drink was invented during WW2?",
                    answers: ["A. Coke", "B. Pepsi", "C. Fanta", "D. Sprite"] ,
                    correctAnswer: "C. Fanta",
                    score: 64000
                },
                {
                    question: "What is the number 1 seller in Walmart? ",
                    answers: ["A. Bananas", "B. Toilet Paper", "C. Flat Screen TVs", "D. Sushi"] ,
                    correctAnswer: "A. Bananas",
                    score: 125000
                },
                {
                    question: "With which sport would you have associated Jocky Wilson?",
                    answers: ["A. Football", "B. Hockey", "C. Tennis", "D. Darts"] ,
                    correctAnswer: "D. Darts",
                    score: 250000
                },
                {
                    question: "Which fast-food company piloted a chicken-flavored nail polish?",
                    answers: ["A. Popeye's", "B. KFC", "C. Chick-Fil-A", "D. Burger King"] ,
                    correctAnswer: "B. KFC",
                    score: 500000
                },
                {
                    question: "Deglutition is the scientific term for what common bodily function that humans do hundreds of times a day?",
                    answers: ["A. Blinking", "B. Breathing", "C. Swallowing", "D. Burping"] ,
                    correctAnswer: "C. Swallowing",
                    score: 1000000
                }
            ],
            questionNum: 1,
            playerScore: 0
        }
    },
    methods: {
        startGame: function (){
            playerName = document.getElementById("playername").value.toString()
            console.log(playerName)
            document.getElementById("start").innerHTML = ""
            document.getElementById("game").style.visibility = "visible"
        },
        checkAnswer: function (choosenAnsw){
           let correctAns =  this.questions[this.questionNum -1].correctAnswer
            if(choosenAnsw == correctAns.substring(0,1)){
                this.playerScore += this.questions[this.questionNum -1].score
                this.questionNum++;
            }
        }
    }
}).mount("#app")