import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoubleList } from './double-list-selector/doubleList.interface';
import { DoubleListSelectorComponent } from "./double-list-selector/double-list-selector.component";
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, ButtonModule, DialogModule, DoubleListSelectorComponent]
})
export class AppComponent {
  title = 'double-list-selector';
  visible: boolean = false;
  selectedCode?: string;

  doubleList: DoubleList = {
    title: '醫生姓氏',
    subTitle: '醫生',
    titleCodeNames: [
      {
        "title": "王",
        "codeNames": [
          {
            "code": "456",
            "name": "王大勇"
          },
          {
            "code": "234",
            "name": "王小華"
          }
        ]
      },
      {
        "title": "李",
        "codeNames": [
          {
            "code": "987",
            "name": "李小蓮"
          },
          {
            "code": "654",
            "name": "李大雄"
          }
        ]
      },
      {
        "title": "張",
        "codeNames": [
          {
            "code": "345",
            "name": "張小芳"
          },
          {
            "code": "876",
            "name": "張大明"
          }
        ]
      },
      {
        "title": "陳",
        "codeNames": [
          {
            "code": "876",
            "name": "陳小蓮"
          },
          {
            "code": "987",
            "name": "陳大鵬"
          }
        ]
      },
      {
        "title": "林",
        "codeNames": [
          {
            "code": "567",
            "name": "林小紅"
          },
          {
            "code": "543",
            "name": "林阿豪"
          }
        ]
      },
      {
        "title": "吳",
        "codeNames": [
          {
            "code": "654",
            "name": "吳小薇"
          },
          {
            "code": "234",
            "name": "吳大山"
          }
        ]
      },
      {
        "title": "周",
        "codeNames": [
          {
            "code": "654",
            "name": "周大島"
          },
          {
            "code": "987",
            "name": "周小倩"
          }
        ]
      },
      {
        "title": "蔡",
        "codeNames": [
          {
            "code": "543",
            "name": "蔡小華"
          },
          {
            "code": "654",
            "name": "蔡大勇"
          }
        ]
      },
      {
        "title": "楊",
        "codeNames": [
          {
            "code": "987",
            "name": "楊大雄"
          },
          {
            "code": "234",
            "name": "楊小蓮"
          }
        ]
      },
      {
        "title": "劉",
        "codeNames": [
          {
            "code": "234",
            "name": "劉小芳"
          },
          {
            "code": "876",
            "name": "劉大明"
          }
        ]
      },
      {
        "title": "葉",
        "codeNames": [
          {
            "code": "876",
            "name": "葉小芳"
          },
          {
            "code": "234",
            "name": "葉大明"
          }
        ]
      },
      {
        "title": "呂",
        "codeNames": [
          {
            "code": "567",
            "name": "呂大島"
          },
          {
            "code": "543",
            "name": "呂小琳"
          }
        ]
      },
      {
        "title": "江",
        "codeNames": [
          {
            "code": "234",
            "name": "江大勇"
          },
          {
            "code": "876",
            "name": "江小薇"
          }
        ]
      },
      {
        "title": "許",
        "codeNames": [
          {
            "code": "987",
            "name": "許小島"
          },
          {
            "code": "234",
            "name": "許大琳"
          }
        ]
      },
      {
        "title": "徐",
        "codeNames": [
          {
            "code": "654",
            "name": "徐小山"
          },
          {
            "code": "234",
            "name": "徐大紅"
          }
        ]
      },
      {
        "title": "鄭",
        "codeNames": [
          {
            "code": "876",
            "name": "鄭小蓮"
          },
          {
            "code": "543",
            "name": "鄭大山"
          }
        ]
      },
      {
        "title": "黃",
        "codeNames": [
          {
            "code": "654",
            "name": "黃小芳"
          },
          {
            "code": "987",
            "name": "黃大雄"
          }
        ]
      }
    ]
  }

  showDialog() {
    this.visible = true;
  }

  onHide() {
    this.visible = false;
  }

  onOk(code: string) {
    this.selectedCode = code;
  }
}
