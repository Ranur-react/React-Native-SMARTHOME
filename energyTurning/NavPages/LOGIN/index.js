/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Svg
} from 'react-native';
import Smartlamp from  './../../Assets/icons/smartlamp';
import GoogleIcon from  './../../Assets/icons/GoogleIcon';

const {width:WIDTH} =Dimensions.get('window');
const {height:HEIGHT} =Dimensions.get('window');
let i=0;
let bfore=0;

export default class Setup extends Component {
  constructor (props) {
    super(props)
    this.state = {
      TpScroll:'',
    }
  }
  onScrollLayout=(e)=>{
          let y=e.nativeEvent.contentOffset.y;
          let t=HEIGHT/20;
          let x=t/y;
          console.log(x);
        if(bfore <= x){
              i=i-0.04;
              this.setState({TpScroll:'rgba(255,255,255,'+i+')'})
        }
        else{
          i=i+0.04;
              this.setState({TpScroll:'rgba(255,255,255,'+i+')'})
        }
        bfore=x;
        if(y==0){
          i=0;
            this.setState({TpScroll:'rgba(255,255,255,0)'})
        }
  }
  render() {
    return (
      <View style={{flex: 1}}>
          <View style={styles.Header}>
            <View>
              <Smartlamp  />
              <Text style={styles.HeaderFontTop}>Control</Text>
                <Text style={styles.HeaderFontBottom}>Energy</Text>
            </View>
          </View>
      <ScrollView onScroll={this.onScrollLayout} style={[styles.container,{backgroundColor:this.state.TpScroll}]}>
          <View style={styles.SubContainer}>
          <View style={styles.FooterbarShadow}>

          </View>
          <View style={styles.Footerbar}>

          </View>

            <View style={styles.Footer}>
              <View style={styles.FooterContainer}>
                    <Text>Lets Control</Text>
                    <Text>Your Energy From</Text>
                    <Text>Hand</Text>
                    <View>
                        <GoogleIcon />
                    </View>
              </View>
              <View style={styles.FooterContainer}>
                  <Text>Data2</Text>
              </View>
              <View style={styles.FooterContainer}>
                  <Text>Data3</Text>
              </View>
              <View style={styles.FooterContainer}>
                  <Text>Data4</Text>
              </View>
              <View style={styles.FooterContainer}>
                  <Text>Data4</Text>
              </View>

            </View>
          </View>
      </ScrollView>
    </View>

    );
  }
}

const styles = StyleSheet.create({
  Header:{
    flex: 1,
    top:100,
    // backgroundColor: 'rgba(50,50,50,0.5)'
    backgroundColor: 'rgba(255,255,255,1)',
    alignItems:'center',
  },
HeaderFontTop:{
  fontSize:50,
  color:'rgba(50,50,50,0.5)',
  marginLeft:-40
},HeaderFontBottom:{
  fontSize:50,
  marginLeft:70,
  color:'rgba(50,50,50,0.5)'
},
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: WIDTH,
    height: HEIGHT,
    flexDirection: 'column',
  },
  SubContainer:{
    flexDirection:'column',
    flexWrap:'wrap',
    width: WIDTH,
    height: HEIGHT+(HEIGHT/2+100),

  },
  Footerbar:{
    // flex: 1,
    position: 'absolute',
    top:HEIGHT/2-1,
    right: 0,
    alignSelf: 'flex-end',
    borderWidth: 0,
    backgroundColor: 'rgba(255,255,255,0.8)',
    width: 101,
    height: 101,
    borderBottomRightRadius:100,
    borderTopLeftRadius:100,

  },
  FooterbarShadow:{
    top:HEIGHT/2,
    alignSelf: 'flex-end',
    backgroundColor: 'darkturquoise',
    height: 100,
    width: 100,
    borderTopLeftRadius:100,

  },
  Footer:{
    flex: 1,
    top:HEIGHT/2,
    flexDirection:'column',
    backgroundColor: 'darkturquoise',
    borderColor: 'white',
    width: WIDTH,
    borderTopLeftRadius:110,
    justifyContent: 'center',
    alignItems: 'center',
  },
  FooterContainer:{
    flex:1,
    width:WIDTH-100,
    borderWidth:1,
    marginTop:50,
    borderColor:'black',
    // flexWrap:'wrap',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'flex-start'
  }
});
