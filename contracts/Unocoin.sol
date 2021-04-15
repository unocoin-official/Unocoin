//SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.3;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract Unocoin is ERC20 {

    constructor() ERC20("Unocoin", "UNO") {
        _mint(msg.sender, 21e27);
    }
}
