from hashlib import new


def titleize(phrase):
    """Return phrase in title case (each word capitalized).

        >>> titleize('this is awesome')
        'This Is Awesome'

        >>> titleize('oNLy cAPITALIZe fIRSt')
        'Only Capitalize First'
    """

    phrase = phrase.lower()
    # new = []

    # for word in phrase:
    #     new.append(word.capitalize())
    # return new.join()

    return phrase.title()
