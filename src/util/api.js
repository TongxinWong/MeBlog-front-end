import Axios from "axios"

const BASE_URL = 'http://localhost:8081/api/'

export const myRequest = async (url)=>{
    return new Promise((resolve, reject)=>{
        Axios.get(BASE_URL+url).then((res)=>{
            if(res.status == 200){
                resolve(res.data)
            }
            else{
                reject(res)
            }
        })
    })
}

export const getTags = async ()=>{
    return myRequest('tags')
}

export const getAllPosts = async ()=>{
    return myRequest('posts')
}

export const getPost = async (postId)=>{
    return myRequest('post/'+postId)
}

export const getCategories = async ()=>{
    return myRequest('categories')
}

export const getCategoryPosts = async (categoryId)=>{
    return myRequest(`category/${categoryId}/posts`)
}

export const getTagPosts = async (tagId)=>{
    return myRequest(`tag/${tagId}/posts`)
}


export const deletePost = async (postId)=>{
    postId
    return true
}