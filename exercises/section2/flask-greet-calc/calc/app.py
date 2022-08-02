# Put your app in here.
from flask import Flask, request
from operations import add, sub, mult, div

app = Flask(__name__)

operators = {
    "add": add,
    "sub": sub,
    "mult": mult,
    "div": div,
}


@app.route("/<operation>")
def do_math(operation):
    """Operate on a and b parameters."""

    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = operators[operation](a, b)

    return str(result)


# @app.route('/add')
# def addpage():
#     a = request.args.get("a")
#     b = request.args.get("b")
#     answer = add(a, b)
#     return str(answer)


# @app.route('/sub')
# def subpage():
#     a = request.args.get("a")
#     b = request.args.get("b")
#     return str(sub(a, b))


# @app.route('/mult')
# def multpage():
#     a = request.args.get("a")
#     b = request.args.get("b")
#     return str(mult(a, b))


# @app.route('/div')
# def divpage():
#     a = request.args.get("a")
#     b = request.args.get("b")
#     return str(div(a, b))

# @app.route("/add")
# def do_add():
#     """Add a and b parameters."""

#     a = int(request.args.get("a"))
#     b = int(request.args.get("b"))
#     result = add(a, b)

#     return str(result)


@app.route("/sub")
def do_sub():
    """Subtract and b parameters."""

    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = sub(a, b)

    return str(result)


@app.route("/mult")
def do_mult():
    """Multiply a and b parameters."""

    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = mult(a, b)

    return str(result)


@app.route("/div")
def do_div():
    """Divide a and b parameters."""

    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = div(a, b)

    return str(result)
