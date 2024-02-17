const client = require('./gpt-4').client;

qna_list = [
    {
        "Question":"Can you describe your approach and experience in treating clients with depression?",
        "Answer" : "I've been utilizing Cognitive Behavioral Therapy (CBT) and Interpersonal Therapy (IPT) for over 10 years to treat clients with depression. I also stay updated with the latest research to integrate evidence-based practices, such as mindfulness-based cognitive therapy, into my treatment plans."
    },
    {
        "Question":"How do you approach treating clients with anxiety?",
        "Answer" : "I typically use a combination of CBT and exposure therapy to treat clients with anxiety. I also incorporate relaxation techniques and stress management strategies to help clients manage their symptoms."
    },
    {
        "Question":"What strategies do you use to help clients reduce stress?",
        "Answer" : "I use a variety of stress reduction techniques, such as deep breathing exercises, progressive muscle relaxation, and guided imagery. I also help clients identify and challenge negative thought patterns that contribute to their stress."
    },
    {
        "Question":"How do you help clients enhance their contentment and overall well-being?",
        "Answer" : "I help clients enhance their contentment by focusing on gratitude, self-compassion, and savoring positive experiences. I also encourage clients to engage in activities that bring them joy and fulfillment."
    },
    {
        "Question":"What methods do you use to promote happiness in your clients?",
        "Answer" : "I use a variety of evidence-based methods to promote happiness, such as positive psychology interventions, behavioral activation, and cognitive restructuring. I also help clients identify and leverage their strengths to increase their overall happiness."
    },
    {
        "Question":"How do you help clients manage their anger?",
        "Answer" : "I help clients manage their anger by teaching them effective communication skills, assertiveness training, and anger management techniques. I also help clients identify and address the underlying causes of their anger."
    },
    {
        "Question":"What approaches do you use to alleviate fatigue in your clients?",
        "Answer" : "I use a combination of cognitive-behavioral and mindfulness-based approaches to alleviate fatigue in my clients. I also help clients identify and address lifestyle factors that may be contributing to their fatigue."
    },
    {
        "Question":"How do you maintain neutrality and objectivity in your practice?",
        "Answer" : "I maintain neutrality and objectivity in my practice by staying informed about cultural and social issues that may impact my clients. I also engage in regular supervision and consultation to ensure that my biases do not interfere with the therapeutic process."
    }
]

async function getQualification(qna_list) {
    let messages = [
        { role: "system", content: "You are a psychologist." },
        { role: "system", content: "You are talking to a potential psychological supporter." },
        { role: "system", content: "You are trying to evaluate." },
        { role: "system", content: "You will quanitify from these qusetions and answers." },
        { role: "system", content: "You will provide only score between 0 to 1 for each field Depression management, \
        Anxiety management, Stress reduction, Enhancing contentment, Promoting happiness, Anger management, \
        Fatigue Alleviation, Maintaining neutrality in json format." }
    ];
    for (let i = 0; i < qna_list.length; i++) {
        let question = qna_list[i].Question;
        let answer = qna_list[i].Answer;
        messages.push({ role: "system", content: question });
        messages.push({ role: "user", content: answer });
    }
    let completion = await client.chat.completions.create({
        model: "gpt-4",
        messages: messages
    });
    // console.log(completion.choices[0].message.content);
    return completion.choices[0].message.content;
}

// q = getQualification(qna_list);

module.exports = {
    getQualification
}