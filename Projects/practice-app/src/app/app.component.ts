import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { sampleTodos } from './sample-todos.js';
import { InvalidInputPopupComponent } from '../invalid-input-popup/invalid-input-popup.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, InvalidInputPopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  todos: Array<{ text: string; done: boolean }> = sampleTodos;

  addTodo(text: string) {
    if (text.trim() == '') {
      alert('Please input a task name');
    } else {
      this.todos.push({ text: text, done: false });
    }
  }
  remove(index: number) {
    this.todos.splice(index, 1);
  }
  clearCompleted() {
    this.todos = this.todos.filter((todo) => todo.done == false);
  }
}
