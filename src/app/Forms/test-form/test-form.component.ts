import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'test-form',
  templateUrl: 'test-form.component.html',
  styleUrls: ['./test-form.component.css'],
  imports: [
    ReactiveFormsModule
  ],
  standalone: true
})
export class TestFormComponent {
  name = new FormControl('');

}
