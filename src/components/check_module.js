export default {
    props: ['decks'],

    data() {
       return {
           deckChoose: false,
       }
    },
    methods: {
      chooseCards() {
          this.deckChoose = true
      }
    },

    /*html*/
    template: `
    <div>What deck do you want to use?</div>
    <form @submit.prevent="chooseCards">
    <input type="radio">
    <option v-for="deck in decks" >
      {{ deck.name }}
    </option>
      <input type="submit">
    </form>
    
    <div v-if="deckChoose">
      <div>Choose what cards do you want:</div>
    </div>
    `
}