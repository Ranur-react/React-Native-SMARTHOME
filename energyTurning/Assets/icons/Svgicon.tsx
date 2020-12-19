import * as React from "react";
import Svg, { Path } from "react-native-svg";
import User from './../../Assets/icons/user';
import Enter from './../../Assets/icons/enter';
import Mata from './../../Assets/icons/show';
import Smartlamp from './../../Assets/icons/smartlamp';

let Svgicon=(prop)=>{
  let ikon=[];
      if(prop.name == 'Enter'){
        ikon.push(<Enter Color={prop.color} />)
      }else if(prop.name == 'Mata'){
        ikon.push(<Mata Color={prop.color} />)
      }else if(prop.name == 'User'){
        ikon.push(<User Color={prop.color}  />)
      }else if(prop.name == 'Smartlamp'){
        ikon.push(<Smartlamp Color={prop.color}  />)
      }
  return ikon;
}

  export default Svgicon;
