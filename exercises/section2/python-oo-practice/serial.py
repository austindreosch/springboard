"""Python serial number generator."""


from tracemalloc import start


class SerialGenerator:
    """Machine to create unique incrementing serial numbers.

    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """

    def __init__(self, start=0):
        self.generated = start
        self.start = self.generated

    def __repr__(self):
        return f"A Serial Generator with a start value of {self.start}, and a current generated value of {self.generated}"

    def generate(self):
        """Generate a serial number."""
        self.generated = self.generated + 1
        return self.generated

    def reset(self):
        """Reset the start value to it's originally passed in value."""
        self.generated = self.start
        return self.generated
