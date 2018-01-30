new Vue({
  el: '#app',
  data: {
    searchHero: '',
    heroes: [
      { name: 'Spiderman', image: true, bookmark: 'Bookmarkhere' },
      { name: 'Hulk', image: true, bookmark: 'Bookmarkhere' },
      { name: 'Iron Man', image: true, bookmark: 'Bookmarkhere' },
      { name: 'Captain America', image: true, bookmark: 'Bookmarkhere' },
      { name: 'Iron Man2', image: true, bookmark: 'Bookmarkhere' }
    ]
  },
  computed: {
    filterSearch() {
      return this.heroes.filter( hero => {
        return !this.searchHero || hero.name.toLowerCase().indexOf(this.searchHero.toLowerCase()) > -1
      })
    }
  }
});