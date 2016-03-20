# ng2-table
Early alpha version. Do not add it to page, it is highly unstable


This table always will be easy to add to every page.
You need to add only `<ng2-table></ng2-table>` to your html page
```html
<div class="row">
    <div class="col-sm-12">
        <ng2-table></ng2-table>
    </div>
</div>
```

![table](http://i.imgur.com/ya2Woj3.png "table")

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

| field    |      type      |  options | example |
|----------|:--------------:|:--------:|---------|
| searchEnabled | bool | true false | public searchEnabled = true; |
| orderEnabled | bool | true false | public orderEnabled = true; |

