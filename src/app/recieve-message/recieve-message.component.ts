import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recieve-message',
  templateUrl: './recieve-message.component.html',
  styleUrls: ['./recieve-message.component.css']
})
export class RecieveMessageComponent implements OnInit, OnDestroy {
  messages: any[] = [];
  subscription: Subscription;
  constructor(private service: MessageService) {
    this.subscription = this.service.getMessage().subscribe(message => {
      if (message) {
        this.messages.push(message);
      } else {
        // clear messages when empty message received
        this.messages = [];
      }
    });
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
