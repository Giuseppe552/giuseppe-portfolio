---
title: "How I Built an ATS Resume Scorer in Python"
date: "2025-09-06"
tags: [Python, NLP, ATS, Resume, Streamlit]
repo: ats-resume-scorer
---

![ATS Resume Scorer illustration](/BlogPostImage2.png)


## Starting Out

If you’ve ever sent your CV into the void, you know the feeling. Most resumes get scanned by an ATS (Applicant Tracking System) before a human ever reads them.

These systems check for keywords, skills, and formatting, then spit out a score. The problem? Great candidates get missed all the time just because their resume isn’t “ATS-friendly.”

I wanted to do something about that. So I built a Python tool that checks your resume against a job description and gives you a score.

It’s handy for recruiters who want to quickly rank resumes, for job seekers who want to know if their CV will even get seen, and honestly… for me. Because I love building useful stuff with Python and NLP.

---

## What I Used

| Component         | Purpose                                         | Why It Matters for ATS Scoring                  |
|-------------------|------------------------------------------------|-------------------------------------------------|
| Python            | Core programming language                       | Flexible and widely supported                   |
| spaCy (NLP)       | Text cleaning, lemmatization, entity extraction | Finds real skills, not just word matches        |
| scikit-learn      | TF-IDF vectorization, cosine similarity         | Measures how close your resume matches job      |
| Streamlit         | Web interface                                   | Anyone can use it, no coding required           |
| PyPDF2 / docx2txt | Extracts text from resumes and job descriptions | Handles different file formats reliably         |

## How It Works (in plain English)
- You upload your resume and a job description.
- The app pulls out the raw text from your files.
- It cleans up the text—lowercase, remove stop words, lemmatize.
- It finds the important keywords and skills.
- It turns both texts into vectors (TF-IDF).
- It compares them using cosine similarity and gives you a score out of 100.
- You see the results in a simple dashboard.

---

## What It Looks Like

![CLI Demo](https://raw.githubusercontent.com/Giuseppe552/ats-helper/main/docs/demo/cli_demo.png)

---

## What Was Tricky
- Parsing PDFs: Some layouts are wild. PyPDF2 worked best after a lot of testing.
- Keyword extraction: It's not just about matching words—NLP helps get the real meaning.
- User experience: I wanted anyone to use it, no Python install needed. Streamlit made that easy.

---

## What I Learned
- Most NLP is about cleaning up your data, not fancy models.
- Small tools like this solve real problems for real people.
- If your UI isn't clean, nobody cares how smart your code is.

---


---



## Wrapping Up
This tool isn't going to replace recruiters, but it helps both sides see things more clearly. I got to flex my Python and NLP skills, and I built something useful. If you're into hiring tech or want to chat about automation, reach out.

[View on GitHub](https://github.com/Giuseppe552/ats-helper)


---


## Common Questions About ATS and Resume Scoring

1. What is an ATS resume score?
An ATS (Applicant Tracking System) resume score shows how well your CV matches a job description based on keywords, skills, and formatting. Recruiters use it to filter candidates quickly.

2. How can I make my resume ATS-friendly?
Use simple formatting, include relevant keywords from the job posting, and avoid complex graphics or tables that ATS systems can’t read.

3. Why do resumes get rejected by ATS?
Common reasons include missing keywords, unusual formatting, unsupported file types, or text inside images that can’t be read.

4. Can a Python ATS tool really help job seekers?
Yes — it gives instant feedback on whether your resume aligns with the job description, helping you adjust before you apply.

5. Do recruiters only use ATS scores to hire?
No — ATS is just the first filter. A strong score helps your CV get seen by a human, but recruiters still care about experience, interviews, and culture fit.