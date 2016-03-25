import {Injectable, EventEmitter} from "angular2/core";
@Injectable()
export class ResourceService {
    public data = [];
    public key:String;
    public order = [];
    public previousData = [];
    private static _pipedDataEmitter;
    public footerSummary() {

    }

    static getPipedData(): EventEmitter<any> {
      if (!this._pipedDataEmitter)
        this._pipedDataEmitter = new EventEmitter();
      return this._pipedDataEmitter;
    }

    public getOrder() {
        return this.order[this.key];
    };
    
    public sortBy(key) {
        this.key = key;
        if (Object.keys(this.order).length === 0) {
            this.order[this.key] = 'asc';
        }
        if (this.order[this.key] === 'asc') {
            this.order = [];
            this.order[this.key] = 'desc';
            this.data.sort((a, b) => this.compare(a, b));
        } else {
            this.order = [];
            this.order[this.key] = 'asc';
            this.data.sort((a, b) => this.compare(b, a));
        }
    };

    private compare(a, b) {
        if (a[this.key] < b[this.key]) {
            return -1;
        } else if (a[this.key] > b[this.key]) {
            return 1;
        } else {
            return 0;
        }
    };
}
