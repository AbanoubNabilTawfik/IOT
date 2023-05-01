import { AbstractControl } from "@angular/forms";

export function ForbiddenNameValidator(control:AbstractControl)
{
  const forbidden= /admin/.test(control.value);

  return forbidden ? {'forbiddenName':{'value':control.value}} : null;
}

// var reg= new RegExp(/admin/);
// var reg2=/admin/