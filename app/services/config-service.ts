import {Injectable} from "angular2/core";
@Injectable()
export class ConfigService {
    public searchEnabled = true;
    public orderEnabled = true;
    public globalSearchEnabled = true;
    public footerEnabled = false;
    public resourceUrl = "http://beta.json-generator.com/api/json/get/Nyl81BFTg";
}
