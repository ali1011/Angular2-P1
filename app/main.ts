import {bootstrap} from "@angular/platform-browser-dynamic";
import {disableDeprecatedForms, provideForms} from "@angular/forms"
import {appComponent} from "./app.component";

bootstrap(appComponent, [disableDeprecatedForms(), provideForms()] );