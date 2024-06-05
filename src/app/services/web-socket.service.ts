import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import  SockJS from 'sockjs-client';
import { Subject, Observable } from 'rxjs';

export interface IMessage {
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private stompClient: any;
  private messageSubject: Subject<IMessage> = new Subject<IMessage>();

  constructor() {
    this.connect();
  }

  private connect() {
    const socket = new SockJS('http://localhost:8080/testchat');
    this.stompClient = Stomp.over(socket);
    const _this = this;
    this.stompClient.connect({}, function(frame: any) {
      console.log('Connected: ' + frame);
      _this.stompClient.subscribe('/topic/messages', (message: any) => {
        _this.messageSubject.next(JSON.parse(message.body));
      });
    });
  }

  public sendMessage(message: IMessage) {
    this.stompClient.send('/app/send', {}, JSON.stringify(message));
  }

  public getMessages(): Observable<IMessage> {
    return this.messageSubject.asObservable();
  }
}
