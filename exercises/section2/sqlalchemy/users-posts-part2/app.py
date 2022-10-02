"""Blogly application."""

from flask import Flask, request, render_template,  redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, User, Post

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///users'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "chickenzarecool21837"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = True
debug = DebugToolbarExtension(app)

connect_db(app)
db.create_all()


@app.route('/')
def list_users():
    """Shows list of all users in db, on the main directory.
    """
    users = User.query.all()
    posts = Post.query.all()
    return render_template('list.html', users=users, posts=posts)


@app.route("/users/<int:user_id>")
def show_userpage(user_id):
    """Shows details page for single user."""

    user = User.query.get_or_404(user_id)
    return render_template('details.html', user=user)


@app.route('/users/new', methods=["POST"])
def post_new_user():
    """POST route for new user form submissions."""
    first_name = request.form["first_name"]
    last_name = request.form["last_name"]
    image_url = request.form["image_url"]

    new_user = User(first_name=first_name,
                    last_name=last_name, image_url=image_url)

    db.session.add(new_user)
    db.session.commit()

    return redirect('/')


@app.route('/users/<int:user_id>/delete', methods=["POST"])
def delete_user(user_id):
    """POST route for deleting user from database."""

    user = User.query.get_or_404(user_id)
    db.session.delete(user)
    db.session.commit()

    return redirect("/")


@app.route('/users/<int:user_id>/edit', methods=["POST"])
def edit_user_info(user_id):
    """Edit user information on form submission in details page."""
    user = User.query.get_or_404(user_id)

    user.first_name = request.form["first_name"]
    user.last_name = request.form["last_name"]
    user.image_url = request.form["image_url"]

    db.session.add(user)
    db.session.commit()

    return redirect("/")


# ----------------------------------------------------

@app.route("/users/<int:user_id>/posts/new", methods=['POST'])
def add_new_post(user_id):
    """Add new post, and refresh to user page."""

    user = User.query.get_or_404(user_id)

    # title = request.form["title"]
    # content = request.form["content"]
    # new_post = Post(title=title, content=content, user=user)

    new_post = Post(title=request.form['title'],
                    content=request.form['content'],
                    user=user)

    db.session.add(new_post)
    db.session.commit()

    return redirect(f"/users/{user_id}")


@app.route('/posts/<int:post_id>')
def show_post(post_id):

    post = Post.query.get_or_404(post_id)

    return render_template("post.html", post=post)


# @app.route('/posts/<int:post_id>/edit>')
# def show_edit_post_page():

#     return redirect("/posts/<int:post_id>/edit")


@app.route('/posts/<int:post_id>/edit', methods=["POST"])
def send_edit_post(post_id):
    """Edit post in user page, refresh to post page."""

    post = Post.query.get_or_404(post_id)

    post.title = request.form["title"]
    post.content = request.form["content"]

    db.session.add(post)
    db.session.commit()

    return redirect(f"/posts/{post_id}")


@app.route('/posts/<int:post_id>/delete', methods=['POST'])
def delete_post(post_id):

    post = Post.query.get_or_404(post_id)

    db.session.delete(post)
    db.session.commit()

    return redirect("/")
