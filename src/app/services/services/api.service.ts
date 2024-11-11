import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostDetails } from '../../interfaz/model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> { return this.http.get(`${this.apiUrl}/users`); }
  getPosts(): Observable<any> { return this.http.get(`${this.apiUrl}/posts`); }
  getTodos(): Observable<any> { return this.http.get(`${this.apiUrl}/todos`); }
  getAlbums(): Observable<any> { return this.http.get(`${this.apiUrl}/albums`); }
  getComments(): Observable<any> { return this.http.get(`${this.apiUrl}/comments`); }
  getPhotos(): Observable<any> { return this.http.get(`${this.apiUrl}/photos`); }
  getPostDetails(postId: number): Observable<PostDetails> {
    return this.http.get<PostDetails>(`${this.apiUrl}/posts/${postId}`);
  }
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getCommentsByPostId(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl}/comments?postId=${postId}`);
  }
}
