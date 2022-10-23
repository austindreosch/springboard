"""Flask app for Cupcakes"""
from flask import Flask, request, render_template,  redirect, flash, session, jsonify
from flask_debugtoolbar import DebugToolbarExtension
# from forms import AddPetForm
from models import db, connect_db, Cupcake

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///cupcakes'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "cheese"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)
# db.create_all()


@app.route('/')
def list_users():
    """Shows list of all pets in db, on the main directory.
    """

    cupcakes = Cupcake.query.all()
    return render_template('home.html', cupcakes=cupcakes)


# GET /api/cupcakes
# Get data about all cupcakes.
# Respond with JSON like: {cupcakes: [{id, flavor, size, rating, image}, ...]}.
# The values should come from each cupcake instance.
@app.route('/api/cupcakes')
def get_cupcake_data():

    all_cupcakes = [cupcake.serialize() for cupcake in Cupcake.query.all()]

    return jsonify(cupcakes=all_cupcakes)


# GET /api/cupcakes/[cupcake-id]
# Get data about a single cupcake.
# Respond with JSON like: {cupcake: {id, flavor, size, rating, image}}.
# This should raise a 404 if the cupcake cannot be found.
@app.route('/api/cupcakes/<int:id>')
def get_cupcake(id):
    """Returns JSON for one todo in particular"""

    cupcake = Cupcake.query.get_or_404(id)
    return jsonify(cupcake=cupcake.serialize())

# POST /api/cupcakes
# Create a cupcake with flavor, size, rating and image data from the body of the request.
# Respond with JSON like: {cupcake: {id, flavor, size, rating, image}}.


@app.route('/api/cupcakes', methods=["POST"])
def create_cupcake():
    new_cupcake = Cupcake(
        flavor=request.json["flavor"],
        size=request.json["size"],
        rating=request.json["rating"],
        image=request.json["image"] or None
    )

    db.session.add(new_cupcake)
    db.session.commit()
    response_json = jsonify(cupcake=new_cupcake.serialize())

    return (response_json, 201)


# PATCH /api/cupcakes/[cupcake-id]
# Update a cupcake with the id passed in the URL and flavor, size, rating and image data from the body of the request. You can always assume that the entire cupcake object will be passed to the backend.
# This should raise a 404 if the cupcake cannot be found.
# Respond with JSON of the newly-updated cupcake, like this: {cupcake: {id, flavor, size, rating, image}}.
@app.route('/api/cupcakes/<int:id>', methods=["PATCH"])
def update_cupcake():
    pass


# DELETE /api/cupcakes/[cupcake-id]
# This should raise a 404 if the cupcake cannot be found.

# Delete cupcake with the id passed in the URL. Respond with JSON like {message: "Deleted"}.

# Test these routes in Insomnia.
