//SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.0;

contract Whitelist {
    uint8 public maxWhitelistAddresses;

    mapping(address => bool) public whitelistedAddresses;

    uint8 public numAddressesWhitelisted;

    constructor(uint8 _maxWhitelistAddresses) public {
        maxWhitelistAddresses = _maxWhitelistAddresses;
    }

    function addAddressToWhitelist() public {
        require(
            !whitelistedAddresses[msg.sender],
            "Address has already been whitelisted"
        );
        require(
            numAddressesWhitelisted < maxWhitelistAddresses,
            "Whitelist is full"
        );
        whitelistedAddresses[msg.sender] = true;
        numAddressesWhitelisted++;
    }
}
