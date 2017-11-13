import { Pipe, PipeTransform } from '@angular/core';
import { ResourceService } from '../services/resource-service';
import { ConfigService } from '../services';

@Pipe({
  name: 'pagination'
})

export class PaginationPipe implements PipeTransform {
  constructor(public resource: ResourceService,
              public config: ConfigService) {
  }

  transform(value, filters) {
    let limit = 10;
    if (typeof value === 'undefined') {
      return;
    }
    this.resource.getPipedData().emit(value.length);
    let copiedArr = value.slice();
    if (ConfigService.config.serverPagination) {
      return copiedArr;
    }
    if (typeof filters !== 'undefined') {
      limit = filters.limit;
      copiedArr = value.slice(limit * (filters.offset - 1));
    }

    return copiedArr.splice(0, limit);
  }
}
