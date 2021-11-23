import { AbstractControl, ValidationErrors } from "@angular/forms";

export function datePickerValidator(control:AbstractControl): ValidationErrors | null {
    if(control.value == null){
      return null
    }
    const selectDay = new Date(control.value);
    const selectYear = selectDay.getFullYear()
    const selectMonth = selectDay.getMonth()
    const currentYear = new Date().getFullYear()
    const currentMon = new Date().getMonth()
  
    if (selectMonth == (currentMon - 1)){
      return null
    }else{
      return {'invalidAge': true}
    }
  }



















