from flask import Flask, render_template, request, redirect, flash, session, config
from flask_debugtoolbar import DebugToolbarExtension
from surveys import satisfaction_survey as survey

app = Flask(__name__)
app.config['SECRET_KEY'] = "austin"
debug = DebugToolbarExtension(app)


responses = []
currentNum = 0
RESPONSES_KEY = "responses"


@app.route('/')
def show_home():
    """Main home page viewing."""
    global responses
    answers = responses
    responses = []
    instruction_text = str(survey.instructions)
    return render_template('base.html', instruction_text=instruction_text, answers=answers)


@app.route('/questions/1')
def question1():
    if len(responses) == 0:
        answers = responses
        global currentNum
        currentNum = 1
        question = survey.questions[0].question
        choices = survey.questions[0].choices
        return render_template('questions.html', question=question, num=currentNum, choices=choices, answers=answers)
    else:
        flash(f"Invalid question ID. Please take the survey in sequential order.")
        return redirect("/")


@app.route('/questions/2')
def question2():
    if len(responses) == 1:
        answers = responses
        global currentNum
        currentNum = 2
        question = survey.questions[1].question
        choices = survey.questions[1].choices
        return render_template('questions.html', question=question, num=currentNum, choices=choices, answers=answers)
    else:
        flash(f"Invalid question ID. Please take the survey in sequential order.")
        return redirect("/")


@app.route('/questions/3')
def question3():
    if len(responses) == 2:
        answers = responses
        global currentNum
        currentNum = 3
        question = survey.questions[2].question
        choices = survey.questions[2].choices
        return render_template('questions.html', question=question, num=currentNum, choices=choices, answers=answers)
    else:
        flash(f"Invalid question ID. Please take the survey in sequential order.")
        return redirect("/")


@app.route('/questions/4')
def question4():
    if len(responses) == 3:
        answers = responses
        global currentNum
        currentNum = 4
        question = survey.questions[3].question
        choices = survey.questions[3].choices
        return render_template('questions.html', question=question, num=currentNum, choices=choices, answers=answers)
    else:
        flash(f"Invalid question ID. Please take the survey in sequential order.")
        return redirect("/")


@app.route('/questions/5')
def question5():
    return redirect('/thankyou')


@app.route('/thankyou')
def thankyou_page():
    answers = responses
    session[RESPONSES_KEY] = responses
    return render_template('thankyou.html', answers=answers)


@app.route("/answer", methods=["POST"])
def post_answer():
    choice = request.form['answer']
    responses.append(choice)
    global currentNum
    newPageNum = currentNum + 1
    # return redirect('/questions/{newPageNum}')
    return redirect(f"/questions/{newPageNum}")
