import { VotingSections } from '../src/sections/voting';
import Template from '../src/template/template';

const Voting = () => {
    return (
        <Template
            section="voting"
            element={[<VotingSections key="votingelement" />]}
        />
    );
};

export default Voting;
