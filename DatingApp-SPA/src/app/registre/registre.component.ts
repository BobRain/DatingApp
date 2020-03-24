import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {
  model: any = {};
  @Output() cancelRegistration = new EventEmitter(); 

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(()=>{
     this.alertify.success('registration successful');
    }, error => {
      this.alertify.error(error);
    })
  }

  cancel() {
    this.cancelRegistration.emit(false);
  }

}