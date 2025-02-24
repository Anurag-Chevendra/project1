const questionElement = document.getElementById('question');
const answerInput = document.getElementById('answer');
const okButton = document.getElementById('ok-button');
const questionContainer = document.querySelector('.question-container');
const questionForm = document.getElementById('question-form'); // Get the form element
const radioContainer = document.getElementById('radio-container');
const radioContainer_introvert = document.getElementById('radio-container-introvert');  
const radioContainerStress = document.getElementById('radio-container-stress');
const radioContainerRoutineandstruct = document.getElementById('radio-container-routine-and-structure');
const radioContainerEmotions = document.getElementById('radio-container-emotions');
const radioContainerLoveLang = document.getElementById('radio-container-love-lang');
const radioContainerExpEmotion = document.getElementById('radio-container-exp-affection');
const radioContainerRomaticGesture = document.getElementById('radio-container-romantic-gesture');
const radioContainerCommitment = document.getElementById('radio-container-commitment');
const radioContainerFear = document.getElementById('radio-container-fear');

const questions = [
    "What is your name?",
    "How old are you?",
    "What is your profession?",
    "What is your star sign (and birthday)?",
    "Where do you currently reside (city/area)?",
    "On a scale of 1 to 5, how open are you to trying new experiences?",     // Add this new question
    "Do you consider yourself more of an introvert or an extrovert?",
    "How do you handle stressful situations?",
    "Do you prefer routine and structure, or are you spontaneous?",
    "How do you express emotions in a relationship?",
    "Which of these means the most to you in a relationship?",
    "How do you like to express affection to your partner?",
    "What’s your idea of a perfect romantic gesture?",
    "How do you feel about commitment in relationships?",
    "What is your greatest fear in relationships?"
    
];


