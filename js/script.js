const { createApp }= Vue;

createApp({
data(){
  return{
    msgError: "",
    msgNoTask:"Non ci sono Più Tasks",
    newTask:"",

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

  addTask(){
    this.msgError ="";
    this.tasks.forEach( task => {
      if(task.description.toLowerCase() === this.newTask.toLowerCase()){
        this.msgError ="Il task inserito esiste già !!!"
         isValid = true; 
      }   
    }); 
      if(this.newTask.length >= 5 && isValid === true){
        this.tasks.unshift({description: this.newTask,
          done:false})
      }else{
        this.msgError ="Il Task inserito è troppo corto"
      }
  }

},
}).mount('#app')




