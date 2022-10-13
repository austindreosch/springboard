"""Blogly application."""

from crypt import methods
from flask import Flask, request, render_template,  redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from forms import AddPetForm, EditPetForm
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


@app.route('/')
def list_users():
    """Shows list of all pets in db, on the main directory.
    """

    pets = Pet.query.all()
    return render_template('list.html', pets=pets)


@app.route('/add', methods=["GET", "POST"])
def add_new_pet():
    form = AddPetForm()

    if form.validate_on_submit():

        name = form.name.data
        species = form.species.data
        age = form.age.data
        photo_url = form.photo_url.data
        notes = form.notes.data
        available = form.available.data

        new_pet = Pet(name=name, species=species, age=age,
                      photo_url=photo_url, notes=notes, available=available)

        db.session.add(new_pet)
        db.session.commit()

        flash(f"""
            Created new pet. 
            Name: {name} 
            Species: {species}
            Age: {age}
            Notes: {notes}
            Availability: {available} 
        """)
        return redirect('/')
    else:
        return render_template('add_pet_form.html', form=form)


@app.route('/pets/<int:pet_id>', methods=["GET", "POST"])
def pet_edit_page(pet_id):
    pet = Pet.query.get_or_404(pet_id)
    form = EditPetForm(obj=pet)

    if form.validate_on_submit():
        # pet.name = form.name.data
        pet.notes = form.notes.data
        pet.photo_url = form.photo_url.data
        pet.available = form.available.data
        db.session.commit()
        return redirect(f'/pets/{pet.id}')
    else:
        return render_template('pet_edit.html', form=form, pet=pet)


# @app.route('/pets/<int:pet_id>/edit', methods=["POST"])
# def edit_pet(pet_id):

#     return redirect('/pets/<int:pet_id>')


@app.route('/pets/<int:pet_id>/delete', methods=["POST"])
def delete_pet(pet_id):

    pet = Pet.query.get_or_404(pet_id)
    db.session.delete(pet)
    db.session.commit()

    return redirect('/')
