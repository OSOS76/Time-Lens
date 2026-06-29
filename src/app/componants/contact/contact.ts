import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import Swal from 'sweetalert2';

import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',

  standalone:true,

  imports:[
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],

  templateUrl:'./contact.html',
  styleUrl:'./contact.scss'
})

export class Contact{

contactData={

name:'',
email:'',
subject:'',
message:''

};


sendMessage(){

if(

!this.contactData.name ||
!this.contactData.email ||
!this.contactData.subject ||
!this.contactData.message

){

Swal.fire({

icon:'warning',
title:'Missing Fields',
text:'Please fill all fields'

});

return;

}


const templateParams={

from_name:this.contactData.name,

from_email:this.contactData.email,

subject:this.contactData.subject,

message:this.contactData.message,

to_email:'oo215881@gmail.com'

};


emailjs.send(

'service_7mtz7ql',
'template_fwnp418',
templateParams,
'rtH6s4sKo1Zxbh8cc'

)

.then(()=>{

Swal.fire({

icon:'success',
title:'Message Sent',
text:'Your message was sent successfully'

});

this.contactData={

name:'',
email:'',
subject:'',
message:''

};

})

.catch((error)=>{

console.log(error);

Swal.fire({

icon:'error',
title:'Failed',
text:'Could not send message'

});

});

}

}
