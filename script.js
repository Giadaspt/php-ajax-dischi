// xmlhttp.open("POST", "db.php", true);
// xmlhttp.send();


const root = new Vue ({
    el: "#root",
    
    data: {
        logo:"./img/logo-spostify.png",
        apiUrl: "http://localhost:8888/php-ajax-dischi/server.php?",
        file: '/db.php',
        discs: [],
        selection: "",
        select: "",
    },

    mounted() {
        this.getApi();
        
    },

    computed:{

        
    },

    methods: {
        getApi(){
            axios.post( this.apiUrl, {
                params: {
                    disc: this.disc,
                }
            })
            .then(r =>{
                this.discs = r.data;
                console.log('ciao');
            })
            .catch(e =>{
                console.log(e);
            })
            
        },

        filteredCategories(){
            if(this.selection === '' && this.select === '' ){
              return this.discs;
            }
            return this.discs.filter( a =>{
              let genre = a.genre  === this.selection;
              let author = a.author === this.select;
              let all = genre + author;
      
              return all ;
          
            })
              
          },
    },

});