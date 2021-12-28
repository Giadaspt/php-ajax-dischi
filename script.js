xmlhttp.open("POST", "db.php", true);
xmlhttp.send();


const root = new Vue ({
    el: "#root",
    
    data: {
        image = "./img/logo-spostify.png",
        apiUrl: "http://localhost:8888/php-ajax-dischi/",
        file: '/db.php',
        discs: [],
    },
    mounted: {
         
        getApi(){
            axios.post( this.apiUrl)
            .then(r =>{
                this.discs = r.data;
                console.log('ciao');
            })
            .catch(e =>{
                console.log(e);
            })
            
        }
    },

    methods: {
    },

});