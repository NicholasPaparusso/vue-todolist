const { createApp }= Vue;

createApp({
data(){
  return{
    msgError: "",
    msgNoTask:"Non ci sono Più Tasks",
    newTask:"",
    isValid: true,

    tasks:[
      {
        description: "Spesa",
        done: true
      },

      {
        description: "Bucato",
        done: false
      },

      {
        description: "Compiti",
        done: false
      },

      {
        description: "Mangiare",
        done: true
      },

      {
        description: "Respirare",
        done: true
      },

      {
        description: "Sorridere",
        done: true
      },

      {
        description: "Divertirsi",
        done: false
      },
    ],

  }
},

methods:{

  delTask(i){
    this.msgError ="";
    if(this.tasks[i].done === true){
      this.tasks.splice(i,1)
    }else{
      this.msgError ="Per eliminare il task bisogna prima svolgerlo "
    }
  },

  CheckTask(){
    this.isValid = true

    this.msgError ="";

    this.tasks.forEach( task => {
      if(task.description.toLowerCase() === this.newTask.toLowerCase()){
         this.isValid = false;       
      }
    }) 
  },

  addTask(){
    this.msgError ="";

    if(this.isValid === false){
      
      this.msgError ="Il task inserito esiste già !!!"; 

    }else if(this.newTask.length >= 5 && this.isValid === true){

      this.tasks.unshift({description: this.newTask,
        done:false})

    }else{
      this.msgError ="Il Task inserito è troppo corto";
    }
     this.newTask ="";
  },

},
}).mount('#app')




