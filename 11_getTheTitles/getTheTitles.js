const getTheTitles = function(obj) {
    let booktitles = obj.map(Object => Object.title)
    return booktitles

};

const books2 = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

console.log(getTheTitles(books2))
// Do not edit below this line
module.exports = getTheTitles;
