// SPDX-License-Identifier: GPL-3.0
// pragma solidity ^0.8.19;

contract A2 {
    uint value;
    struct input {
        uint myIntA;
        uint myIntB;
    }

    input public newInput;

    function initialvalue(uint _val) external {
        value = _val;
        newInput.myIntA = value;
    }

    function getter() public view returns (uint) {
        return value;
    }

    function setter(uint256 inputA, uint256 inputB) public {
        newInput.myIntA += inputA;
        newInput.myIntB += inputB;
    }
}
