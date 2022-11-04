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
  }
},
}).mount('#app')