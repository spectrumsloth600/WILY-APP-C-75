import React from 'react';
import { Text, View, FlatList, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import db from '../config'

export default class  SeatchScreen extends React.Component {
    constructer(props){
        super(props)
        this.state = {
            allTransactions:[],
            lastVisibleTransaction: null,
            search:''
        }
    }

    fetchMoreTransactions = async ()=>{
        var text = this.state.search.toUpperCase()
        var enteredText = text.split("")

        if(enteredTest[0].toUpperCase() ==='B'){
            const query = await AbortController.collection("transactions").where('bookId','==',text).startAfter(this.state.lastVisibleTransaction).limit(10).get()
            query.docs.map((doc))=>{
                this.setState({
                    allTransaction:[...this.state.allTransaction,doc.data()],
                    lastVisibleTransaction: doc 
                
                })
            })

            }
        }



        searchTransactions=async(text) =>{
            var enteredText = text.split("")
            if(enteredText[0].toUpperCase() === 'B'){
                const transaction = await db.collection("transactiton").where('bookId','==',text).get()
                transaction.docs.map((doc))=>{
                    this.setState({
                        allTransactions:[...this.state.allTransactions,doc.data()],
                        lastVisibleTransaction:doc

                    })

                })
                }
            }

            componentDidMount = async ()=>{
                const query = await db.collection("transactions").limit(10).get()
                query.docs.map((doc)=>{
                    this.setState({
                        allTransactions: [],
                        lastVisibleTransaction:doc
                    })
                    })
                }

                render() {
                    return (
                      <View style={styles.container}>
                        <View style={styles.searchBar}>
                      <TextInput 
                        style ={styles.bar}
                        placeholder = "Enter Book Id or Student Id"
                        onChangeText={(text)=>{this.setState({search:text})}}/>
                        <TouchableOpacity
                          style = {styles.searchButton}
                          onPress={()=>{this.searchTransactions(this.state.search)}}
                        >
                          <Text>Search</Text>
                        </TouchableOpacity>
                        </View>
                      <FlatList
                      data={this.state.allTransactions}
                      renderItem={({item0})=>{
                          <View styles={{borderBottomWidth:2}}>
                              <Text>{"book id:"+item.bookId}</Text>
                              <Text>{"student id:"+item.studentId}</Text>
                              <Text>{"transactionT type:"+item.transactionType}</Text>
                              <Text>{"date:"+item.date.toDate}</Text>


                              

                          </View>
                    )}
                      keyExtractor={(item,index)=>index.toString()}
                          onEndReached={this.fetchMoreTransactions}
                          onEndReachedThreshold={0.7}
                          />
                         </View> 
                      );
                      }}
                                        
