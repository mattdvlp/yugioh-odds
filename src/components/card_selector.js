
let request_call = '';
import { PlusCircleIcon } from "@vue-hero-icons/outline";
export default {
components: {
    PlusCircleIcon
},
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
                this.api_card = {name:'', image:'', desc:''};
                this.card = '';
        },

        apiCall() {
            request_call = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?name=' + encodeURIComponent(this.card);

            axios
                .get(request_call)
                .then(response => (this.api_card = {
                        name:  response.data.data[0].name,
                        image: response.data.data[0].card_images[0].image_url,
                        desc: response.data.data[0].desc
                }
                ))
        }
    },


    /* html */
    template: `
      <form @submit.prevent="cardChoose">
    <label class="text-gray-400 text-sm block">Insert the name of your card</label>
    <input type="text" class="p-2 w-full md:w-1/2 border border-blue-200 drop-shadow rounded-lg" v-model="card" @input="apiCall">
        <div></div>
    <input type="submit" value="Add">
      </form>
      
      <div v-if="api_card.name" class="grid grid-cols-2 p-2 bg-white border drop-shadow-sm rounded">
        <div>
          <p class="text-lg">{{api_card.name}}</p>
          <p class="text-sm text-gray-400">{{api_card.desc}} </p>
        </div>
        <div class="flex justify-end">
        <img class="w-1/3 md:w-1/5" v-bind:src="api_card.image"/>
        </div>
      </div>
    `,

}