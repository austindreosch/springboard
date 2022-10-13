from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, BooleanField, TextAreaField, IntegerField, SelectField
from wtforms.validators import InputRequired, Length, NumberRange, URL, Optional


class AddPetForm(FlaskForm):

    name = StringField("Name")
    species = SelectField("Species", choices=[
                          "dog", "cat", "rabbit", "snake", "turtle", "horse"])
    age = IntegerField("Age")
    photo_url = StringField("Image")
    notes = TextAreaField("Notes")
    available = BooleanField("Available?")


class EditPetForm(FlaskForm):

    photo_url = StringField("Image")
    notes = TextAreaField("Notes")
    available = BooleanField("Available?")
