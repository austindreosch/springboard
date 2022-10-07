"""Seed file to make sample data for users db."""

from models import User, Post, db
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


# austin_post1 = Post(title="My Trip to France!", content="France is one of the oldest nations on Earth and the most ethnically diverse country in Europe. These deep and broad influences have made France a world leader throughout history in nearly all aspects of culture, including cuisine, wine-making, politics, philosophy, music, art, film, fashion, literature, and sports.", user=1)

# austin_post2 = Post(title="Long day.", content="Fitness Gym is where I go to work out. It is the best gym of all for me. The equipment is new and well organized in order to help you train in the most effective way.", user=1)

# april_post1 = Post(
#     title="Wow!", content="Check out this crazy video I just watched!", user=2)


# Add new objects to session, so they'll persist
db.session.add(austin)
db.session.add(april)
db.session.add(suzy)
# db.session.add(austin_post1)
# db.session.add(austin_post2)
# db.session.add(april_post1)

# Commit--otherwise, this never gets saved!
db.session.commit()
