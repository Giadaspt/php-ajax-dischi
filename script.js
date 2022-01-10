
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
        category: false,
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
                console.log('filtered', this.discs);
              return this.discs;
            }
            return this.discs.filter( a =>{
                let genre = a.genre  === this.selection;
                 console.log('musica',genre );
                let author = a.author === this.select;
                 console.log('autore',author);
                let all = genre + author;
                
                return all;
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
            this.discs.forEach(disc =>{
                if (!this.authorCategory.includes(disc.author)){    
                    this.authorCategory.push(disc.author);
                }
                if(!this.genreCategory.includes(disc.genre))
                {
                    this.genreCategory.push(disc.genre);
                }
            });
            return this.genreCategory , this.authorCategory ;
        },


    },

});