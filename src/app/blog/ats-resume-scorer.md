---
title: "How I Built an ATS Resume Scorer in Python"
date: "2025-09-06"
tags: [Python, NLP, ATS, Resume, Streamlit]
repo: ats-resume-scorer
---


If you’ve ever sent your CV into the void, you know the feeling. Most resumes get scanned by an ATS (Applicant Tracking System) before a human ever reads them.

These systems check for keywords, skills, and formatting, then spit out a score. The problem? Great candidates get missed all the time just because their resume isn’t “ATS-friendly.”

I wanted to do something about that. So I built a Python tool that checks your resume against a job description and gives you a score.

It’s handy for recruiters who want to quickly rank resumes, for job seekers who want to know if their CV will even get seen, and honestly… for me. Because I love building useful stuff with Python and NLP.

---

## What I Used
I kept the tech stack lean:
- **Python** for the core logic
- **spaCy** for natural language processing (entity extraction, lemmatization)
- **scikit-learn** for TF-IDF and cosine similarity
- **Streamlit** for a dead-simple UI (just upload your files and go)
- **PyPDF2 / docx2txt** for parsing PDFs and Word docs

---

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
![ATS Resume Scorer Demo](https://raw.githubusercontent.com/Giuseppe552/ats-resume-scorer/main/demo.png)

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


