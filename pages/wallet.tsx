import { Box } from '@chakra-ui/layout';
import CosmosCoins from '../src/assets/comoscoins';
import ERC20Assets from '../src/assets/erc20Assets';
import EvmosHeader from '../src/header/evmosheader';
import Template from '../src/template/template';

const Wallet = () => {
    return (
        <Template
            active="wallet"
            element={[
                <EvmosHeader key="header"></EvmosHeader>,
                <Box h="full">
                    <CosmosCoins key="aphoton"></CosmosCoins>
                    <ERC20Assets key="erc20"></ERC20Assets>
                </Box>,
            ]}
        ></Template>
    );
};

export default Wallet;
