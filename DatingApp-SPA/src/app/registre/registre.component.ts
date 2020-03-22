import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {
  model: any = {};
  @Output() cancelRegistration = new EventEmitter(); 

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(()=>{
      console.log('registration successful');
    }, error => {
      console.log(error);
    })
  }

  cancel() {
    this.cancelRegistration.emit(false);
    console.log('cancelled');
  }

}