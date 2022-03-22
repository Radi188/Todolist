export default interface IApiResponse<T>{
    Data: T,
    Error: 0,
    Message: string
}