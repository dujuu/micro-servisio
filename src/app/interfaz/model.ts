
export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  
  export interface Album {
    userId: number;
    id: number;
    title: string;
  }
  
  export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    todosPending?: number;
    todosCompleted?: number;
    postsCount?: number;
    albumsCount?: number;
  }
  
  export interface PostDetails {
    id: number;
    userId: number;
    title: string;
    body: string;
    name?: string;
    email?: string;
    comments?: Comment[];
  }
  
  export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  