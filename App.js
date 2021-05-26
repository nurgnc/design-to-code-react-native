import React, { Component } from 'react'
import { SafeAreaView, View, Image, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView>
        <View style={style.header}>
          <View>
            <Text style={{ color: '#535353', fontSize: 18, fontWeight: 500, marginBottom: 3 }}>Hi, Sanjeev</Text>
            <Text style={{ fontSize: 14, color: '#FBA346'}}>Sarjapur, Bangalore</Text>
          </View>
          <View>
            <Image source={{uri: "https://images.unsplash.com/photo-1546753051-f9cbab09c91b"}} style={style.avatar} />
          </View>
        </View>
        <View style={style.banner}>
          <Text style={style.bannerText}>Best Safety Standards amid Covid-19</Text>
        </View>
        <View style={style.content}>
          <View style={style.searchArea}>
            <View style={style.searchInputContainer}><TextInput placeholder="Search" placeholderTextColor={"#BBBBBB"} style={style.searchInput} /></View>
            <View><TouchableOpacity style={style.searchButton}><Text>Ara</Text></TouchableOpacity></View>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}


const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical:50,
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#373A3D'
  },
  banner: {
    backgroundColor: '#FBA346',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bannerText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 14
  },
  searchArea: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    
  },
  searchInputContainer: {
    flex: 1,
  },
  searchInput: {
    padding:10,
  }

})