import { Component } from '@angular/core';
import { subjectCardsArray } from '../../models/syllabus';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrl: './syllabus.component.scss'
})
export class SyllabusComponent {
  subjectCardsArray: Array<any> = subjectCardsArray;
  currentIndex: number = 0;

  get currentSubjectCard() {
    let currentCard = this.subjectCardsArray[this.currentIndex];
    currentCard.input.index = this.currentIndex + 1;
    return currentCard;
  }

  onNext(): void {
    this.currentIndex++;
    if (this.currentIndex == this.subjectCardsArray.length)
      this.currentIndex = 0;
  }
  onPrev(): void {
    this.currentIndex--;
    if (this.currentIndex < 0)
      this.currentIndex = this.subjectCardsArray.length - 1;
  }

  showColorClass: boolean = true;

  get getterShowColorClass(): boolean {
    // Logica varia
    return this.showColorClass;
  }

  isColorClassShown(show: boolean): boolean {
    // Logica varia
    return show;
  }

  get divStyles(): Record<string, string> {
    // HTML <div style="font-size: 30px; background-color: yellow;"
    return {'font-size': '30px', 'background-color': 'yellow'}
  }

  exampleItem: {value: string} = { value: 'Lorem ipsum' };

  setExampleItemValue(event: string) {
    this.exampleItem.value = event.toUpperCase();
  }

  isShown: boolean = true;

  forArray: Array<{id: number, value: string, role?: 'Reader' | 'Editor' | 'Admin'}> = [
    {id: 1, value: 'Lorem',  role: 'Admin'},
    {id: 2, value: 'Ipsum', role: 'Editor'},
    {id: 3, value: 'Sit', role: 'Reader'},
    {id: 4, value: 'Dolet', role: 'Reader'},
    {id: 5, value: 'Amo'}
  ];

  trackById(index: number, element: {id: number, value: string}): number {
    return element.id;
  }

  source = {response: [
    {id: 1, value: 'Lorem',  role: 'Admin'},
    {id: 2, value: 'Ipsum', role: 'Editor'},
    {id: 3, value: 'Sit', role: 'Reader'},
    {id: 4, value: 'Dolet', role: 'Reader'},
    {id: 5, value: 'Amo', role: 'Admin'}
  ] }

  strForPipe: string = 'Lorem ipsum sit dolet';

}
