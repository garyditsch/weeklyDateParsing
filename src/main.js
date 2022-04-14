console.log('hello')
import { getWeek } from 'date-fns'

const getMonthlyData = (data) => {
    const months = data.reduce((acc, x) => {
        //get date
        const date = new Date(x.date)
        
        //create key
        const year = `${date.getFullYear()}-${date.getMonth()}`

        //add key as property to return object
        if(!acc[year]){
            acc[year] = []
        }

        // push current data onto array
        acc[year].push(x)

        return acc        
    }, {})
    return months
}

const getWeeklyData = (data) => {
    const months = data.reduce((acc, x) => {
        //get date
        const date = new Date(x.date)

        //get week
        const week = getWeek(date, {weekStartsOn: 1})
        
        //create key
        const year = `${date.getFullYear()}-${week}`

        //add key as property to return object
        if(!acc[year]){
            acc[year] = []
        }

        // push current data onto array
        acc[year].push(x)

        return acc        
    }, {})
    return months
}

const getData = async () => {
    const response = await fetch('https://gist.githubusercontent.com/garyditsch/fedf0141723e9b69edc401fa907115f7/raw/a989d4c973a5c0cc75c27f4e3840c0dd0a723292/run.json')
    const data = await response.json()
    const months = await getWeeklyData(data)    
    console.log(months)
}

getData()

