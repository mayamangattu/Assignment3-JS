// 1.  Create a JavaScript restaurantManager class

 class restaurantManager{
    restaurantList
    constructor(list){
        this.restaurantList=list

    }
}
  
 // Restaurant List- array of objects

 const restaurantList=[{ id: 1, restaurantName:'KFC', address:'Anand Vihar', city: 'Delhi'},
              {id: 2, restaurantName:'Domino', address:'Savita Vihar', city: 'Delhi'},
              {id: 3, restaurantName:'Burger King', address:31, city: 'Pune'},
              {id: 4, restaurantName:'Subway', address:'Cantonment', city: 'Mumbai'},
              
 ]

 const rmObj = new restaurantManager(restaurantList)
 console.log(rmObj)

 // Print all restaurant names

    restaurantList.forEach(i=>{
            console.log(i.restaurantName)
           }
           )
    
 
// Filter  the restaurant on the basis of the city provided in argument

const filterCity = (restaurantList.filter(i=>i.city=='Delhi'))
                    console.log(filterCity);


 
 
// 2. order data

const orderData = { 
    'Below500':20,
    '500-1000':29,
    '1000-1500':30,
    '1500-2000':44,
    'Above2000':76
    }

 // a) Calculate the total number of orders placed for the restaurant.

 let total =0
 for (const i in orderData) {
 total+=orderData[i]
 }
 console.log(`Total orders are ${total}`)



// b) Calculate the number of order proportion options.

   const headers = Object.keys(orderData);
console.log(headers);


// c) Calculate the percentage of each proportion in given format:


let newArr = [];
const response = headers.map((i, index) => {
      const obj = {
          id : index + 1,
          order: i,
          orderpercentage : ((orderData[i]/total )*100).toFixed(2),
          restaurant: 'Punjabi Tadka'
      }
      newArr.push(obj);
})

console.log(newArr);

                   