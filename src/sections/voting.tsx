import { useColorModeValue } from '@chakra-ui/color-mode';
import Icon from '@chakra-ui/icon';
import { Flex, Heading, SimpleGrid, VStack } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';
import { useContext } from 'react';
import { AiOutlineSend, AiOutlineTransaction } from 'react-icons/ai';
import {
    MdOutlineSendAndArchive,
    MdOutlineSendToMobile,
    MdScheduleSend,
    MdUpdate,
} from 'react-icons/md';
import { FaEthereum, FaReact } from 'react-icons/fa';
import MsgSend from '../messages/msgsend';
import MyIcon from '../messages/messagesIcon';
import { store, Balance } from '../utils/state';
import General, { GeneralCards } from './general';
import MessagesIcon from '../messages/messagesIcon';
import DelegateAphotons from '../messages/delegate';
import UndelegateAphotons from '../messages/undelegate';
import TitleH2 from '../template/heading2';
import Strong from '../template/strong';
import RegisterERC20 from '../messages/registerERC20';
import ConvertCoinProposal from '../messages/convertcosmoscoin';
import RegisterCoin from '../messages/registercoin';
import ToggleToken from '../messages/toggletoken';
import UpdateTokenPair from '../messages/update_toker_pair';
import { SiInternetarchive } from 'react-icons/si';
import { BsToggles2 } from 'react-icons/bs';
import { RiReactjsLine } from 'react-icons/ri';

function VotingSubtitle() {
    return (
        <TitleH2
            content={
                <>
                    <Strong content={'Review'} />
                    {' the proposals and '}
                    <Strong content={'vote!'} />
                    <br />
                </>
            }
        />
    );
}

export function VotingIconFooter() {
    return (
        <Icon viewBox="0 0 40 35" mt={14} boxSize={10} color={'teal.200'}>
            <SiInternetarchive fill={'currentColor'} size="40px" />
        </Icon>
    );
}

function VotingGrid() {
    const globalState = useContext(store);
    return (
        <VStack w="full">
            <chakra.h1
                py={5}
                fontSize={35}
                fontFamily={'Work Sans'}
                fontWeight={'bold'}
                color={useColorModeValue('gray.700', 'gray.50')}
            >
                Proposal list
            </chakra.h1>

            <SimpleGrid
                columns={{
                    base: 1,
                    xl: globalState.state.balanceCosmos.length > 2 ? 2 : 1,
                }}
                spacing={'20'}
                mt={16}
                mx={'auto'}
            >
                {/* {globalState.state.balanceCosmos.length > 0 ? (
                globalState.state.balanceCosmos.map(
                    (coin: Balance, index: number) => { */}

                <GeneralCards
                    key={'registercoins'}
                    name={'Register Coins'}
                    role={`Create a proposal to register your cosmos coin.`}
                    content={[<RegisterCoin key="rcproposal" />]}
                    iconComponents={[
                        <MessagesIcon
                            key="msgsendicon2"
                            icon={<RiReactjsLine size={'25'} />}
                        />,
                    ]}
                />
            </SimpleGrid>

            <chakra.h1
                py={5}
                fontSize={35}
                fontFamily={'Work Sans'}
                fontWeight={'bold'}
                color={useColorModeValue('gray.700', 'gray.50')}
            >
                Updates
            </chakra.h1>

            <SimpleGrid columns={[1, 2]} spacing={'20'} mt={16} mx={'auto'}>
                <GeneralCards
                    key={'tt'}
                    name={'Toggle Tokens'}
                    role={`Create a proposal to toggle an intrarelaayer token.`}
                    content={[<ToggleToken key="ttproposal" />]}
                    iconComponents={[
                        <MessagesIcon
                            key="msgsendicon3"
                            icon={<BsToggles2 size={'24'} />}
                        />,
                    ]}
                />

                <GeneralCards
                    key={'up'}
                    name={'Update Pairs'}
                    role={`Create a proposal to update an erc20 contract address.`}
                    content={[<UpdateTokenPair key="upproposal" />]}
                    iconComponents={[
                        <MessagesIcon
                            key="msgsendicon4"
                            icon={<MdUpdate size={'24'} />}
                        />,
                    ]}
                />
            </SimpleGrid>
        </VStack>
    );
}

export const VotingSections = () => {
    return (
        <General
            title="Voting"
            subtitle={[<VotingSubtitle key="votingssub" />]}
            content={[<VotingGrid key="votingsgrid" />]}
            icon={[<VotingIconFooter key="votingfooter" />]}
        ></General>
    );
};
