import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useDirectionStyle} from '../../assets/styles/index.styles';
import { useSelector } from "react-redux";
import { RootStateType } from '../../state/index';
import { useDispatch } from 'react-redux';
import * as actionCreators from '../../state/action-creators';
import { bindActionCreators } from 'redux';

export default function Down({to} : {to :string}){
    const classes = useDirectionStyle();
    const store = useSelector((state : RootStateType) => state.scroll);
    const dispatch = useDispatch();
    const {scroll, stopScrolling} = bindActionCreators(actionCreators, dispatch);
    console.log(store);
    return(
        <div className = {classes.root} style = {{top : '85%'}}>
            <h3 className = {classes.text}>{to}</h3>
            <KeyboardArrowDownIcon className = {classes.icon}
                onClick = {() => scroll('down')}
            />
        </div>
    )
}