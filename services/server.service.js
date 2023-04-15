import axios from 'axios'

const instance = axios.create(
    {
        baseURL: 'http://localhost:3000/api',
        timeout: 15000,
        headers: {
            'Content-Type': 'application/json'
        }
    }
)

export const build = async () => {
    console.log("build")
    const {data} = await instance.get(`/registers/build`)
    console.log(data)
}

export const search = async (value)=>{
    const {data} = await instance.get(`/registers/match/${value}`)
    return data
}

export const getValue = async (value)=>{
    console.log(value)
    const {data} = await instance.get(`/registers/value/${value}`)
    return data
}