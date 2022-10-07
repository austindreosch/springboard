"""Blogly application."""

from flask import Flask, request, render_template,  redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, User, Post, Tag, PostTag

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///users'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "chickenzarecool21837"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)
db.create_all()


@app.route('/')
def list_users():
    """Shows list of all users in db, on the main directory.
    """
    users = User.query.all()
    posts = Post.query.all()
    tags = Tag.query.all()
    return render_template('list.html', users=users, posts=posts, tags=tags)


@app.route("/users/<int:user_id>")
def show_userpage(user_id):
    """Shows details page for single user."""

    user = User.query.get_or_404(user_id)
    tags = Tag.query.all()
    return render_template('details.html', user=user, tags=tags)


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

    tag_ids = [int(num) for num in request.form.getlist("tags")]
    tags = Tag.query.filter(Tag.id.in_(tag_ids)).all()

    new_post = Post(title=request.form['title'],
                    content=request.form['content'],
                    user=user, tags=tags)

    db.session.add(new_post)
    db.session.commit()

    return redirect(f"/users/{user_id}")


@app.route('/posts/<int:post_id>')
def show_post(post_id):

    post = Post.query.get_or_404(post_id)

    return render_template("post.html", post=post)


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

# ------------------------------------------------------------


@app.route('/tags/new', methods=['POST'])
def add_new_tag():
    # post_ids = [int(num) for num in request.form.getlist("posts")]
    # posts = Post.query.filter(Post.id.in_(post_ids)).all()

    name = request.form["tag_name"]

    new_tag = Tag(name=name)

    db.session.add(new_tag)
    db.session.commit()

    return redirect('/')


@app.route('/tags/<int:tag_id>')
def show_tag_edit_page(tag_id):
    # post_ids = [int(num) for num in request.form.getlist("posts")]
    # posts = Post.query.filter(Post.id.in_(post_ids)).all()

    posts = Post.query.all()
    tag = Tag.query.get_or_404(tag_id)

    return render_template('tag_edit.html', tag=tag, posts=posts)


@app.route('/posts/<int:tag_id>/edit', methods=['POST'])
def edit_tag(tag_id):

    tag = Tag.query.get_or_404(tag_id)

    tag.name = request.form['tag_name']

    # list of ids from all posts?
    post_ids = [int(num) for num in request.form.getlist("posts")]
    # set the tag posts to all the ids in post_ids
    tag.posts = Post.query.filter(Post.id.in_(post_ids)).all()

    db.session.add(tag)
    db.session.commit()

    return redirect('/',)


@app.route('/posts/<int:tag_id>/delete', methods=['POST'])
def delete_tag(tag_id):

    return redirect('/')
