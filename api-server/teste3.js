const people = {
  kassidi: {
    name: 'Kassidi Henry',
    age: 24,
    favoriteMovie: 'Remember the Titans'
  },
  tyler: {
    name: 'Tyler McGinnis',
    age: 25,
    favoriteMovie: 'Fatigue: A JavaScript Story'
  },
  jake: {
    name: 'Jake Lingwall',
    age: 26,
    favoriteMovie: 'Casablanca'
  }
}

const friends = ['kassidi', 'jake']
const novoarray = friends.map(friend => people[friend])

console.log(novoarray)
