console.log('hello');
const getMonthlyData = (data)=>{
    const months = data.reduce((acc, x)=>{
        //get date
        const date = new Date(x.date);
        //create key
        const year = `${date.getFullYear()}-${date.getMonth()}`;
        //add key as property to return object
        if (!acc[year]) acc[year] = [];
        // push current data onto array
        acc[year].push(x);
        return acc;
    }, {});
    return months;
};
const getWeeklyData = (data)=>{
    const months = data.reduce((acc, x)=>{
        //get date
        const date = new Date(x.date);
        //create key
        const year = `${date.getFullYear()}-${date.getMonth()}`;
        //add key as property to return object
        if (!acc[year]) acc[year] = [];
        // push current data onto array
        acc[year].push(x);
        return acc;
    }, {});
    return months;
};
const getData = async ()=>{
    const response = await fetch('./run-data.json');
    const data = await response.json();
    getMonthlyData(data);
};
getData();

//# sourceMappingURL=index.de158e3a.js.map
