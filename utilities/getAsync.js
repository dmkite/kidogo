import {SecureStore} from 'expo'

export default getAsync = async (payments, accounts, attendance, finances, caregivers, centres, questions) => {
  let signedIn = await SecureStore.getItemAsync('_SIGNEDIN')
  signedIn  = JSON.parse(signedIn)
  let id
  if(signedIn){
    let time
    if(signedIn.user){
      id = signedIn.user.id
    }
    if(signedIn){
      time = signedIn.time
    }
  }
  const dataObj = {}

  if (payments && id) {
    let payments = await SecureStore.getItemAsync(`_PAYMENTS_${id}`)
    if (!payments) payments = {}
    else payments = JSON.parse(payments)
    const newPayments = { ...payments }
    dataObj.newPayments = newPayments
  }
  if (accounts && id) {
    let accounts = await SecureStore.getItemAsync(`_ACCOUNTS_${id}`)
    if (!accounts) accounts = []
    else accounts = JSON.parse(accounts)
    const newAccounts = [...accounts]
    dataObj.newAccounts = newAccounts
  }
  if (attendance && id) {
    let attendance = await SecureStore.getItemAsync(`_ATTENDANCE_${id}`)
    if (!attendance) attendance = {}
    else attendance = JSON.parse(attendance)
    const newAttendance = { ...attendance }
    dataObj.newAttendance = newAttendance
  }

  if(finances && id){
    let finances = await SecureStore.getItemAsync(`_FINANCES_${id}`)
    if (!finances) finances = {}
    else finances = JSON.parse(finances)
    const newFinances = { ...finances }
    dataObj.newFinances = newFinances
  }

  if(caregivers ){
    let caregivers = await SecureStore.getItemAsync(`_CAREGIVERS`)
    if (!caregivers) caregivers = {}
    else caregivers = JSON.parse(caregivers)
    const newCaregivers = { ...caregivers }
    dataObj.newCaregivers = newCaregivers
  }

  if (centres ) {
    let centres = await SecureStore.getItemAsync(`_CENTRES`)
    if (!centres) centres = []
    else centres = JSON.parse(centres)
    const newCentres = [ ...centres ]
    dataObj.newCentres = newCentres
  }

  if (questions && id) {
    let questions = await SecureStore.getItemAsync(`_QUESTIONS_${id}`)
    if (!questions) questions = {}
    else questions = JSON.parse(questions)
    const newQuestions = {...questions}
    dataObj.newQuestions = newQuestions
  }

  return dataObj
} 