pragma solidity >= 0.6.0 < 0.9.0;

import "hardhat/console.sol";

contract SpotifyPortal { 
  uint256 totalLinks;
  constructor() {
    console.log("SMART CONTRACT CONSTRUCTED!!");
  }

  function sendLink() public {
    totalLinks += 1;
    console.log("%s has waved!", msg.sender);
  }

  function getTotalLinks() public view returns (uint256) {
    console.log("WE HAVE HAD %d TOTAL LINKS!", totalLinks);
    return totalLinks;
  }
}
