import React from 'react';
import Summary from './../../../components/AccountLinking/Summary/index';
import Arbour from './../../../components/AccountLinking/Arbour/index';
import Bloom from './../../../components/AccountLinking/Bloom/index';
import MutualFunds from './../../../components/AccountLinking/MutualFunds/index';
import PrivateEquity from './../../../components/AccountLinking/PrivateEquity/index';
import AssetsPayCash from './../../../components/AccountLinking/AssetsPayCash/index';
import './../common/AccountLinking.css';
import IoIosArrowLeft from 'react-icons/lib/io/ios-arrow-left';
import IoIosArrowRight from 'react-icons/lib/io/ios-arrow-right';

//const refs = React.createRef();
class TabBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Summary',
        };
        //this.scroll = React.createRef();
    }

    componentDidMount() {
        console.log(document.getElementById("tab").offsetWidth, "width");
        console.log(document.getElementById("tab").offsetHeight, "height");
    }
    // Scroll using Document getElementById
    rightArrowClick=()=>{
        let scrollLeft = (document.getElementById("tab").offsetWidth)/6;
        document.getElementById('tab').scrollTo({
            left: scrollLeft,
            behavior: "smooth"
        })
    };

    leftArrowClick=()=>{
        document.getElementById('tab').scrollTo({
            left: -1216,
            behavior: "smooth"
        })
    };

    // rightArrowClick=()=>{
    //     this.scroll ? (this.scroll.current.scrollLeft +=205) : null;
    // };

    // leftArrowClick=()=>{
    //     this.scroll ? (this.scroll.current.scrollLeft -=205) : null;
    // };

    renderSelectedTabContent = () => {
        switch (this.state.selectedTab) {
            case 'Summary':
                return(
                    <div className="tabContent">
                        <Summary/>
                    </div>
                );
            case 'Arbor':
                return (
                    <div className="tabContent">
                        <Arbour/>
                    </div>
                );
            case 'Bloom':
                return (
                    <div className="tabContent">
                        <Bloom/>
                    </div>
                );
            case 'Mutual Funds':
                return (
                    <div className="tabContent">
                        <MutualFunds/>
                    </div>
                );
            case 'Private Assets':
                return (
                    <div className="tabContent">
                        <PrivateEquity/>
                    </div>
                );
            case 'Assets Pay Cash':
                return (
                    <AssetsPayCash/>
                );
            default: {
                return (
                    <div className="tabContent">
                        <Summary/>
                    </div>
                )
            }
        }
    };

    render() {
        return (
            <div className="containerFluid">
                <div className="tabContainer">
                    <IoIosArrowLeft className="CustomArrowLeft" size={30} onClick={this.leftArrowClick}/>
                    <div id="tab"  ref={this.scroll} className="tabs">
                        <button className={(this.state.selectedTab === 'Summary') ? ('selectedTabStyle') : ('unSelectedTabStyle')}
                                onClick={()=> this.setState({selectedTab: 'Summary'})}
                                >Summary</button>
                        <button className={(this.state.selectedTab === 'Arbor') ? ('selectedTabStyle') : ('unSelectedTabStyle')}
                                onClick={()=> this.setState({selectedTab: 'Arbor'})}
                                >Arbor</button>
                        <button className={(this.state.selectedTab === 'Bloom') ? ('selectedTabStyle') : ('unSelectedTabStyle')}
                                onClick={()=> this.setState({selectedTab: 'Bloom'})}
                                >Bloom</button>
                        <button className={(this.state.selectedTab === 'Mutual Funds') ? ('selectedTabStyle') : ('unSelectedTabStyle')}
                                 onClick={()=> this.setState({selectedTab: 'Mutual Funds'})}
                                 >Mutual Funds</button>
                        <button className={(this.state.selectedTab === 'Private Assets') ? ('selectedTabStyle') : ('unSelectedTabStyle')}
                                onClick={()=> this.setState({selectedTab: 'Private Assets'})}
                                >Private Assets</button>
                        <button className={(this.state.selectedTab === 'Assets Pay Cash') ? ('selectedTabStyle') : ('unSelectedTabStyle')}
                                onClick={()=> this.setState({selectedTab: 'Assets Pay Cash'})}
                                >Assets Pay Cash</button>
                        <button className={(this.state.selectedTab === 'Fixed Income') ? ('selectedTabStyle') : ('unSelectedTabStyle')}
                                onClick={()=> this.setState({selectedTab: 'Fixed Income'})}
                               >Fixed Income</button>
                    </div>
                    <IoIosArrowRight className="CustomArrowRight" size={30} onClick={this.rightArrowClick}/>
                </div>
                {this.renderSelectedTabContent()}
            </div>
        );
    }
}

export default TabBar;
