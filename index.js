// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


findMatching = (drivers, name) => {
    const driver = drivers.filter(drivers => drivers == name)
    if (driver){
        return driver
    }
}

// fuzzyMatch = (drivers, letters) => {
//     const firstTwo = drivers.filter(drivers => drivers.indexOf(letters) == letters)
//         if (firstTwo){
//             return firstTwo
//         }
// }

console.log(drivers)
console.log(findMatching(drivers, "Bobby"))