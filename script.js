
const root = new Vue ({
    el: "#root",
    
    data: {
        logo:"./img/logo-spostify.png",
        apiUrl: "http://localhost:8888/php-ajax-dischi/server.php?",
        db: "./server.php",
        discs: [],
        genreCategory: [],
        authorCategory: [],
        selection: "",
        select: "",
    },

    mounted(){
        this.getApi();
        // console.log('dischi', this.discs);
        // console.log('dischi gen', this.genreCategory);
        // console.log('dischi aut', this.authorCategory);
    },

    computed:{
        filteredCategories(){
            if(this.selection === '' && this.select === '' ){
              return this.discs;
            }  
            return this.discs.filter( a =>{
                let genre = a.genre  === this.selection;
                // console.log('musica',genre );
                let author = a.author === this.select;
                // console.log('autore',author);
                let all = genre + author;

                return all ;
          
            })
          },

    },

    methods: {
        getApi(){
            axios.get(this.db)
            .then(r =>{
                this.discs = r.data;
                this.option();
            })
            .catch(e =>{
                console.log(e);
            })
            
        },

        option(){

            this.discs.forEach(a =>{
                if (!this.authorCategory.includes(a.author)){
                    this.authorCategory.push(a.author);
                    console.log('artista',this.authorCategory);
                }
            });

            this.discs.forEach(a =>{
                if(!this.genreCategory.includes(a.genre)){
                    this.genreCategory.push(a.genre);
                    console.log( 'genre',this.genreCategory);

                } 
            });
        },

        

        
    },

});