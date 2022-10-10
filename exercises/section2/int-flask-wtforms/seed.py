"""Seed file to make sample data for users db."""

from models import db, connect_db, Pet
from app import app

# Create all tables
db.drop_all()
db.create_all()

# If table isn't empty, empty it
Pet.query.delete()

# Add pets
buster = Pet(name="Buster", species="dog", age=7,
             notes="Really awesome.", available=True)

buddy = Pet(name="Buddy", species="cat", age=2,
            notes="Quiet and sweet.", available=False)

emma = Pet(name="Emma", species="dog", age=14,
           notes="Old and slow.", available=True)


# Add new objects to session, so they'll persist
db.session.add(buster)
db.session.add(buddy)
db.session.add(emma)

# Commit--otherwise, this never gets saved!
db.session.commit()
