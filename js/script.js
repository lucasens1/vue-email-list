const {createApp} = Vue;

createApp({
    data(){
        return{
            emailArray : [],
            loadFlag : true,
        };
    },
    methods : {
        getRandomEmail : function(){
            /* console.log("ok click") */
            for(let i = 0; i < 10 ; i++){
                axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((curEmail) => {
                        /* console.log(curEmail); */
                        const email = curEmail.data.response;
                        /* console.log(email); */
                        this.emailArray.push(email);
                    });
                //Reset . . .
                this.emailArray = [];
                this.loadFlag = false;
            }            
        },
    },
}).mount("#app");

