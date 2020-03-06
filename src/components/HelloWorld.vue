<template>
  <div class="hello">
    <form action="">
      <input v-model="theobj.Fname" type="text" id="Fname" placeholder="Enter First name"><br>
      <input v-model="theobj.Lname" type="text" id="Lname" name="lname" placeholder="Enter Last name" ><br>
      <input v-model="theobj.Age" type="interger" id="age" name="age" placeholder="Enter Age"><br>
      <button @click="onsubmit" type="button" >Submit</button>
      
    </form>
    <ul>
      <li v-for="item in $store.state.data" :key="item.ID" >
        {{item.Fname}} {{item.Lname}} {{item.Age}} <a @click="ondelete(item.ID)">Delete</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: ()=>({
    myvar:"hello",
    theobj:{
    Fname:null,
    Lname:null,
    Age:0
    }
  }),
  methods:{
  onsubmit:function(){
  console.log(this.theobj)
  this.theobj.Age=parseInt(this.theobj.Age)
  this.$store.dispatch("savepersons",this.theobj)
},
ondelete:function(value){
  console.log(value)
  this.$store.dispatch("deletepersons",value)
}
  },
  mounted(){
    
    this.$store.dispatch("loadpersons")
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
