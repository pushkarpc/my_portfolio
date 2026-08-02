import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { sampleTodos } from './sample-todos.js';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  todos: Array<{ text: string; done: boolean }> = sampleTodos;
  inputPlaceholderValue = signal<string>('Task name...');

  addTodo(text: string) {
    if (text.trim() == '') {
      this.inputPlaceholderValue.set('Please input a task name first!');
    } else {
      this.todos.push({ text: text, done: false });
      this.inputPlaceholderValue.set('Task name...');
    }
  }
  remove(index: number) {
    this.todos.splice(index, 1);
  }
  clearCompleted() {
    this.todos = this.todos.filter((todo) => todo.done == false);
  }
}
