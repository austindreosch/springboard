from cgitb import text
from flask import Flask, request, render_template
from random import randint,  choice, sample
from stories import story, story2, story3

app = Flask(__name__)


@app.route('/')
def home_page():
    """Shows home page."""
    return render_template('base.html')


@app.route('/madlibs')  # first version
def madlibs_main():
    """Shows madlibs main page."""
    prompts = story.prompts
    return render_template('madlibs.html', prompts=prompts)


@app.route('/story')  # first version
def madlibs_story():
    """Shows the completed madlibs page."""
    text = story.generate(request.args)
    return render_template("story.html", text=text)

##############################################


@app.route('/madlibselect')  # fs version
def madlibs_select():
    """Shows madlibs main page."""
    return render_template('madlibs_select.html')


@app.route('/madlibs_fill')  # first version
def madlibs_fill():
    """Shows madlibs main page."""
    prompts = story.prompts
    return render_template('madlibs_fill.html', prompts=prompts)


@app.route('/story1')  # fs version
def madlibs_story1():
    """Shows the completed madlibs page 1."""
    storynum = 'story1'
    text = story.generate(request.args)
    return render_template("story.html", text=text, storynum=storynum)


@app.route('/story2')  # fs version
def madlibs_story2():
    """Shows the completed madlibs page 2."""
    storynum = 'story2'
    text = story2.generate(request.args)
    return render_template("story.html", text=text, storynum=storynum)


@app.route('/story3')  # fs version
def madlibs_story3():
    """Shows the completed madlibs page 3."""
    storynum = 'story3'
    text = story3.generate(request.args)
    return render_template("story.html", storynum=storynum)

##########################################################

# @app.route('/')
# def home_page():
#     """Shows home page"""
#     return render_template('base.html')


# @app.route('/form')
# def show_form():
#     """Shows greeter Form"""
#     return render_template("form.html")


# COMPLIMENTS = ["cool", "clever", "tenacious", "awesome", "incredible"]


# @app.route('/greet')
# def get_greeting():
#     """Greets and optionally compliments(3 random compliments) a user"""
#     username = request.args["username"]
#     wants = request.args.get("wants_compliments")
#     nice_things = sample(COMPLIMENTS, 3)
#     return render_template("greet.html", username=username, wants_compliments=wants, compliments=nice_things)


# @app.route('/lucky')
# def lucky_number():
#     """Shows a random number to a user"""
#     num = randint(1, 10)
#     return render_template('lucky.html', lucky_num=num, msg="You are so lucky!")


# @app.route('/hello')
# def say_hello():
#     """Shows hello page"""
#     return render_template("hello.html")
