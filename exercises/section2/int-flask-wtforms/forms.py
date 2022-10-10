from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, BooleanField


class AddSnackForm(FlaskForm):

    name = StringField("Name")
    price = FloatField("Price")
    is_healthy = BooleanField("This is a healthy snack.")
