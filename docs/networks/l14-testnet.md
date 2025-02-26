---
sidebar_position: 4
---

# L14 Public Testnet

The [L14 Public Testnet](http://explorer.l14.lukso.network/) is the soon deprecated POA test network, currently used for all UniversalProfiles and issued (Pre) NFTs. L14 is up-to-date with the latest Ethereum forks until Constantinople.

Network ID: `22 (0x16)`

- RPC Endpoint: <https://rpc.l14.lukso.network>
- Explorer: <https://blockscout.com/lukso/l14>
- Faucet: <http://faucet.l14.lukso.network>

Enabled EiPs are:

- [eip140](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-140.md)
- [eip145](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-145.md)
- [eip211](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-211.md)
- [eip214](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-214.md)
- [eip658](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-658.md)
- [eip1014](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1014.md)
- [eip1052](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1052.md)
- [eip1283](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1283.md)

Not included compared to Ethereum mainnet:

- [eip1234](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1234.md) (Difficulty bomb adjustment)

## How to run a L14 testnet node

### Installing the node

Install a parity node `> 2.2.7-stable` as [described here](https://openethereum.github.io/Setup.html).

LUKSO L14 test-network requires most of [Constantinople transitions](https://blog.ethereum.org/2019/02/22/ethereum-constantinople-st-petersburg-upgrade-announcement/), this means you need to at least run parity > 2.2.7-stable.

### Running the node

Run your parity node and connect to the LUKSO L14 test network using:

```bash
$ parity --chain spec.json --bootnodes enode://6a6b0b286e3f96dee993d995f3fd435a065388664e211f02533e28c9ddc31089eb90f71d1386c3c74ee60f79df86cacdb10992c38e2f9cccac4881cb84526415@35.195.116.26:30303
```

The [spec.json](https://github.com/lukso-network/lukso-chain-spec/blob/l14/spec.json) is in [l14](https://github.com/lukso-network/lukso-chain-spec/tree/l14) branch of the `lukso-chain-spec` repository.

Should the above boot-node not work, you can find the current boot-node [here](https://github.com/lukso-network/lukso-chain-spec/blob/l14/bootnodes.txt).

## Repositories

- <https://github.com/lukso-network/l14-deploy-node-gcloud>
- <https://github.com/lukso-network/l14-chain-spec>
- <https://github.com/lukso-network/l14-dapps-validators>

## Resources

- https://medium.com/lukso/announcing-the-l14-test-network-38d7c622c6cb
- https://github.com/lukso-network/l14-deploy-node-gcloud
