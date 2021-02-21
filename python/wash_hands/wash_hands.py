__pdoc__ = {'main': False}


def wash_hands(N, nM):
    """
    N: number of times to wash hands per day
    nM: number of months

    Returns the total amount of time of washing hands in minutes and seconds for the number of months
    """
    sec = N*21*nM*30
    return '{} minutes and {} seconds'.format(sec//60, sec % 60)


def main():
    x = 8
    y = 7
    answer = wash_hands(x, y)
    print(answer)


if __name__ == '__main__':
    main()
