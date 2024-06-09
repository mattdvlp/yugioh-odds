import axios from "axios";

let request_call = '';

export default {

    data() {
      return {
          card: '',
          api_card: {
              name: '',
              image: ''
          },
      }
    },

    methods: {
        cardChoose() {
            if(this.api_card.name !== '')
            this.$emit('cardChoose', this.api_card);
            this.api_card = {name:'', image:''};
            this.card = '';
        },

        apiCall() {
            request_call = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?name=' + encodeURIComponent(this.card);

            axios
                .get(request_call)
                .then(response => (this.api_card = {
                    name:  response.data.data[0].name,
                    image: response.data.data[0].card_images[0].image_url
                }
                ))
        }
    },


    /* html */
    template: `
      <form @submit.prevent="cardChoose">
    <label>Insert the name of your card</label>
    <input type="text" v-model="card" @change="apiCall">
    <input type="submit" >
      </form>
      <div>
        Name: {{api_card.name}}
        <img v-bind:src="api_card.image">
        
      </div>
    `,

}