export const abi = {
  _format: 'hh-sol-artifact-1',
  contractName: 'Whitelist',
  sourceName: 'contracts/Whitelist.sol',
  abi: [
    {
      inputs: [
        {
          internalType: 'uint8',
          name: '_maxWhitelistAddresses',
          type: 'uint8',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'addAddressToWhitelist',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'maxWhitelistAddresses',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'numAddressesWhitelisted',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'whitelistedAddresses',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  bytecode:
    '0x608060405234801561001057600080fd5b506040516105e23803806105e283398181016040528101906100329190610067565b806000806101000a81548160ff021916908360ff160217905550506100b4565b6000815190506100618161009d565b92915050565b60006020828403121561007957600080fd5b600061008784828501610052565b91505092915050565b600060ff82169050919050565b6100a681610090565b81146100b157600080fd5b50565b61051f806100c36000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806306c933d8146100515780634011d7cd146100815780638e7314d91461009f578063d47ac0f4146100a9575b600080fd5b61006b600480360381019061006691906102a2565b6100c7565b604051610078919061032f565b60405180910390f35b6100896100e7565b604051610096919061038a565b60405180910390f35b6100a76100fa565b005b6100b161027c565b6040516100be919061038a565b60405180910390f35b60016020528060005260406000206000915054906101000a900460ff1681565b600260009054906101000a900460ff1681565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610187576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161017e9061036a565b60405180910390fd5b60008054906101000a900460ff1660ff16600260009054906101000a900460ff1660ff16106101eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101e29061034a565b60405180910390fd5b60018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506002600081819054906101000a900460ff168092919061026190610401565b91906101000a81548160ff021916908360ff16021790555050565b60008054906101000a900460ff1681565b60008135905061029c816104d2565b92915050565b6000602082840312156102b457600080fd5b60006102c28482850161028d565b91505092915050565b6102d4816103c8565b82525050565b60006102e76011836103a5565b91506102f28261045a565b602082019050919050565b600061030a6024836103a5565b915061031582610483565b604082019050919050565b610329816103f4565b82525050565b600060208201905061034460008301846102cb565b92915050565b60006020820190508181036000830152610363816102da565b9050919050565b60006020820190508181036000830152610383816102fd565b9050919050565b600060208201905061039f6000830184610320565b92915050565b600082825260208201905092915050565b60006103c1826103d4565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600060ff82169050919050565b600061040c826103f4565b915060ff8214156104205761041f61042b565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f57686974656c6973742069732066756c6c000000000000000000000000000000600082015250565b7f416464726573732068617320616c7265616479206265656e2077686974656c6960008201527f7374656400000000000000000000000000000000000000000000000000000000602082015250565b6104db816103b6565b81146104e657600080fd5b5056fea2646970667358221220f7756d37669fb334d50a781f275065f471bbab3e48214f0d9a548dec80498ad464736f6c63430008040033',
  deployedBytecode:
    '0x608060405234801561001057600080fd5b506004361061004c5760003560e01c806306c933d8146100515780634011d7cd146100815780638e7314d91461009f578063d47ac0f4146100a9575b600080fd5b61006b600480360381019061006691906102a2565b6100c7565b604051610078919061032f565b60405180910390f35b6100896100e7565b604051610096919061038a565b60405180910390f35b6100a76100fa565b005b6100b161027c565b6040516100be919061038a565b60405180910390f35b60016020528060005260406000206000915054906101000a900460ff1681565b600260009054906101000a900460ff1681565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610187576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161017e9061036a565b60405180910390fd5b60008054906101000a900460ff1660ff16600260009054906101000a900460ff1660ff16106101eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101e29061034a565b60405180910390fd5b60018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506002600081819054906101000a900460ff168092919061026190610401565b91906101000a81548160ff021916908360ff16021790555050565b60008054906101000a900460ff1681565b60008135905061029c816104d2565b92915050565b6000602082840312156102b457600080fd5b60006102c28482850161028d565b91505092915050565b6102d4816103c8565b82525050565b60006102e76011836103a5565b91506102f28261045a565b602082019050919050565b600061030a6024836103a5565b915061031582610483565b604082019050919050565b610329816103f4565b82525050565b600060208201905061034460008301846102cb565b92915050565b60006020820190508181036000830152610363816102da565b9050919050565b60006020820190508181036000830152610383816102fd565b9050919050565b600060208201905061039f6000830184610320565b92915050565b600082825260208201905092915050565b60006103c1826103d4565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600060ff82169050919050565b600061040c826103f4565b915060ff8214156104205761041f61042b565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f57686974656c6973742069732066756c6c000000000000000000000000000000600082015250565b7f416464726573732068617320616c7265616479206265656e2077686974656c6960008201527f7374656400000000000000000000000000000000000000000000000000000000602082015250565b6104db816103b6565b81146104e657600080fd5b5056fea2646970667358221220f7756d37669fb334d50a781f275065f471bbab3e48214f0d9a548dec80498ad464736f6c63430008040033',
  linkReferences: {},
  deployedLinkReferences: {},
}

export const WHITELIST_CONTRACT_ADDRESS =
  '0xfF6A5bdFcb2E3982fCaA29A287ac16515c21dF69'