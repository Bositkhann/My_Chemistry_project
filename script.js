const questions = [
  
   
        
    { question: "Suvning kimyoviy formulasi H₂O.", answer: true },
    { question: "Temirning kimyoviy belgisi Fe.", answer: true },
    { question: "Oksidlanish - bu moddaning vodorod bilan birikishi.", answer: false },
    { question: "Karbonat kislotasining formulasi H₂CO₃.", answer: true },
    { question: "Natriy gidroksidining formulasi NaOH.", answer: true },
    { question: "Metallar elektr o'tkazmaydi.", answer: false },
    { question: "Oksidlar - bu kislorod bilan bog'langan elementlar.", answer: true },
    { question: "Suv elektrolizida faqat vodorod gaz ajralib chiqadi.", answer: false },
    { question: "Kislorodning kimyoviy belgisi O.", answer: true },
    { question: "Kislotalar nordon ta'mga ega.", answer: true },
    { question: "Molekula faqat bitta atomdan iborat bo'lishi mumkin.", answer: false },
    { question: "Kimyoviy reaksiya yangi moddalar hosil qiladigan jarayon.", answer: true },
    { question: "Metallar zanglamaydi.", answer: false },
    { question: "Olov chiqishi ekzotermik reaksiyadir.", answer: true },
    { question: "Vodorod engil gazlardan biridir.", answer: true },
    { question: "Ionlar - bu neytral zaryadlangan zarrachalar.", answer: false },
    { question: "Kimyo moddalarning xususiyatlarini o'rganuvchi fandir.", answer: true },
    { question: "Molekula atomlarning kimyoviy birikmasidir.", answer: true },
    { question: "Suvning formulasi NaCl.", answer: false },
    { question: "Azotning kimyoviy belgisi N.", answer: true },
    { question: "Metallar plastiklikka ega emas.", answer: false },
    { question: "Sulfat kislotasining formulasi H₂SO₄.", answer: true },
    { question: "Olov chiqmagan reaksiya ekzotermik deyiladi.", answer: false },
    { question: "Ion almashinuvi suvda erigan moddalarda sodir bo'ladi.", answer: true },
    { question: "Vodorod oksidlovchi xususiyatga ega.", answer: false },
    { question: "Temirning atom raqami 26.", answer: true },
    { question: "CO₂ - karbonat angidrid.", answer: true },
    { question: "Metallar o'zlariga xos metall bog'lanishga ega.", answer: true },
    { question: "Oksidlanish darajasi elektron yo'qotishni anglatadi.", answer: true },
    { question: "Kislorod atom raqami 8 ga teng.", answer: true },
    { question: "Natriy gidroksidi kuchsiz asosdir.", answer: false },
    { question: "Kimyoviy reaksiyaning tezligi haroratga bog'liq emas.", answer: false },
    { question: "Elektrolitlar suvda ionlarga ajraladi.", answer: true },
    { question: "Vodorodning atom raqami 2.", answer: false },
    { question: "Xlor gazining kimyoviy formulasi Cl₂.", answer: true },
    { question: "Kovalent bog' atomlar orasidagi elektronlar almashinuvidir.", answer: true },
    { question: "NaOH asos hisoblanadi.", answer: true },
    { question: "CO₂ qattiq holatda.", answer: false },
    { question: "Kislotaning vodorod ionlari bilan reaksiyaga kirishishi neytralizatsiya deyiladi.", answer: true },
    { question: "Kimyoviy tenglama - bu kimyoviy reaksiyani ifodalovchi yozuv.", answer: true },
    { question: "Temirning oksidlanishi zanglash deyiladi.", answer: true },
    { question: "Metallar kislorod bilan reaksiyaga kirishganda oksidlanadi.", answer: true },
    { question: "Kimyoviy elementlar davriy jadvali Mendeleyev tomonidan yaratilgan.", answer: true },
    { question: "H₂SO₄ suvsiz modda.", answer: false },
    { question: "Kimyoviy bog'lanishlar atomlar orasidagi o'zaro ta'sirdir.", answer: true },
    { question: "Ionlar har doim musbat zaryadlangan bo'ladi.", answer: false },
    { question: "Metallar elektr toki o'tkazmaydi.", answer: false },
    { question: "Oksidlar - bu faqat birikmalar.", answer: false },
    { question: "Suv suyuq modda.", answer: true }
    ];
    


let currentQuestion = 0;

function getRandomQuestion() {
    currentQuestion = Math.floor(Math.random() * questions.length);
    showQuestion();
}

function showQuestion() {
    document.getElementById("question").innerText = questions[currentQuestion].question;
    document.getElementById("feedback").innerText = "";
}

document.getElementById("yes").addEventListener("click", function() {
    checkAnswer(true);
});

document.getElementById("no").addEventListener("click", function() {
    checkAnswer(false);
});

document.getElementById("next").addEventListener("click", getRandomQuestion);

function checkAnswer(userAnswer) {
    if (userAnswer === questions[currentQuestion].answer) {
        document.getElementById("feedback").innerText = "Barakalla!";
    } else {
        document.getElementById("feedback").innerText = "Noto'g'ri , to'g'ri javob: " + (questions[currentQuestion].answer ? "Ha" : "Yo'q");
    }
}

// Показать первый вопрос при загрузке страницы
getRandomQuestion();
