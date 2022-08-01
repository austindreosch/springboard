def print_upper_words(string):
    for word in string:
        print(word.upper())


def print_upper_words_e(string):
    for word in string:
        # if word[0] == "e":
        if word.startswith("e") or word.startswith("E"):
            print(word.upper())


def print_upper_words_letter(words, letters):
    # for word in string:
    #     if word.startswith(letter.lower()) or word.startswith(letter.upper()):
    #         print(word.upper())
    for word in words:
        for letter in letters:
            if word.startswith(letter):
                print(word.upper())
                break
