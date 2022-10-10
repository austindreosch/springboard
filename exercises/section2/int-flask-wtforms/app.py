"""Blogly application."""

from flask import Flask, request, render_template,  redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from forms import AddSnackForm
from models import db, connect_db, Pet

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///adopt'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "chickenzarecool21837"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)
db.create_all()

# used to be "/"


@app.route('/list')
def list_users():
    """Shows list of all users in db, on the main directory.
    """
    pets = Pet.query.all()
    return render_template('list.html', pets=pets)


@app.route('/home')
def show_home_page():
    return render_template('home.html')


@app.route('/')
def add_new_snack():
    form = AddSnackForm()

    return render_template('add_snack_form.html', form=form)


@app.route('/snacks/new', methods=["GET", "POST"])
def add_new_snack_post():
    form = AddSnackForm()

    if form.validate_on_submit():
        name = form.name.data
        price = form.price.data

        flash(f"Created new snack. Name: {name} Price: ${price}")
        return redirect('/home')
    else:
        return render_template('add_snack_form.html', form=form)
