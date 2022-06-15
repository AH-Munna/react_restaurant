import React from 'react';
import { connect } from "react-redux";
import PageLoad from './PageLoad.js';
// import {
//     useHref, useInRouterContext, useLinkClickHandler, useLocation, useMatch, useNavigate, useNavigationType, useOutlet, useOutletContext, useParams, useResolvedPath, useRoutes, useSearchParams
// } from "react-router-dom";

const Home = props => {
    React.useEffect(() => {
        //console.log("props from useEffect: ", props);
    });
    document.title = "React Restaurant2";
    return (
        <>
            {/* {props.state.comments[3].comment} */}
            <PageLoad />
        </>
    );
}

const mapStateToProps = state => {
    //console.log("Home mapStateToProps: ", state);
    return {
        state: state.myReducer,
    }
}
// Store1.dispatch({ type: 'TEST', str: 'AH' });
// Store1.dispatch({ type: 'TEST2', value: 13 });

// class Home extends React.Component {
//     componentDidMount() {
//         console.log("props2: ", this.props);
//             this.props.dispatch({
//                 type: "TEST",
//             })
// //     }
//     render() {
//         console.log("props: ", this.props);
//         document.title = "React Restaurant2";
//         return (
//             <>Home</>
//         );
//     }
// }

export default connect(mapStateToProps)(Home);