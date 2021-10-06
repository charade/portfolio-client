import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useDirectionStyle} from '../../assets/styles/index.styles';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';

export default function Down({to} : {to :string}){
    const classes = useDirectionStyle();
   
    return(
        <div className = {classes.root} style = {{top : '85%'}}>
            <h3 className = {classes.text}>{to}</h3>
            <KeyboardArrowDownIcon className = {classes.icon}
              
            />
        </div>
    )
}