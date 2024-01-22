// SPDX-License-Identifier: GPL-3.0
// pragma solidity ^0.8.19;

contract A {
    uint value;

    function initialvalue(uint _val) external {
        value = _val;
    }

    function getter() public view returns (uint) {
        return value;
    }

    function setter(uint _val) public {
        value = value + _val;
    }
}
