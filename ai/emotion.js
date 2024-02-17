const client = require('./gpt-4').client;
/***
 * {
    "Question 1" : "How have you been feeling emotionally lately?",
    "Answer 1": "Lately, I've been feeling a mix of emotions, fluctuating between feeling content and moments of anxiety due to various personal and professional challenges.",
    "Question 2" : "Can you describe your typical daily mood?",
    "Answer 2": "My typical daily mood tends to be fairly stable, with a general sense of optimism, though I occasionally experience stress-related dips.",
    "Question 3" : "Have you noticed any changes in your sleep patterns (e.g., difficulty falling asleep, waking up frequently, sleeping too much)?",
    "Answer 3": "Yes, I've noticed some changes in my sleep patterns, including difficulty falling asleep and waking up a few times during the night, which seems to be linked to my current stress levels.",
    "Question 4" : "How would you rate your overall stress level?",
    "Answer 4": "I would rate my overall stress level as moderate. While I manage to cope with most day-to-day tasks, there are moments when stress becomes more pronounced.",
    "Question 5" : "Are there any specific situations or events that have been causing you distress?",
    "Answer 5": "Specific situations causing me distress include looming work deadlines and personal commitments. Balancing these responsibilities has been particularly challenging lately."
}
*/

qna_list = [
    {
        "Question" : "How have you been feeling emotionally lately?",
        "Answer": "Lately, I've been feeling a mix of emotions, fluctuating between feeling content and moments of anxiety due to various personal and professional challenges.",
    },
    {
        "Question" : "Can you describe your typical daily mood?",
        "Answer": "My typical daily mood tends to be fairly stable, with a general sense of optimism, though I occasionally experience stress-related dips.",
    },
    {
        "Question" : "Have you noticed any changes in your sleep patterns (e.g., difficulty falling asleep, waking up frequently, sleeping too much)?",
        "Answer": "Yes, I've noticed some changes in my sleep patterns, including difficulty falling asleep and waking up a few times during the night, which seems to be linked to my current stress levels.",
    },
    {
        "Question" : "How would you rate your overall stress level?",
        "Answer": "I would rate my overall stress level as moderate. While I manage to cope with most day-to-day tasks, there are moments when stress becomes more pronounced.",
    },
    {
        "Question" : "Are there any specific situations or events that have been causing you distress?",
        "Answer": "Specific situations causing me distress include looming work deadlines and personal commitments. Balancing these responsibilities has been particularly challenging lately."
    }
]

getEmotionProbDist = async (qna_list) => {
    let messages= [
        { role : "system", content: "You are a psychologist."},
        { role : "system", content: "You are talking to a patient."},
        { role : "system", content: "You are trying to understand the patient's emotions."},
        { role : "system", content: "You will quanitify the patient's emotions from these qusetions and answers."},
        { role : "system", content: "You will provide only probability distribution for each emotion Depression, Anxiety, Stress, Contentment, Happiness, Anger, Fatigue, Neutral in json format."},
    ]
    for (let i = 0; i < qna_list.length; i++) {
        let question = qna_list[i].Question;
        let answer = qna_list[i].Answer;
        messages.push({ role: "system", content: question });
        messages.push({ role: "user", content: answer });
    }
    let completion = await client.chat.completions.create({
        model: "gpt-4",
        messages : messages
        
    });
    return completion.choices[0].message.content;
    // console.log(completion.choices[0].message.content);
}

module.exports = { 
    getEmotionProbDist

}

// getEmotionProbDist(qna_list);