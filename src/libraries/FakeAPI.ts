import IApiResponse from "@/models/IApiResponse";
import IGetTodoResponse from "@/models/IGetTodoResponse";



export default {
    getTodoList(): Promise<IApiResponse<IGetTodoResponse>> {
        const todoList : IGetTodoResponse = {
            TodoRespone: [{
                id: 1,
                name: 'Radi',
                status: {done: true}
            },
            {
                id: 2,
                name: 'heng',
                status: {done: true}
            },
            {
                id: 3,
                name: 'huy',
                status: {done: false}
            },
            {
                id: 4,
                name: 'dyyy',
                status: {done: true}
            }],
            
        }
        const apiResponse: IApiResponse<IGetTodoResponse> = {
            Data : todoList,
            Error : 0,
            Message : 'Login Fail'
        }
        return new Promise((resolve) => resolve(apiResponse));
    }
}
