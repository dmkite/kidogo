import React, {Component} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import {styles} from './styles'
import {styles as formStyles} from '../Forms/styles'

class PaymentSection extends Component{
  constructor(props){
    super(props)
    this.state={
      date: this.returnToday(),
      amount: 0
    }
  }


  returnToday = () => {
    const date = new Date()
    return (
      `${date.getDate() < 10 ? '0' + date.getDate() : date}-${Number(date.getMonth()) + 1 < 10 ? '0' + Number((date.getMonth()) + 1) : Number(date.getMonth()) + 1}-${date.getFullYear()}`
      )
  }

  numberValidation = (text, field, num1, num2) => {
    let charCode
    if (text.length > 0) charCode = text[text.length - 1].charCodeAt(0)
    if (text.length > 0 && (charCode < 48 || charCode > 57)) text = text.slice(0, (text.length - 1))
    if (text.length > this.state[field].length) { //checks if deleting, don't add '-'
      if ((num1 && text.length === num1) || (num2 && text.length === num2)) text += '-'
    }
    this.setState({
      [field]: text
    })
  }

  render(){
    return (
      <View>
        <Text style={styles.balance}>K {this.props.balance}</Text>
        <View style={styles.inputHolder}>
            <Text style={styles.prefix}>K</Text>
            <TextInput
              style={[styles.input, styles.amountInput, {borderLeftWidth: 0, borderTopLeftRadius: 0, borderBottomLeftRadius: 0}]} 
              keyboardType="number-pad"
              placeholder='amount'
              onChangeText={(text)=> this.numberValidation(text, 'amount')}
            />
          <TextInput 
            style={[styles.input, styles.dateInput]}
            maxLength={10}
            keyboardType="number-pad"
            placeholder="DD-MM-YYYY"
            value={this.state.date}
            onChangeText={(text) => this.numberValidation(text, 'date', 2, 5)}
          />
        </View>
          <TouchableOpacity style={styles.submit} onPress={() => {
              this.props.makePayment(this.props.id, this.state.amount, this.props.balance, this.state.date)
              this.props.changeField('balance', this.props.balance - this.state.amount, this.props.id)
              }}>
            <Text style={styles.btnText}>Make Payment</Text>
          </TouchableOpacity>
      </View>
    )

  }
}

export default PaymentSection