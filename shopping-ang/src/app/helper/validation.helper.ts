import { FormGroup }  from '@angular/forms';
export function chekPass(){
    return function(userReg : FormGroup){
        let pass = userReg.controls.password;
        let repass = userReg.controls.re_password;
        if(repass.errors && ! repass.errors.reErr)
        {
            return;
        }

        if(pass.value != repass.value)
        {
            repass.setErrors({ reErr : true});
        }
        else{
            repass.setErrors(null);
        }
    }
}

export function conNum()
{
    return function(userReg : FormGroup){
        let contact = userReg.controls.contact;

        if(contact.errors && !contact.errors.numErr)
        {
            return;
        }

        if(isNaN(contact.value)==true)
        {
            contact.setErrors({ numErr : true });
        }
        else{
            contact.setErrors(null);
        }
    }
}


// isNaN
export function conLength(){
    return function (userReg : FormGroup){
        let contact = userReg.controls.contact;
        if(contact.errors && !contact.errors.conErr)
        {
            return;
        }

        if(contact.value.length < 10)
        {
            contact.setErrors({ conErr : true });
        }
        else
        {
            contact.setErrors(null);
        }
    }
}


export function demo()
{
    return function(f:FormGroup){
        if(f.controls.name.errors && ! f.controls.name.errors.xyz)
        {
            return;
        }

        if(f.controls.name.value != "rohit")
        {
            f.controls.name.setErrors({ xyz : true });
        }
        else{
            f.controls.name.setErrors(null);
        }
    }
}


export function hello(){
    return function(c:FormGroup){
        let x = c.controls.city;
        /*
        1. city emply 
        2. city is not equal indore
        3. city is indore


        */
        
        if(x.errors && !x.errors.getError)
        {
            return;
        }

        if(x.value != "indore")
        {
            x.setErrors({ getError : true });
        }
        else{
            x.setErrors(null);
        }
    }
}