const questionTypes_radio = {
    0: 'text',
    1: 'text',
    2: 'text',
    3: 'text',
    4: 'text',
    5: 'radio',
    6: 'radio_introvert', 
    7: 'radio_stress_handling', 
    8: 'radio_routine_and_structure',
    9: 'radio_express_emotions',
    10: 'radio-container-love-lang',
    11: 'radio-container-exp-affection',
    12: 'radio-container-romantic-gesture',
    13: 'radio-container-commitment',
    14: 'radio-container-fear'
};
function proceedToTnC(){
    window.location.href="t&c.html";
}
let currentQuestionIndex = 0;
const answers = []; 
function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionElement.textContent = (currentQuestionIndex + 1) + '. ' + questions[currentQuestionIndex];
        
        // Hide all input containers first
        answerInput.style.display = 'none';
        radioContainer.style.display = 'none';
        radioContainer_introvert.style.display = 'none';
        radioContainerStress.style.display = 'none';
        radioContainerRoutineandstruct.style.display = 'none';
        radioContainerEmotions.style.display = 'none';
        radioContainerLoveLang.style.display = 'none';
        radioContainerExpEmotion.style.display = 'none';
        radioContainerRomaticGesture.style.display = 'none';
        radioContainerCommitment.style.display = 'none';
        radioContainerFear.style.display = 'none';
        // Show the appropriate input type based on the question
        const questionType = questionTypes_radio[currentQuestionIndex];
        
        switch(questionType) {
            case 'text':
                answerInput.style.display = 'block';
                answerInput.value = "";
                break;
            case 'radio':
                radioContainer.style.display = 'block';
                clearRadioSelection();
                break;
            case 'radio_introvert':
                radioContainer_introvert.style.display = 'block';
                clearRadioSelection();
                break;
            case 'radio_stress_handling':
                radioContainerStress.style.display = 'block';
                clearRadioSelection();
                break;
            case 'radio_routine_and_structure':
                radioContainerRoutineandstruct.style.display = 'block';
                clearRadioSelection();
                break;
            case 'radio_express_emotions' :
                radioContainerEmotions.style.display = 'block';
                clearRadioSelection();
                break;
            case 'radio-container-routine-and-structure' :
                radioContainerRoutineandstruct.style.display = 'block';
                clearRadioSelection();
                break;
            case 'radio-container-emotions':
                radioContainerEmotions.style.display = 'block';
                clearRadioSelection();
                break;
            case 'radio-container-love-lang':
                radioContainerLoveLang.style.display = 'block';
                clearRadioSelection();
                break;
            case 'radio-container-exp-affection':
                radioContainerExpEmotion.style.display = 'block';
                clearRadioSelection();
                break;
            case 'radio-container-romantic-gesture':
                radioContainerRomaticGesture.style.display = 'block';
                clearRadioSelection();
                break;
            case 'radio-container-commitment':
                radioContainerCommitment.style.display = 'block';
                clearRadioSelection();
                break;
            case 'radio-container-fear':
                radioContainerFear.style.display = 'block';
                clearRadioSelection();
                break;

        }
    } else {
        // Survey is complete
        questionElement.textContent = "Thank you for answering!";
        questionElement.classList.add('thank-you-message');
        okButton.onclick = function(){
            window.location.href = "t&c.html";
        }
        // Hide all input types
        answerInput.style.display = "none";
        radioContainer.style.display = "none";
        radioContainer_introvert.style.display = 'none';
        radioContainerStress.style.display = 'none';
        radioContainerRoutineandstruct.style.display = 'none';
        radioContainerEmotions.style.display = 'none';
        radioContainerLoveLang.style.display = 'none';
        radioContainerExpEmotion.style.display = 'none';
        radioContainerRomaticGesture.style.display = 'none';
        radioContainerCommitment.style.display = 'none';
        radioContainerFear.style.display = 'none';
        //okButton.style.display = "none";

        // Submit the form with all answers
        submitForm();
    }
}
// Add new function to get the current answer
function getAnswer() {
    
    if (questionTypes_radio[currentQuestionIndex] === 'radio') {
        const selectedRadio = document.querySelector('input[name="scale"]:checked');
        answerInput.value = selectedRadio ? selectedRadio.value : null;
        console.log(answerInput.value);
    }
    if (questionTypes_radio[currentQuestionIndex] === 'radio_introvert') {
        const selectedRadio = document.querySelector('input[name="scale"]:checked');
        answerInput.value =  selectedRadio ? selectedRadio.value : null;
        console.log(answerInput.value);
    }
    if (questionTypes_radio[currentQuestionIndex] === 'radio_stress_handling') {
        const selectedRadio = document.querySelector('input[name="scale"]:checked');
        answerInput.value =  selectedRadio ? selectedRadio.value : null;
        console.log(answerInput.value);
    }
    if (questionTypes_radio[currentQuestionIndex] === 'radio_routine_and_structure') {
        const selectedRadio = document.querySelector('input[name="scale"]:checked');
        answerInput.value =  selectedRadio ? selectedRadio.value : null;
        console.log(answerInput.value);
    }
    if (questionTypes_radio[currentQuestionIndex] === 'radio_express_emotions') {
        const selectedRadio = document.querySelector('input[name="scale"]:checked');
        answerInput.value =  selectedRadio ? selectedRadio.value : null;
        console.log(answerInput.value);
    }
    if (questionTypes_radio[currentQuestionIndex] === 'radio-container-love-lang') {
        const scale1 = document.querySelector('input[name="scale1"]:checked') ;
        const scale2 = document.querySelector('input[name="scale2"]:checked') ;
        const scale3 = document.querySelector('input[name="scale3"]:checked') ;
        const scale4 = document.querySelector('input[name="scale4"]:checked') ;
        const scale5 = document.querySelector('input[name="scale5"]:checked') ;
        var final = "";
        if(scale1!=null){
            final=final+scale1.value+",";
        }
        if(scale2!=null){
            final=final+scale2.value+',';
        }
        if(scale3!=null){
            final=final+scale3.value+',';
        }
        if(scale4!=null){
            final=final+scale4.value+',';
        }
        if(scale5!=null){
            final=final+scale5.value+',';
        }
        
        console.log(final.substring(0, final.length -1));
        answerInput.value = final.substring(0, final.length -1);
        console.log(answer);
    }
    if (questionTypes_radio[currentQuestionIndex] === 'radio-container-exp-affection') {
        const scale1 = document.querySelector('input[name="scale1"]:checked') ;
        const scale2 = document.querySelector('input[name="scale2"]:checked') ;
        const scale3 = document.querySelector('input[name="scale3"]:checked') ;
        const scale4 = document.querySelector('input[name="scale4"]:checked') ;
        const scale5 = document.querySelector('input[name="scale5"]:checked') ;
        var final = "";
        if(scale1!=null){
            final=final+scale1.value+",";
        }
        if(scale2!=null){
            final=final+scale2.value+',';
        }
        if(scale3!=null){
            final=final+scale3.value+',';
        }
        if(scale4!=null){
            final=final+scale4.value+',';
        }
        if(scale5!=null){
            final=final+scale5.value+',';
        }
        
        console.log(final.substring(0, final.length -1));
        answerInput.value = final.substring(0, final.length -1);
        console.log(answer);
    }
    if (questionTypes_radio[currentQuestionIndex] === 'radio-container-romantic-gesture') {
        const scale1 = document.querySelector('input[name="scale1"]:checked') ;
        const scale2 = document.querySelector('input[name="scale2"]:checked') ;
        const scale3 = document.querySelector('input[name="scale3"]:checked') ;
        const scale4 = document.querySelector('input[name="scale4"]:checked') ;
  
        var final = "";
        if(scale1!=null){
            final=final+scale1.value+",";
        }
        if(scale2!=null){
            final=final+scale2.value+',';
        }
        if(scale3!=null){
            final=final+scale3.value+',';
        }
        if(scale4!=null){
            final=final+scale4.value+',';
        }
                
        console.log(final.substring(0, final.length -1));
        answerInput.value = final.substring(0, final.length -1);
        console.log(answer);
    }
    if (questionTypes_radio[currentQuestionIndex] === 'radio-container-commitment') {
        const selectedRadio = document.querySelector('input[name="scale"]:checked');
        answerInput.value =  selectedRadio ? selectedRadio.value : null;
        console.log(answerInput.value);
    }
    if (questionTypes_radio[currentQuestionIndex] === 'radio-container-fear') {
        const selectedRadio = document.querySelector('input[name="scale"]:checked');
        answerInput.value =  selectedRadio ? selectedRadio.value : null;
        console.log(answerInput.value);
    }
    

    return answerInput.value;
}
function clearRadioSelection() {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    
    radioButtons.forEach(radio => radio.checked = false);
}
function submitForm() {
    console.log("in submit");
    
    // Create a data object to send to the server
    const data = {
        question1: answers[0],
        question2: answers[1],
        question3: answers[2],
        question4: answers[3],
        question5: answers[4],
        question6: answers[5], 
        question7: answers[6],
        question8: answers[7],
        question9: answers[8],
        question10: answers[9],
        question11: answers[10],
        question12: answers[11],
        question13: answers[12],
        question14: answers[13],
        question15: answers[14]
    };

    // Use fetch API to send the data
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded', // important for body-parser
        },
        body: new URLSearchParams(data).toString() // Encode the data
    })
    .then(response => response.text())
    .then(data => {
        //alert(data); // Show success message
        console.log("Completed");
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error submitting answers.');
    });
}

okButton.addEventListener('click', () => {
    // Store the answer
    const answer = getAnswer();

    // Store the answer
    answers.push(answer);
    console.log(answers);
    
    answerInput.value = ""
    // Trigger slide out animation
    questionContainer.classList.add('slide-out');

    // After the slide out animation, change the question and slide in
    setTimeout(() => {
        questionContainer.classList.remove('slide-out');
        currentQuestionIndex++;
        showQuestion();
        if (currentQuestionIndex < questions.length) {
            questionContainer.classList.add('slide-in');
            setTimeout(() => {
                questionContainer.classList.remove('slide-in');
            }, 500); //remove slide-in class after animation is done
        }
    }, 500); // Wait for the slide out animation to complete
});

questionForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
});

showQuestion(); // Initial call to display the first question
