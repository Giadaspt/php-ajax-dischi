
const root = new Vue ({
    el: "#root",

    data: {
        logo:"./img/logo-spostify.png",
        apiUrl: "http://localhost:8888/php-ajax-dischi/server.php?",
        db: "./server.php",
        discs: [],
        genreCategory: [],
        genreOne: [],
        authorCategory: [],
        authorOne: [],
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
                this.genreOne.push(genre);
                 console.log('musica',genre );
                let author = a.author === this.select;
                this.authorOne.push(author);
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
                // console.log(this.discs);
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
                if(!this.genreCategory.includes(disc.genre)){
                    this.genreCategory.push(disc.genre);
                }
            });
            // console.log('artista',this.authorCategory);
            // console.log( 'genre2',this.genreCategory);

            return this.genreCategory , this.authorCategory ;
        },

        performCategory(text){

            this.genreOne = [];

            if (text = this.selection ){
                this.genreOne.push(text);
            } 

            console.log('io sono ',text);
            console.log('sono genre',this.genreOne);
        },
        
        performCategoryArist(text){

            this.authorOne = [];

            if (text = this.select ){
                this.authorOne.push(text);
            } 

            // this.authorCategory = text;
            console.log('io sono app',text);
            console.log('io sono auro',this.authorOne);
        },
      
        // genreMusic(genre){
        //     this.selection = genre;
        //     console.log(genre);
        // },
      
        // artistMusic(author){
        //     this.select = author;
        //     console.log(author);
        // }

    },

});