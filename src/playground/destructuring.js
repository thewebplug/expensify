// console.log('destructuring...');

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);
 
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffeeHot, , twoSeventyFive] = item;
console.log(`A ${coffeeHot} costs ${twoSeventyFive}`)