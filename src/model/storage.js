/*
 * @Author: your name
 * @Date: 2020-01-06 15:07:19
 * @LastEditTime : 2020-01-06 15:07:52
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \power\src\model\storage.js
 */
var storage={
    set(key,value){
    localStorage.setItem(key,JSON.stringify(value));
    },
    get(key){
    return JSON.parse(localStorage.getItem(key));
    },
    remove(){
    localStorage.removeItem(key)
    }
 
}
export default storage;