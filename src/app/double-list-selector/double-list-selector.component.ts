import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeName, DoubleList } from './doubleList.interface';
import { SplitterModule } from 'primeng/splitter';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'his-double-list-selector',
  standalone: true,
  imports: [CommonModule, SplitterModule, ButtonModule],
  templateUrl: './double-list-selector.component.html',
  styleUrls: ['./double-list-selector.component.scss']
})
export class DoubleListSelectorComponent {

  @Input() value = {} as DoubleList
  @Input() codeName = {} as CodeName;
  @Output() codeNameChange = new EventEmitter<CodeName>();

  selectedTitle: string = '';
  selectedCode?: string;

  onSelectTitle(title: string) {
    this.selectedTitle = title;
    this.selectedCode = '';
  }

  getCodeNamesByTitle(title: string): CodeName[] {
    const codeName = this.value.titleCodeNames.find(i => i.title === title) || this.value.titleCodeNames[0];
    return codeName ? codeName.codeNames : [];
  }

  onClickCodeName(codeName: CodeName) {
    this.selectedCode = codeName.code;
  }

  onDblClickCodeName(codeName: CodeName) {
    this.codeNameChange.emit(codeName);
  }
}
