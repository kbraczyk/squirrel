import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransparentLoaderComponent } from './components/transparent-loader/transparent-loader.component';
import { MaterialModule } from './material.module';
import { FormaterPipe } from './pipe/formater.pipe';

const components = [TransparentLoaderComponent];
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
export class SharedSquirrelModule {

}