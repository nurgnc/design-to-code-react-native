import React from 'react'
import { SafeAreaView, View, Image, TouchableOpacity, Text, TextInput, StyleSheet, FlatList } from 'react-native'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promotion: [
        { id: 1, title: 'January Offer', description: 'Get cashback up to 30% for all transaction' },
        { id: 2, title: 'February Offer', description: 'Get cashback up to 30% for all transaction' },
        { id: 3, title: 'March Offer', description: 'Get cashback up to 30% for all transaction' },
        { id: 4, title: 'April Offer', description: 'Get cashback up to 30% for all transaction' },
        { id: 5, title: 'May Offer', description: 'Get cashback up to 30% for all transaction' },
      ]
    }
  }

  renderItem = ({ item }) => {
    return <View style={style.promotionItem}>
      <Text style={style.promotionItemTitle}>{item.title}</Text>
      <Text style={style.promotionItemDescription}>{item.description}</Text>
    </View>
  }
  render() {
    const { promotion } = this.state;
    return (
      <SafeAreaView>
        <View style={style.header}>
          <View>
            <Text style={{ color: '#535353', fontSize: 18, fontWeight: '500', marginBottom: 3 }}>Hi, Sanjeev</Text>
            <Text style={{ fontSize: 14, color: '#FBA346' }}>Sarjapur, Bangalore</Text>
          </View>
          <View>
            <Image source={{ uri: "https://images.unsplash.com/photo-1546753051-f9cbab09c91b" }} style={style.avatar} />
          </View>
        </View>
        <View style={style.banner}>
          <Text style={style.bannerText}>Best Safety Standards amid Covid-19</Text>
        </View>
        <View style={style.content}>
          <View style={style.searchArea}>
            <View style={style.searchInputContainer}><TextInput placeholder="Search" placeholderTextColor={"#BBBBBB"} style={style.searchInput} /></View>
            <View style={style.searchButtonContainer}><TouchableOpacity style={style.searchButton}><Text>Ara</Text></TouchableOpacity></View>
          </View>
          <FlatList
          style={{paddingHorizontal: 10}}
            showsHorizontalScrollIndicator={false}
            data={promotion}
            horizontal={true}
            renderItem={this.renderItem}
          />
        </View>
        <View style={style.categoryArea}></View>
      </SafeAreaView>
    )
  }
}


const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 15,
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
    paddingVertical: 15,
    paddingHorizontal: 20

  },
  searchInputContainer: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.62,
    elevation: 8,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  searchInput: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 10,
  },
  searchButtonContainer: {
    padding: 19,
    marginLeft: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.62,
    elevation: 8,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  promotion: {
    marginTop: 20,
  },
  promotionItem: {
    backgroundColor: '#FFA726',
    padding: 10,
    flex: 1,
    width: 281,
    marginRight: 10,
    marginLeft: 10,
    height: 152,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  promotionItemTitle: {
    color: '#A44200',
    fontSize: 25,
    fontWeight: '500'
  },
  promotionItemDescription: {
    color: 'white',
    marginTop: 20,
    fontSize: 18,
    fontWeight: '500'
  },
})