const axios = require('axios');

module.exports = {

   getPostsOnInit: function () {
      return axios('/wp/v2/posts').then(data => {
         console.log(data);
         return data;
      })
   }
   
   // add more functions here:
}
