def calculate(operation, a, b, make_int=False, message='The result is'):
    """Perform operation on a + b, ()possibly truncating) & returning w/msg.

    - operation: 'add', 'subtract', 'multiply', or 'divide'
    - a and b: values to operate on
    - make_int: (optional, defaults to False) if True, truncates to integer
    - message: (optional) message to use (if not provided, use 'The result is')

    Performs math operation (truncating if make_int), then returns as
    "[message] [result]"

        >>> calculate('add', 2.5, 4)
        'The result is 6.5'

        >>> calculate('subtract', 4, 1.5, make_int=True)
        'The result is 2'

        >>> calculate('multiply', 1.5, 2)
        'The result is 3.0'

        >>> calculate('divide', 10, 4, message='I got')
        'I got 2.5'

    If a valid operation isn't provided, return None.

        >>> calculate('foo', 2, 3)

    """

    # if make_int == True:
    #     a.int()
    #     b.int()
    # if message != 'The result is':
    #     newMessage = message
    #     if operation == 'add':
    #         return newMessage + (a + b)
    #     if operation == 'subtract':
    #         return newMessage + (a - b)
    #     if operation == 'multiply':
    #         return newMessage + (a * b)
    #     if operation == 'divide':
    #         return newMessage + (a / b)
    #     else:
    #         return None

    if operation == 'add':
        print = a + b
    elif operation == 'subtract':
        print = a - b
    elif operation == 'multiply':
        print = a * b
    elif operation == 'divide':
        print = a / b
    else:
        return None

    if make_int == True:
        print = int(print)

    return f"{message} {print}"
