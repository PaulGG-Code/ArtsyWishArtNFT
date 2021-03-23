//migrations/2_deploy/js
const ERC721PresetMinterPauserAutoId = artifacts.require("ERC721PresetMinterPauserAutoId");

module.exports = function(deployer) {

	deployer.deploy(ERC721PresetMinterPauserAutoId, "ArtsyWishArt NFT", "AWA", "http://my-json-server.typicode.com/PaulGG-Code/ArtsyWishArt/tokens/");
};

