const AisthisiToken = artifacts.require('CryptonToken');

module.exports = function (deployer) {
  deployer.deploy(AisthisiToken);
};