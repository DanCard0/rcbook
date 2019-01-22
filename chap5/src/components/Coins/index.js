import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Coins from './Coins';
import { fetchCoins } from '../../actions/coinsActions';

const mapStateToProps = ({ coins }) => ({
    coins
});

const mapDispatchToProps = dispatch => bindActionCreators(
    { fetchCoins },
    dispatch
);

export default connect( mapStateToProps, mapDispatchToProps )(Coins);