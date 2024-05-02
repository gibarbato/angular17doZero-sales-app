import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Category } from '../category.dto';

@Component({
  selector: 'category-form',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  templateUrl: './form.component.html',
  styles: ``,
})

// export class CategoryFormComponent {
//   constructor(private fb: FormBuilder){}
// }
export class CategoryFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  categoryForm = this.fb.group({
    id: [0],
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', Validators.required],
  });

  ngOnInit(): void {}

  @Input()
  set category(category: Category) {
    this.categoryForm.setValue(category);
  }

  @Output() save: any = new EventEmitter<Category>();
  @Output() back = new EventEmitter();

  onSubmit() {
    console.log('Botão salvar clicado no CateforyFormComponent');
    // this.save.emit(this.categoryForm.value as unknown as Category);
    this.save.emit(this.categoryForm.value as Category);
  }

  onBack() {
    this.back.emit();
  }
}
