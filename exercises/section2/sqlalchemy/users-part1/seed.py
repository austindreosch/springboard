"""Seed file to make sample data for users db."""

from models import User, db
from app import app

# Create all tables
db.drop_all()
db.create_all()

# If table isn't empty, empty it
User.query.delete()

# Add pets
# whiskey = Pet(name='Whiskey', species="dog")
# bowser = Pet(name='Bowser', species="dog", hunger=10)
# spike = Pet(name='Spike', species="porcupine")

# Add users
austin = User(first_name="Austin", last_name="Dreosch",
              image_url="https://cdn4.iconfinder.com/data/icons/business-conceptual-part1-1/513/business-man-512.png")

april = User(first_name="April", last_name="Dreosch",
             image_url="https://cdn4.iconfinder.com/data/icons/business-conceptual-part1-1/513/employee-512.png")

suzy = User(first_name="Suzy", last_name="Johnson",
            image_url="https://cdn4.iconfinder.com/data/icons/business-conceptual-part1-1/513/business-woman-512.png")


# Add new objects to session, so they'll persist
db.session.add(austin)
db.session.add(april)
db.session.add(suzy)

# Commit--otherwise, this never gets saved!
db.session.commit()
