<template>
  <div class="todo">
    <h1>Vue Todo List</h1>
    <div class="wrap-todo-list">
      <div class="head-wrap">
        <div class="task-bar">
          <div class="tasks">Total Tasks: {{allTask}}</div>
           <div class="task-done">Tasks Done: {{taskDone}}</div>
           <div v-if="removeDone.length > 0" @click="removeAllDone(todos)" class="remove-done">Remove task done: {{removeDone.length}}</div>
           <div class="task-delete" @click="clickToRemove(todos)" >Tasks Delete </div>
        </div>
      </div>
      <div class="body-wrap">
        <div  class="wrap-todo-item" v-for="todos in todo" :key="todos.status.done">
            <button :disabled="todos.status.done" class="click-to-done" @click="clickToDone(todos)">done</button>
            <p :class="{done : todos.status.done}" class="text-box">{{todos.name}}</p>
            <button class="click-to-delete" @click="clickToDelete(todos)">delete</button>
        </div>
      </div>
      <div class="footer-wrap">
        <input id="kkk" class="text-todo" type="text" v-model="nameTodo">
        <button class="btn-login todo" @click="addTodo">+</button>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>

import { computed, defineComponent, ref } from 'vue'
import FakeApi from '@/libraries/FakeAPI'
import ITodo from '@/models/ITodo';
import {useStore} from '@/store/index'

export default defineComponent({
  setup() {
    const {state, commit  , getters} = useStore();
    const todo = ref<Array<ITodo>>([]);
    const getTodoList = async() => {
      const res = await FakeApi.getTodoList();
      if(res.Error === 0){
        commit('initTodo' , res.Data.TodoRespone);
        todo.value = getters.getAllTodo;
      }
    }

    getTodoList();
    const allTask = computed(() => {
      const tasks = todo.value.length;
      return tasks
    })
    const nameTodo = ref('');
    const config = computed(() => {
      const tasks = todo.value.length + 1;
      return tasks
    })
    const addTodo = () => {
      commit('createTodo' , {id: config.value , name: nameTodo.value , status: {done:false}})
      nameTodo.value = '';
    }
    const taskDone = computed(() =>{
      const tasks = todo.value.filter(e => e.status.done === true)
      return tasks.length
    })
    const clickToDone = (todos: ITodo) => {
      commit('updateStatus' , todos)
    }
    const clickToDelete = (todos: ITodo) => {
      commit('deleteTodo' , todos)
    }
    const clickToRemove = (todos: ITodo) => {
      commit('removeAllTodo' , todos)
    }
    const removeDone = computed(() => {
      const tasks = todo.value.filter (e => e.status.done === true)
      return tasks
    })
    const removeAllDone = (todos: ITodo) => {
      commit('removeAllDone' , todos)
      todo.value = getters.getAllTodo;
    }

    return{todo , allTask , taskDone , nameTodo , addTodo, clickToDone , clickToDelete , clickToRemove, removeDone , removeAllDone}
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
    border: 1.5px white solid;
    border-radius: 5px;
    font-size: 12px;
    cursor: pointer;
    margin-left: 3px;
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
    border: 1.5px white solid;
    border-radius: 5px;
  }
  .task-delete{
    width: 85px;
    height: 35px;
    background-color: crimson;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 auto;
    font-size: 12px;
    cursor: pointer;
    border: 1.5px white solid;
    border-radius: 5px;
    color: white;
  }
  .remove-done{
    width: 85px;
    height: 35px;
    background-color: crimson;
    text-align: center;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 auto;
    font-size: 12px;
    cursor: pointer;
    border: 1.5px white solid;
    border-radius: 5px;
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