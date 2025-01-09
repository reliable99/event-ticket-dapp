// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFTsAirDrop is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    address payable public admin;
    uint public mintFee = 0.00025 ether;

    Counters.Counter private _tokenIds;

    struct NFTData {
        uint256 tokenId;
        address creator;
        string tokenURI;
    }

     struct Notification {
        uint id;
        address userAddress;
        string message;
        uint timestamp;
        uint nftID;
    }

    NFTData[] private allNFTs;
    Notification[] private allNotifications;

    mapping(address => NFTData[]) private userCreatedNFTs;
    mapping(address => NFTData[]) private userOwnedNFTs;

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    constructor() ERC721("@theblockchaincoders", "@TBC") Ownable(msg.sender) {
        admin = payable(msg.sender);
    }

    function mint(string memory tokenURI, string memory _name) payable external
        returns (uint256)
    {
        require(msg.value == mintFee, "Incorrect registration fee");
        _tokenIds.increment();
        uint256 tokenId = _tokenIds.current();

        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, tokenURI);

        NFTData memory newNFT = NFTData({
            tokenId: tokenId,
            creator: msg.sender,
            tokenURI: tokenURI
        });

        allNFTs.push(newNFT);
        userCreatedNFTs[msg.sender].push(newNFT);
        userOwnedNFTs[msg.sender].push(newNFT);

        payable(admin).transfer(msg.value);

        ADD_NOTIFICATION(msg.sender, _name, tokenId);

        return tokenId;

    }

    function fetchUserOwnedNFTs(address user) external view returns (NFTData[] memory) {
        return userOwnedNFTs[user];
    }

    function fetchUserCreatedNFTs(address user) external view returns (NFTData[] memory) {
        return userCreatedNFTs[user];
    }

    function updateMintFee(uint _newFee) public onlyAdmin {
        mintFee = _newFee;
    }

     //NOTIFICATIOn
    function ADD_NOTIFICATION(address _userAddress, string memory _message, uint256 _nftID) internal {
        Notification memory newNotification = Notification({
            id: allNotifications.length,
            userAddress: _userAddress,
            message: _message,
            timestamp: block.timestamp,
            nftID: _nftID
        });

        allNotifications.push(newNotification);
        
    }

    function GET_NOTIFICATIONS() external view returns (Notification[] memory) {
        return allNotifications;
    }
    
}