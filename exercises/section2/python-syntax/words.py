def print_upper_words(string):
    for word in string:
        print(word.upper())


def print_upper_words_e(string):
    for word in string:
        # if word[0] == "e":
        if word.startswith("e") or word.startswith("E"):
            print(word.upper())


def print_upper_words_letter(string, letter):
    # for word in string:
    #     if word.startswith(letter.lower()) or word.startswith(letter.upper()):
    #         print(word.upper())
    for word in string:
        for let in letter:
            if word.startswith(let):
                print(word.upper())
                break
