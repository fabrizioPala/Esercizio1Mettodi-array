
  
  const persons = [
    { name: 'Paul', age: 16 },
    { name: 'George', age: 17 },
    { name: 'Lucas', age: 21 },
    { name: 'Marco', age: 32 },
    { name: 'Peter', age: 18 },
    { name: 'Carl', age: 13 },
    { name: 'Simon', age: 24 },
    { name: 'Mark', age: 15 },
    { name: 'Sandra', age: 34 },
    { name: 'Alice', age: 28 }
  ];


  
  //implementare la funzione adultFilter che, dato un array di persone, 
  //filtra e restituisce soltanto coloro che sono maggiorenni.

function adultFilter(array){
  let adult= array.filter(person=> person.age>18)
 return adult
}


let result= adultFilter(persons);
console.log(result);