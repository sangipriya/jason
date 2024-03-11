let book={
    "Name":"Silence",
    "Author":"RG",
    "pages":281,
    "Copies": 10,
    "Title":"Life Lessons",
    "price": 360.20
}


//console.log(typeof(book));


//for in loop:

for(let item in book){

 //console.log(item ,':',book[item])
}

//console.log(book.pages)
//console.log(book.Title)
//console.log(book.price)


//For..off Loop:
/*This method is used to convert array of keys in Object.*/

let value= Object.keys(book)

for(let val of value){
    //console.log(val,':',book[val])
}

//for..Each loop:

let numbers= Object.keys(book)

numbers.forEach(simple)

function simple(element){
   // console.log(element,':',book[element])
}

//For loop:

let arr=Object.keys(book)


for(let i=0;i<=arr.length;i++){

    console.log(arr[i],':',book[arr[i]])
}









