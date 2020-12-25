import Axios from "axios"

const BASE_URL = 'http://localhost:8081/api/'
const ADMIN_URL = 'http://localhost:8081/admin/'
// const BASE_URL = 'http://120.25.24.74:8081/api/'
// const ADMIN_URL = 'http://120.25.24.74:8081/admin/'

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


export const adminRequest = async (url, method='get', data={})=>{
    return new Promise((resolve, reject)=>{
        Axios({
            url:ADMIN_URL+url,
            method,
            data,
        })
        .then((res)=>{
            if(res.status == 200){
                resolve(res.data)
            }
            else{
                reject(res)
            }
        })
    })
}

export const deletePost = async (postId)=>{
    return new Promise((resolve, reject)=>{
        Axios.delete(ADMIN_URL+'post/'+postId).then((res)=>{
            if(res.status == 200){
                resolve(res.data)
            }
            else{
                reject(res)
            }
        })
    })
}

export const newPost = async (post)=>{
    return adminRequest('post/','post', post)
}

export const updatePost = async (post)=>{
    return adminRequest('post/', 'put', post)
}

export const login = async (username, password)=>{
    let formdate = new FormData()
    formdate.append('username', username)
    formdate.append('password', password)
    return new Promise((resolve, reject)=>{
        Axios.post(ADMIN_URL+'login', formdate, {headers:{'Content-Type': 'multipart/form-data'}}).then(res=>{
            if(res.status == 200){
                resolve(res.data)
            }
            else{
                reject(res)
            }
        })
    })
}

export const checkLoginState = async ()=>{
    return adminRequest('state')
}