import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorFormComponent } from './components/form/error-form/error-form.component';
import { MaterialModule } from './material.module';
import { FormaterPipe } from './pipe/formater.pipe';
const components = [ErrorFormComponent];
const pipes = [FormaterPipe];

@NgModule({
    declarations: [
        ...components,
        ...pipes,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        ...components,
        ...pipes
    ]
})
export class CommonSquirrelModule {

}