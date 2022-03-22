<template>
  <div class="todo">
    <h1>Vue Todo List</h1>
    <div class="wrap-todo-list">
      <div class="head-wrap">
        <div class="task-bar">
          <div class="tasks">Total Tasks: {{allTask}}</div>
           <div class="task-done">Tasks Done: {{taskDone}}</div>
           <div class="task-delete">Tasks Delete</div>
        </div>
      </div>
      <div class="body-wrap">
        <div  class="wrap-todo-item" v-for="todos in todo" :key="todos.status.done">
            <button :disabled="todos.status.done" class="click-to-done">done</button>
            <p :class="{done : todos.status.done}" class="text-box">{{todos.name}}</p>
            <button class="click-to-delete">delete</button>
        </div>
      </div>
      <div class="footer-wrap">
        <input class="text-todo" type="text">
        <button class="btn-login todo">+</button>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>

import { computed, defineComponent, ref } from 'vue'
import FakeApi from '@/libraries/FakeAPI'
import ITodo from '@/models/ITodo';
export default defineComponent({
  setup() {
    
    const todo = ref<Array<ITodo>>([]);
    const tasked = todo.value.length
    const getTodoList = async() => {
      const res = await FakeApi.getTodoList();
      if(res.Error === 0){
        todo.value = res.Data.TodoRespone;
      }
    }

    getTodoList();

    const allTask = computed(() => {
      const tasks = todo.value.length;
      return tasks
    })

    const taskDone = computed(() =>{
      const tasks = todo.value.filter(e => e.status.done === true)
      return tasks.length
    })

    const isDone = true
    console.log(isDone);
    return{todo , allTask , taskDone , isDone}
  },
  
})
</script>

<style>
  .wrap-todo-list{
    width: 700px;
    height: 500px;
    margin: 0 auto;
    
  }
  .head-wrap{
    height: 8.5%;
    background-color: #333;
    width: 100%;
  }
  .body-wrap{
    width: 100%;
    height: 81.5%;
    background-color: rgb(10, 99, 99);
    padding-top: 20px;
    overflow-y: scroll;
  }
  .footer-wrap{
    width: 100%;
    height: 10%;
    background-color: #333;
  }
  .task-bar{
    display: flex;
    flex-direction: row;
    padding-right: 3px;
    padding-top: 3px;

  }
  .tasks{
    width: 85px;
    height: 35px;
    background-color: aquamarine;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
    .tasks{
    width: 85px;
    height: 35px;
    background-color: rgb(216, 216, 216);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 3px;
  }
    .tasks{
    width: 85px;
    height: 35px;
    background-color: aquamarine;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    cursor: pointer;
  }
  .task-done{
    width: 85px;
    height: 35px;
    background-color: aquamarine;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 auto;
    font-size: 12px;
    cursor: pointer;
  }
  .task-delete{
    width: 85px;
    height: 35px;
    background-color: aquamarine;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 auto;
    font-size: 12px;
    cursor: pointer;
  }
  .text-todo{
  height: 35px;
  width: 250px;
  border-radius: 20px;
  padding: 0 20px;
  font-size: 18px;
  margin-top: 5px;
  margin-right: 25px;
  }
  .wrap-todo-item{
    height: 10%;
    width: 80%;
    margin: 0 auto;
    background-color: white;
    border-radius: 15px;
    margin-bottom: 5px;
    align-items: center;
    justify-content: center;
    text-align: left;
    display: flex;
    
  }
  .text-box{
    padding: 10px 20px;
  }
  .click-to-done{
    background-color: lightgreen;
    color: black;
    font-size: 12px;
    width: 50px;
    height: 30px;
    border-radius: 5px ;
    margin: 0 10px;
  }
    .click-to-delete{
    background-color: crimson;
    color: white;
    font-size: 12px;
    width: 50px;
    height: 30px;
    border-radius: 5px ;
    margin: 0 10px;
  }
  .done{
    text-decoration: line-through;
  }
</style>