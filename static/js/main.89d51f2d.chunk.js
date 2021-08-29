(this.webpackJsonpcreap=this.webpackJsonpcreap||[]).push([[0],{33:function(f){f.exports=JSON.parse('{"_format":"hh-sol-artifact-1","contractName":"WavePortal","sourceName":"contracts/WavePortal.sol","abi":[{"inputs":[],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"NewWave","type":"event"},{"inputs":[],"name":"getAllWaves","outputs":[{"components":[{"internalType":"address","name":"waver","type":"address"},{"internalType":"string","name":"message","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct WavePortal.Wave[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalWaves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastWavedAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_message","type":"string"}],"name":"wave","outputs":[],"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x60806040526200004f6040518060400160405280601981526020017f57652068617665206265656e20636f6e737472756374656421000000000000008152506200005560201b620006491760201c565b620001e9565b620000f5816040516024016200006c919062000162565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050620000f860201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b60006200012e8262000186565b6200013a818562000191565b93506200014c818560208601620001a2565b6200015781620001d8565b840191505092915050565b600060208201905081810360008301526200017e818462000121565b905092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015620001c2578082015181840152602081019050620001a5565b83811115620001d2576000848401525b50505050565b6000601f19601f8301169050919050565b61126180620001f96000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063449d46c0146100515780639a2cdc081461006d578063a42a46631461008b578063bd43a908146100bb575b600080fd5b61006b60048036038101906100669190610a2b565b6100d9565b005b6100756104d7565b6040516100829190610ddd565b60405180910390f35b6100a560048036038101906100a09190610a02565b6104e0565b6040516100b29190610ddd565b60405180910390f35b6100c36104f8565b6040516100d09190610c94565b60405180910390f35b42600a600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546101269190610eef565b10610166576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015d90610d9d565b60405180910390fd5b42600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060016000808282546101bc9190610eef565b925050819055506102036040518060400160405280601681526020017f257320776176656420772f206d6573736167652025730000000000000000000081525033836106e2565b600260405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906102c29291906108e2565b506040820151816002015550503373ffffffffffffffffffffffffffffffffffffffff167f5f7e16dc676677766a70e9c5628aa6c54ddb8b6e5188e2ae1e1f17f1ffbea7164283604051610317929190610df8565b60405180910390a26000606460015442446103329190610eef565b61033c9190610eef565b6103469190611026565b90506103876040518060400160405280601681526020017f52616e646f6d20232067656e6572617465643a2025730000000000000000000081525082610781565b8060018190555060328110156104d3576103d66040518060400160405280600781526020017f257320776f6e21000000000000000000000000000000000000000000000000008152503361081d565b6000655af3107a4000905047811115610424576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041b90610d7d565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff168260405161044a90610c7f565b60006040518083038185875af1925050503d8060008114610487576040519150601f19603f3d011682016040523d82523d6000602084013e61048c565b606091505b50509050806104d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104c790610dbd565b60405180910390fd5b50505b5050565b60008054905090565b60036020528060005260406000206000915090505481565b60606002805480602002602001604051908101604052809291908181526020016000905b8282101561064057838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546105a590610fc3565b80601f01602080910402602001604051908101604052809291908181526020018280546105d190610fc3565b801561061e5780601f106105f35761010080835404028352916020019161061e565b820191906000526020600020905b81548152906001019060200180831161060157829003601f168201915b505050505081526020016002820154815250508152602001906001019061051c565b50505050905090565b6106df8160405160240161065d9190610cb6565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506108b9565b50565b61077c8383836040516024016106fa93929190610d08565b6040516020818303038152906040527fe0e9ad4f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506108b9565b505050565b6108198282604051602401610797929190610d4d565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506108b9565b5050565b6108b58282604051602401610833929190610cd8565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506108b9565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b8280546108ee90610fc3565b90600052602060002090601f0160209004810192826109105760008555610957565b82601f1061092957805160ff1916838001178555610957565b82800160010185558215610957579182015b8281111561095657825182559160200191906001019061093b565b5b5090506109649190610968565b5090565b5b80821115610981576000816000905550600101610969565b5090565b600061099861099384610e4d565b610e28565b9050828152602081018484840111156109b057600080fd5b6109bb848285610f81565b509392505050565b6000813590506109d281611214565b92915050565b600082601f8301126109e957600080fd5b81356109f9848260208601610985565b91505092915050565b600060208284031215610a1457600080fd5b6000610a22848285016109c3565b91505092915050565b600060208284031215610a3d57600080fd5b600082013567ffffffffffffffff811115610a5757600080fd5b610a63848285016109d8565b91505092915050565b6000610a788383610c11565b905092915050565b610a8981610f45565b82525050565b610a9881610f45565b82525050565b6000610aa982610e8e565b610ab38185610eb1565b935083602082028501610ac585610e7e565b8060005b85811015610b015784840389528151610ae28582610a6c565b9450610aed83610ea4565b925060208a01995050600181019050610ac9565b50829750879550505050505092915050565b6000610b1e82610e99565b610b288185610ecd565b9350610b38818560208601610f90565b610b4181611113565b840191505092915050565b6000610b5782610e99565b610b618185610ede565b9350610b71818560208601610f90565b610b7a81611113565b840191505092915050565b6000610b92603583610ede565b9150610b9d82611124565b604082019050919050565b6000610bb5602983610ede565b9150610bc082611173565b604082019050919050565b6000610bd8602783610ede565b9150610be3826111c2565b604082019050919050565b6000610bfb600083610ec2565b9150610c0682611211565b600082019050919050565b6000606083016000830151610c296000860182610a80565b5060208301518482036020860152610c418282610b13565b9150506040830151610c566040860182610c61565b508091505092915050565b610c6a81610f77565b82525050565b610c7981610f77565b82525050565b6000610c8a82610bee565b9150819050919050565b60006020820190508181036000830152610cae8184610a9e565b905092915050565b60006020820190508181036000830152610cd08184610b4c565b905092915050565b60006040820190508181036000830152610cf28185610b4c565b9050610d016020830184610a8f565b9392505050565b60006060820190508181036000830152610d228186610b4c565b9050610d316020830185610a8f565b8181036040830152610d438184610b4c565b9050949350505050565b60006040820190508181036000830152610d678185610b4c565b9050610d766020830184610c70565b9392505050565b60006020820190508181036000830152610d9681610b85565b9050919050565b60006020820190508181036000830152610db681610ba8565b9050919050565b60006020820190508181036000830152610dd681610bcb565b9050919050565b6000602082019050610df26000830184610c70565b92915050565b6000604082019050610e0d6000830185610c70565b8181036020830152610e1f8184610b4c565b90509392505050565b6000610e32610e43565b9050610e3e8282610ff5565b919050565b6000604051905090565b600067ffffffffffffffff821115610e6857610e676110e4565b5b610e7182611113565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610efa82610f77565b9150610f0583610f77565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610f3a57610f39611057565b5b828201905092915050565b6000610f5082610f57565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610fae578082015181840152602081019050610f93565b83811115610fbd576000848401525b50505050565b60006002820490506001821680610fdb57607f821691505b60208210811415610fef57610fee6110b5565b5b50919050565b610ffe82611113565b810181811067ffffffffffffffff8211171561101d5761101c6110e4565b5b80604052505050565b600061103182610f77565b915061103c83610f77565b92508261104c5761104b611086565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f547279696e6720746f207769746864726177206d6f7265206d6f6e657920746860008201527f616e2074686520636f6e7472616374206861732e200000000000000000000000602082015250565b7f4d7573742077616974203130207365636f6e6473206265666f7265207761766960008201527f6e6720616761696e2e0000000000000000000000000000000000000000000000602082015250565b7f4661696c656420746f207769746864726177206d6f6e65792066726f6d20636f60008201527f6e74726163742e00000000000000000000000000000000000000000000000000602082015250565b50565b61121d81610f45565b811461122857600080fd5b5056fea2646970667358221220d6a0cbe7b7df36a628260e2f1099290328bd386c726c48c2718142c965580b5564736f6c63430008040033","deployedBytecode":"0x608060405234801561001057600080fd5b506004361061004c5760003560e01c8063449d46c0146100515780639a2cdc081461006d578063a42a46631461008b578063bd43a908146100bb575b600080fd5b61006b60048036038101906100669190610a2b565b6100d9565b005b6100756104d7565b6040516100829190610ddd565b60405180910390f35b6100a560048036038101906100a09190610a02565b6104e0565b6040516100b29190610ddd565b60405180910390f35b6100c36104f8565b6040516100d09190610c94565b60405180910390f35b42600a600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546101269190610eef565b10610166576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015d90610d9d565b60405180910390fd5b42600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060016000808282546101bc9190610eef565b925050819055506102036040518060400160405280601681526020017f257320776176656420772f206d6573736167652025730000000000000000000081525033836106e2565b600260405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906102c29291906108e2565b506040820151816002015550503373ffffffffffffffffffffffffffffffffffffffff167f5f7e16dc676677766a70e9c5628aa6c54ddb8b6e5188e2ae1e1f17f1ffbea7164283604051610317929190610df8565b60405180910390a26000606460015442446103329190610eef565b61033c9190610eef565b6103469190611026565b90506103876040518060400160405280601681526020017f52616e646f6d20232067656e6572617465643a2025730000000000000000000081525082610781565b8060018190555060328110156104d3576103d66040518060400160405280600781526020017f257320776f6e21000000000000000000000000000000000000000000000000008152503361081d565b6000655af3107a4000905047811115610424576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041b90610d7d565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff168260405161044a90610c7f565b60006040518083038185875af1925050503d8060008114610487576040519150601f19603f3d011682016040523d82523d6000602084013e61048c565b606091505b50509050806104d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104c790610dbd565b60405180910390fd5b50505b5050565b60008054905090565b60036020528060005260406000206000915090505481565b60606002805480602002602001604051908101604052809291908181526020016000905b8282101561064057838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546105a590610fc3565b80601f01602080910402602001604051908101604052809291908181526020018280546105d190610fc3565b801561061e5780601f106105f35761010080835404028352916020019161061e565b820191906000526020600020905b81548152906001019060200180831161060157829003601f168201915b505050505081526020016002820154815250508152602001906001019061051c565b50505050905090565b6106df8160405160240161065d9190610cb6565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506108b9565b50565b61077c8383836040516024016106fa93929190610d08565b6040516020818303038152906040527fe0e9ad4f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506108b9565b505050565b6108198282604051602401610797929190610d4d565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506108b9565b5050565b6108b58282604051602401610833929190610cd8565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506108b9565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b8280546108ee90610fc3565b90600052602060002090601f0160209004810192826109105760008555610957565b82601f1061092957805160ff1916838001178555610957565b82800160010185558215610957579182015b8281111561095657825182559160200191906001019061093b565b5b5090506109649190610968565b5090565b5b80821115610981576000816000905550600101610969565b5090565b600061099861099384610e4d565b610e28565b9050828152602081018484840111156109b057600080fd5b6109bb848285610f81565b509392505050565b6000813590506109d281611214565b92915050565b600082601f8301126109e957600080fd5b81356109f9848260208601610985565b91505092915050565b600060208284031215610a1457600080fd5b6000610a22848285016109c3565b91505092915050565b600060208284031215610a3d57600080fd5b600082013567ffffffffffffffff811115610a5757600080fd5b610a63848285016109d8565b91505092915050565b6000610a788383610c11565b905092915050565b610a8981610f45565b82525050565b610a9881610f45565b82525050565b6000610aa982610e8e565b610ab38185610eb1565b935083602082028501610ac585610e7e565b8060005b85811015610b015784840389528151610ae28582610a6c565b9450610aed83610ea4565b925060208a01995050600181019050610ac9565b50829750879550505050505092915050565b6000610b1e82610e99565b610b288185610ecd565b9350610b38818560208601610f90565b610b4181611113565b840191505092915050565b6000610b5782610e99565b610b618185610ede565b9350610b71818560208601610f90565b610b7a81611113565b840191505092915050565b6000610b92603583610ede565b9150610b9d82611124565b604082019050919050565b6000610bb5602983610ede565b9150610bc082611173565b604082019050919050565b6000610bd8602783610ede565b9150610be3826111c2565b604082019050919050565b6000610bfb600083610ec2565b9150610c0682611211565b600082019050919050565b6000606083016000830151610c296000860182610a80565b5060208301518482036020860152610c418282610b13565b9150506040830151610c566040860182610c61565b508091505092915050565b610c6a81610f77565b82525050565b610c7981610f77565b82525050565b6000610c8a82610bee565b9150819050919050565b60006020820190508181036000830152610cae8184610a9e565b905092915050565b60006020820190508181036000830152610cd08184610b4c565b905092915050565b60006040820190508181036000830152610cf28185610b4c565b9050610d016020830184610a8f565b9392505050565b60006060820190508181036000830152610d228186610b4c565b9050610d316020830185610a8f565b8181036040830152610d438184610b4c565b9050949350505050565b60006040820190508181036000830152610d678185610b4c565b9050610d766020830184610c70565b9392505050565b60006020820190508181036000830152610d9681610b85565b9050919050565b60006020820190508181036000830152610db681610ba8565b9050919050565b60006020820190508181036000830152610dd681610bcb565b9050919050565b6000602082019050610df26000830184610c70565b92915050565b6000604082019050610e0d6000830185610c70565b8181036020830152610e1f8184610b4c565b90509392505050565b6000610e32610e43565b9050610e3e8282610ff5565b919050565b6000604051905090565b600067ffffffffffffffff821115610e6857610e676110e4565b5b610e7182611113565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610efa82610f77565b9150610f0583610f77565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610f3a57610f39611057565b5b828201905092915050565b6000610f5082610f57565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610fae578082015181840152602081019050610f93565b83811115610fbd576000848401525b50505050565b60006002820490506001821680610fdb57607f821691505b60208210811415610fef57610fee6110b5565b5b50919050565b610ffe82611113565b810181811067ffffffffffffffff8211171561101d5761101c6110e4565b5b80604052505050565b600061103182610f77565b915061103c83610f77565b92508261104c5761104b611086565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f547279696e6720746f207769746864726177206d6f7265206d6f6e657920746860008201527f616e2074686520636f6e7472616374206861732e200000000000000000000000602082015250565b7f4d7573742077616974203130207365636f6e6473206265666f7265207761766960008201527f6e6720616761696e2e0000000000000000000000000000000000000000000000602082015250565b7f4661696c656420746f207769746864726177206d6f6e65792066726f6d20636f60008201527f6e74726163742e00000000000000000000000000000000000000000000000000602082015250565b50565b61121d81610f45565b811461122857600080fd5b5056fea2646970667358221220d6a0cbe7b7df36a628260e2f1099290328bd386c726c48c2718142c965580b5564736f6c63430008040033","linkReferences":{},"deployedLinkReferences":{}}')},34:function(f,e,b){f.exports=b.p+"static/media/seabottle.de87c146.jpg"},40:function(f,e,b){f.exports=b(59)},45:function(f,e,b){},47:function(f,e,b){},49:function(f,e){},59:function(f,e,b){"use strict";b.r(e);var a=b(6),t=b.n(a),c=b(32),n=b.n(c),d=(b(45),b(18)),s=b(2),o=b.n(s),r=b(24),i=b(22),u=b(19),l=(b(47),b(33)),m=b(34),p=b.n(m);function v(){var f=a.useState(""),e=Object(i.a)(f,2),b=e[0],t=e[1],c="0x1125Bfc01daeaa3a9Ef1D0E3009c43DAA973F049",n=l.abi,s=a.useState(""),m=Object(i.a)(s,2),v=m[0],g=m[1],h=function(){var f=window.ethereum;f?(console.log("We have the ethereum object",f),f.request({method:"eth_accounts"}).then((function(f){if(0!==f.length){var e=f[0];console.log("Found an authorized account: ",e),t(e),function(){x.apply(this,arguments)}()}else console.log("No authorized account found")}))):console.log("Make sure you have metamask!")};a.useEffect((function(){h()}),[]);var y=function(){var f=Object(r.a)(o.a.mark((function f(e){var b,a,t,d,s;return o.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:return b=new u.a.providers.Web3Provider(window.ethereum),a=b.getSigner(),t=new u.a.Contract(c,n,a),f.next=5,t.getTotalWaves();case 5:return d=f.sent,console.log("Retrieved total wave count...",d.toNumber()),f.next=9,t.wave(e,{gasLimit:3e5});case 9:return s=f.sent,console.log("Mining...",s.hash),f.next=13,s.wait();case 13:return console.log("Mined -- ",s.hash),f.next=16,t.getTotalWaves();case 16:d=f.sent,console.log("Retrieved total wave count...",d.toNumber());case 18:case"end":return f.stop()}}),f)})));return function(e){return f.apply(this,arguments)}}(),w=a.useState([]),E=Object(i.a)(w,2),N=E[0],W=E[1];function x(){return(x=Object(r.a)(o.a.mark((function f(){var e,b,a,t,s;return o.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:return e=new u.a.providers.Web3Provider(window.ethereum),b=e.getSigner(),a=new u.a.Contract(c,n,b),f.next=5,a.getAllWaves();case 5:t=f.sent,s=[],t.forEach((function(f){s.push({address:f.waver,timestamp:new Date(1e3*f.timestamp),message:f.message})})),W(s.reverse()),a.on("NewWave",(function(f,e,b){console.log("NewWave",f,e,b),W((function(a){return[].concat(Object(d.a)(a),[{address:f,timestamp:new Date(1e3*e),message:b}])}))}));case 10:case"end":return f.stop()}}),f)})))).apply(this,arguments)}return a.createElement("div",{className:"mainContainer"},a.createElement("div",{className:"dataContainer"},a.createElement("div",{className:"header"},"Pandemic in a Bottle \u2709\ufe0f\ud83c\udf7e"),a.createElement("div",{className:"bio"},"What is the one key insight you want future generations 100+ years from now to know, about how humans have dealt with the COVID-19 pandemic?",a.createElement("br",null),a.createElement("br",null),"Your message will be stored forever on the Ethereum blockchain, so make it count."),a.createElement("form",{className:"form",onSubmit:function(f){f.preventDefault(),v?(y(v),g("")):console.log("You haven't entered a covid message!")}},a.createElement("textarea",{type:"text",placeholder:"Enter message to future generations",id:"covidMessage",className:"covidMessage",name:"covidMessage",value:v,onChange:function(f){return g(f.target.value)},required:!0}),a.createElement("button",{className:"waveButton"},"Wave Goodbye to Covid \ud83d\udc4b")),b?null:a.createElement("button",{className:"waveButton",onClick:function(){var f=window.ethereum;f||alert("Get metamask!"),f.request({method:"eth_requestAccounts"}).then((function(f){console.log("Connected",f[0]),t(f[0])})).catch((function(f){return console.log(f)}))}},"Connect Wallet"),N.map((function(f,e){return a.createElement("div",{className:"messageContainer"},a.createElement("div",{className:"messageImageContainer"},a.createElement("div",{className:"avatarImageWrapper"},a.createElement("img",{src:p.a,className:"avatarImage"}))),a.createElement("div",{className:"messageDetailsContainer"},a.createElement("div",{className:"address"},"Address: ",f.address),a.createElement("div",{className:"time"},"Time: ",f.timestamp.toString()),a.createElement("div",{className:"storedMessage"},"Message: ",f.message)))}))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(t.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(f){f.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.89d51f2d.chunk.js.map