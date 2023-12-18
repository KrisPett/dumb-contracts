// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// test1
contract IntegerManipulation {
    int public integerValue;

    event ValueChanged(int oldValue, int newValue);

    function increaseValue(int _amount) public {
        int oldValue = integerValue;
        integerValue += _amount;
        emit ValueChanged(oldValue, integerValue);
    }

    function decreaseValue(int _amount) public {
        int oldValue = integerValue;
        integerValue -= _amount;
        emit ValueChanged(oldValue, integerValue);
    }
}
