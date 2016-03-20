# ng2-table
Early alpha version. Do not add it to page, it is highly unstable


This table always will be easy to add to every page.
Only thins what you need to do is add `<ng2-table></ng2-table>` in your html page
```html
<div class="row">
    <div class="col-sm-12">
        <ng2-table></ng2-table>
    </div>
</div>
```

To customize your table to bootstrap add ConfigService <br>
for example:
```
bootstrap(AppComponent, [FiltersService, ConfigService]);
```
and create this service:
```
import {Injectable} from "angular2/core";
@Injectable()
export class ConfigService {
    public searchEnabled = true;
}
```

###Available config settings:

| field    |      type      |  options |
|----------|:-------------:|------:|
| searchEnabled | bool | true false |
| orderEnabled | bool | true false |

searchEnabled = true

![table](http://i.imgur.com/ya2Woj3.png "table")