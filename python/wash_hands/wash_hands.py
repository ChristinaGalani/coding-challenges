__pdoc__ = {'main': False}


def wash_hands(N, nM):
    sec = N*21*nM*30
    return '{} minutes and {} seconds'.format(sec//60, sec % 60)


def main():
    x = 8
    y = 7
    answer = wash_hands(x, y)
    print(answer)


if __name__ == '__main__':
    main()
