import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import { registerAction } from '../../store/actions'

@Component({
    selector: 'ma-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    form: FormGroup
    constructor(private fb: FormBuilder, private store: Store) {
        this.form = fb.group({})
    }
    ngOnInit(): void {
        this.initializerForm()
    }
    initializerForm() {
        console.log('in initializerForm method')
        this.form = this.fb.group({
            username: ['', Validators.required],
            email: ['', Validators.email],
            password: ['', Validators.required],
        })
    }

    onSubmit(): void {
        console.log('submit', this.form.value)
        this.store.dispatch(registerAction(this.form.value))
    }
}
