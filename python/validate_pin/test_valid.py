import pytest
from valid import valid


def test_valid():
    assert valid('1234') == True
    assert valid('45135') == False
    assert valid('89abc1') == False
    assert valid('900876') == True
    assert valid(' 4983') == False
