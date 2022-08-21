from boggle import Boggle
from flask import Flask, render_template, request, redirect, flash, session, config, jsonify
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
boggle_game = Boggle()
app.config["SECRET_KEY"] = "cheese"


@app.route('/')
def show_home():
    """Main home page viewing."""

    board = boggle_game.make_board()
    session['board'] = board
    highscore = session.get('highscore', 0)
    nplays = session.get('nplays', 0)

    return render_template('index.html', board=board, highscore=highscore, nplays=nplays)


@app.route('/')
