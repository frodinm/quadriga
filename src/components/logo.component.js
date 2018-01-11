import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image, 
  FlatList,
  Dimensions,
  TouchableNativeFeedback,
  TouchableHighlight
} from 'react-native';
import { SearchBar } from 'react-native-elements'
import IOSicon from 'react-native-vector-icons/dist/Ionicons'
import {Logos} from 'util'

const {height,width} = Dimensions.get('window');


export class LogoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      results : Logos
       }
       this.handleChangeText = this.handleChangeText.bind(this);
       this.handleRender = this.handleRender.bind(this);
    }
  componentDidMount(){
  
  }
  _keyExtractor = (item, index) => item.name;

  handleRender(item,index){
    const {closeFunction} = this.props;
    if(Platform.OS === 'android'){
      if(TouchableNativeFeedback.canUseNativeForeground()){
        return (
            <TouchableNativeFeedback onPress={function(){closeFunction.return(item.acronym,item.name)}} useForeground={true} background={TouchableNativeFeedback.Ripple()} delayPressIn={0}>
                <View key={index} style={{alignItems:'center',paddingBottom:10}}>
                <Image style={{height:height/6,width:width/2,margin:5}} resizeMode="contain" source={item.logo}/>
                <Text>{item.name} ({item.acronym})</Text>
                </View>
            </TouchableNativeFeedback>
        )
    }else{
      return(
        <TouchableHighlight onPress={function(){closeFunction.return(item.acronym,item.name)}} >
              <View key={index} style={{alignItems:'center',paddingBottom:10,backgroundColor:'#F5FCFF'}}>
              <Image style={{height:height/6,width:width/2,margin:5}} resizeMode="contain" source={item.logo}/>
              <Text>{item.name} ({item.acronym})</Text>
              </View>
          </TouchableHighlight>
      )
    }
  }else{
    return(
      <TouchableHighlight onPress={function(){closeFunction.return(item.acronym,item.name)}} >
            <View key={index} style={{alignItems:'center',paddingBottom:10,backgroundColor:'#F5FCFF'}}>
            <Image style={{height:height/6,width:width/2,margin:5}} resizeMode="contain" source={item.logo}/>
            <Text>{item.name} ({item.acronym})</Text>
            </View>
        </TouchableHighlight>
    )
  }
  }
  
 handleChangeText(text){
    const newArray = []
    Logos.map((item)=>{
      if(item.name.toLowerCase().indexOf(text.toLowerCase()) != -1){
        newArray.push(item)
      }
    })
    this.setState({
      results: newArray
    })


  }
  render() {
    return (
        <View style={styles.container}>
        <View style={{flexDirection:'row',width:width/1.2}}>
          <SearchBar
            round
            lightTheme
            placeholder='Type Here...' 
            onChangeText={(text)=>{this.handleChangeText(text)}}
            containerStyle={{width:'100%'}}
          />
          <View style={{width:width/6,justifyContent:'center',alignItems:'center',backgroundColor:'#e1e8ee'}}>
            <TouchableOpacity onPress={()=>{this.props.modalRef.close()}}>
              <IOSicon name="ios-close" size={35}/>
            </TouchableOpacity>
          </View>
          </View>
        <FlatList
        data={this.state.results}
        keyExtractor={this._keyExtractor}
        renderItem={({item,index}) => this.handleRender(item,index)}
        numColumns={2}
        bounces={true}
        extraData={this.state}
        style={{backgroundColor:'#fff'}}/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:width,
    backgroundColor:'#fff',
  },
  preview: {
    flex: 1,
    
  },
  flashButton: {
    margin: 25,
  
  },

});