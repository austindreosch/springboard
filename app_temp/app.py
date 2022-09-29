from flask import Flask, request, redirect, render_template
from models import db, connect_db, Pet

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///pets'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

connect_db(app)

from flask_debugtoolbar import DebugToolbarExtension
app.config['SECRET_KEY'] = "cheese"
debug = DebugToolbarExtension(app)


@app.route('/')
def list_pets():
    """ Homepage. Shows pets list."""

    pets = Pet.query.all()
    return render_template("list.html", pets=pets)

@app.route('/', methods=["POST"])
def add_pet():
    """Add new pet and redirect to homepage list."""

    name = request.form['name']
    species = request.form['species']
    hunger = request.form['hunger']
    hunter = int(hunger) if hunger else None

    pet = Pet(name=name, species=species, hunger=hunger)
    db.session.add(pet)
    db.session.commit()

    return redirect(f"/{pet.id}")

@app.route('/<int:pet_id>')











