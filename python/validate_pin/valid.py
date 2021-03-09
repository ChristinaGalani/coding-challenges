__pdoc__ = {'main': False}


def valid(txt):
    """
    txt: string,  the pin to be validated

    Returns true for a valid pin and false for an invalid one.
    A valid pin has:
    Exactly 4 or 6 characters.
    Only numerical characters (0-9).
    No whitespace.
    """
    return txt.isnumeric() and len(txt) in [4, 6]


def main():
    pin1 = '1234'
    pin2 = '123456'
    pin3 = ' 1234'
    pin4 = '1234567'
    answer1 = valid(pin1)
    answer2 = valid(pin2)
    answer3 = valid(pin3)
    answer4 = valid(pin4)
    print(answer1)
    print(answer2)
    print(answer3)
    print(answer4)


if __name__ == '__main__':
    main()
