import { Channel } from './reducers/types/Login'

export default {
    getAccessCode: async (channel: Channel, login: string) => {
        try{
            const response = await fetch("https://postman-echo.com/get?foo1=bar1&foo2=bar2")
            const data = await response.json()
            return data
        } catch(e){
            return e
        }
    }
}