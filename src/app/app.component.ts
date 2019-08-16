import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfigService } from './app.service';
import { APIDefinition, ApiType, API } from './ngx-easy-table/components/api';

@Component({
  selector: 'app-table',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ConfigService]
})
export class AppComponent implements OnInit {
  configuration;
  data;
  columns;
  @ViewChild('table') table: APIDefinition;
  @ViewChild('table') tableAll;
  allSelected: boolean = false;

  navigatePage(page) {
    this.table.apiEvent({
      type: API.setPaginationCurrentPage,
      value: page,
    });
  }

  changeLimit(limit) {
    this.table.apiEvent({
      type: API.setPaginationDisplayLimit,
      value: limit
    });
  }

  tableEventEmitted(event: any) {
    if (event.event === 'onSelectAll') {
      this.data.forEach((row: any) => row.selected = event.value);
    }
  }

  rowSelected() {
    this.allSelected = !this.data.some(data => !data.selected);
    this.tableAll.isSelected = this.allSelected;
  }

  constructor() {
  }

  ngOnInit() {
    this.configuration = ConfigService.config;
    this.columns = [
      { key: 'phone', title: 'phone' },
      { key: 'age', title: 'age' },
      { key: 'company', title: 'company' },
      { key: 'name', title: 'name' },
      { key: 'isActive', title: 'isActive' }
    ];
    this.data = [{
      'phone': '+1 (949) 527-2108',
      'age': 36,
      'company': 'KONGENE',
      'name': 'Deanne Contreras',
      'isActive': false
    }, {
      'phone': '+1 (878) 515-3653',
      'age': 32,
      'company': 'ISOSWITCH',
      'name': 'Peggy Burke',
      'isActive': false
    }, {
      'phone': '+1 (844) 593-2360',
      'age': 21,
      'company': 'HIVEDOM',
      'name': 'Josephine Reilly',
      'isActive': true
    }, {
      'phone': '+1 (800) 413-3813',
      'age': 24,
      'company': 'EMERGENT',
      'name': 'Phillips Fry',
      'isActive': false
    }, {
      'phone': '+1 (934) 551-2224',
      'age': 20,
      'company': 'ZILLANET',
      'name': 'Valentine Webb',
      'isActive': false
    }, {
      'phone': '+1 (948) 460-3627',
      'age': 31,
      'company': 'KNOWLYSIS',
      'name': 'Heidi Duncan',
      'isActive': true
    }, {
      'phone': '+1 (841) 479-3920',
      'age': 30,
      'company': 'TYPHONICA',
      'name': 'Poole Dodson',
      'isActive': false
    }, {
      'phone': '+1 (998) 546-2953',
      'age': 37,
      'company': 'COLAIRE',
      'name': 'Marie Molina',
      'isActive': false
    }, {
      'phone': '+1 (811) 511-2927',
      'age': 31,
      'company': 'OMNIGOG',
      'name': 'Angelique Frazier',
      'isActive': true
    }, {
      'phone': '+1 (967) 504-3593',
      'age': 35,
      'company': 'ENERVATE',
      'name': 'Kinney Logan',
      'isActive': true
    }, {
      'phone': '+1 (902) 500-3665',
      'age': 28,
      'company': 'CALCULA',
      'name': 'Wilson Hatfield',
      'isActive': true
    }, {
      'phone': '+1 (933) 565-2698',
      'age': 29,
      'company': 'GINK',
      'name': 'Trevino Casey',
      'isActive': true
    }, {
      'phone': '+1 (939) 530-3189',
      'age': 34,
      'company': 'MARKETOID',
      'name': 'Scott Barker',
      'isActive': false
    }, {
      'phone': '+1 (949) 600-2827',
      'age': 29,
      'company': 'MATRIXITY',
      'name': 'Sheree James',
      'isActive': true
    }, {
      'phone': '+1 (833) 559-2128',
      'age': 35,
      'company': 'LETPRO',
      'name': 'Kristen Whitehead',
      'isActive': true
    }, {
      'phone': '+1 (923) 480-2195',
      'age': 20,
      'company': 'HOMETOWN',
      'name': 'Norma Rush',
      'isActive': false
    }, {
      'phone': '+1 (967) 573-3873',
      'age': 35,
      'company': 'EWEVILLE',
      'name': 'Merrill Allen',
      'isActive': true
    }, {
      'phone': '+1 (985) 404-2360',
      'age': 30,
      'company': 'PORTALINE',
      'name': 'Claudia Sawyer',
      'isActive': true
    }, {
      'phone': '+1 (907) 406-2333',
      'age': 27,
      'company': 'VIRVA',
      'name': 'Craig Herrera',
      'isActive': false
    }, {
      'phone': '+1 (954) 412-3881',
      'age': 37,
      'company': 'VINCH',
      'name': 'Peterson Johns',
      'isActive': false
    }, {
      'phone': '+1 (882) 527-2652',
      'age': 25,
      'company': 'GYNKO',
      'name': 'Gordon Rutledge',
      'isActive': false
    }, {
      'phone': '+1 (884) 587-2850',
      'age': 20,
      'company': 'COMCUR',
      'name': 'Patton Mcbride',
      'isActive': false
    }, {
      'phone': '+1 (802) 562-2467',
      'age': 39,
      'company': 'EARTHPURE',
      'name': 'Trudy Camacho',
      'isActive': false
    }, {
      'phone': '+1 (873) 421-3625',
      'age': 40,
      'company': 'ARCHITAX',
      'name': 'Chandra Blair',
      'isActive': true
    }, {
      'phone': '+1 (901) 502-3536',
      'age': 36,
      'company': 'CANOPOLY',
      'name': 'Josefa Foley',
      'isActive': true
    }, {
      'phone': '+1 (985) 524-3581',
      'age': 36,
      'company': 'ENTOGROK',
      'name': 'Kathy Barr',
      'isActive': false
    }, {
      'phone': '+1 (948) 492-2881',
      'age': 40,
      'company': 'CENTICE',
      'name': 'Sybil Sears',
      'isActive': false
    }, {
      'phone': '+1 (815) 412-3123',
      'age': 36,
      'company': 'ZANILLA',
      'name': 'Moody Blevins',
      'isActive': true
    }, {
      'phone': '+1 (924) 594-3384',
      'age': 31,
      'company': 'NAMEGEN',
      'name': 'Kristine Ratliff',
      'isActive': true
    }, {
      'phone': '+1 (938) 550-3997',
      'age': 30,
      'company': 'MAGNEATO',
      'name': 'Cooley Pitts',
      'isActive': false
    }, {
      'phone': '+1 (930) 593-3548',
      'age': 30,
      'company': 'GEOFORMA',
      'name': 'Haley Noble',
      'isActive': false
    }, {
      'phone': '+1 (995) 479-2495',
      'age': 26,
      'company': 'LYRIA',
      'name': 'Garner Owens',
      'isActive': true
    }, {
      'phone': '+1 (958) 410-2373',
      'age': 24,
      'company': 'SOFTMICRO',
      'name': 'Jody Reyes',
      'isActive': true
    }, {
      'phone': '+1 (835) 551-3617',
      'age': 39,
      'company': 'CORPORANA',
      'name': 'Patterson Chavez',
      'isActive': true
    }, {
      'phone': '+1 (872) 561-3479',
      'age': 20,
      'company': 'BOINK',
      'name': 'Ellen Nielsen',
      'isActive': true
    }, {
      'phone': '+1 (935) 535-2958',
      'age': 26,
      'company': 'PETICULAR',
      'name': 'Serena Graves',
      'isActive': false
    }, {
      'phone': '+1 (921) 426-2277',
      'age': 24,
      'company': 'SHOPABOUT',
      'name': 'Emily Bruce',
      'isActive': false
    }, {
      'phone': '+1 (875) 474-3800',
      'age': 29,
      'company': 'COMCUBINE',
      'name': 'Fanny Swanson',
      'isActive': true
    }, {
      'phone': '+1 (893) 536-2201',
      'age': 31,
      'company': 'ZEDALIS',
      'name': 'Sellers Velez',
      'isActive': false
    }, {
      'phone': '+1 (927) 460-3553',
      'age': 23,
      'company': 'SUREMAX',
      'name': 'Blankenship Glover',
      'isActive': false
    }];

    this.data = this.data.map(value => ({...value, selected: false}));
  }

}
