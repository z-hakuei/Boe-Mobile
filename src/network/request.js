/*
 * @Author: your name
 * @Date: 2019-12-25 10:42:57
 * @LastEditTime : 2019-12-26 18:16:01
 * @LastEditors  : Please set LastEditors
 * @Description: 封装axios
 * @FilePath: \power\src\network\request.js
 */
import axios from 'axios'

export function request(config){
    const instance = axios.create({
        baseURL: '/api',
        timeout: 5000
    })
    return instance(config)
}
 
