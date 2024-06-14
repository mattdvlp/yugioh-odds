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
      <fieldset>
      <div v-for="deck in decks">
          <input v-if="deck.length > 0" type="radio" v-bind:value="deck[0].id">
        {{deck}}
      
      </div>
      </fieldset>
      <input type="submit">
    </form>
    
    <div v-if="deckChoose">
      <div>Choose what cards do you want:</div>
    </div>
    `
}