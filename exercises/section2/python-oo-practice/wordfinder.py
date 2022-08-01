"""Word Finder: finds random words from a dictionary."""


from random import random


class WordFinder:
    """Finds words in a text document."""
    ...

    def __init__(self, path='\\wsl$\Ubuntu\home\adreosch21\Projects\python-oo-practice\words2.txt'):
        file = open(path)
        self.words = self.parse(file)
        print(f"{len(self.words)} words read.")

    # def __repr__(self):
    #     return f""

    # reads the file at path, and makes an attribute of a list of those words
    # prints out "{numberofwordsread} words read."

    def parse(self, file):
        """Parses file into a list of words."""
        return [word.strip() for word in file]

    def random(self):
        """Return's a random word from the list of words in a file."""
        return random.choice(self.words)


class SpecialWordFinder(WordFinder):
    """
        Word Finder that excludes blank lines and comments.
    """

    def parse(self, file):
        # return super().parse(file)

        return [word.strip() for word in file if word.strip() and not word.startswith("#")]
