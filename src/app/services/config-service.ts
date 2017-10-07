import {Injectable} from "@angular/core";
@Injectable()
export class ConfigService {
    public searchEnabled = true;
    public orderEnabled = true;
    public globalSearchEnabled = true;
    public footerEnabled = false;
    public paginationEnabled = true;
    public exportEnabled = true;
    public editEnabled = false;
    public clickEvent = true;
    public resourceUrl = "http://www.mocky.io/v2/59d5129e270000bf009cd582";
    public rows = 10;
}
