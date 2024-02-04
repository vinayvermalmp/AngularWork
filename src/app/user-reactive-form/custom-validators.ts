import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";


export class CustomValidators {
    static inalidProjectName(control: FormControl): {[s: string]: boolean}{
        if(control.value === 'Test'){
            return {'invalidProjectName': true}
        }
        return null;
    }

    static asyncInalidProjectName(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() =>{
                if(control.value === 'Test project'){
                    resolve ({'invalidProjectName': true});
                } else {
                    resolve(null);
                }
            }, 2000);
        });       
        return promise;
    }
}