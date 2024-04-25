import { Component } from '@angular/core';
import { RouterOutlet  } from '@angular/router';
import { CommonModule  } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.css'
})

export class AppComponent {
  title = 'hello-word-2201681061';

  titleForMe='Информация за мен';
  forMe='Казвам се Мария Кукучева и съм втори курс студентка в ПУ"Паисий Хилендарски", със специалност СТД.';

  titleHobby='Хобита и интереси';
  hobby='Обичам да спортувам и да рисувам!';
  
  titleCreator='Линк към любим content creator';
  creator='Silvie Mahdal e художниuк, който изпипва всичко до най-малкия дeтайл!';

  titleVideo='Информация за моя канал';
  video='В моя канал ще се научите как да рисувате и да се усъвършенствате, освен това ще имате другарче с което да творите!';
  
  titlePrice='Моите услуги';
  price='Освен онлайн уроци предлагам и персонализирани консултации, които са скромните - 10лв на час.';

 
  p1 = false;
  p2 = false;
  p3 = false;
  p4 = false;
  p5 = false;

  constructor() {
    this.p1 = false;
    this.p2 = false;
    this.p3 = false;
    this.p4 = false;
    this.p5 = false;
  }

  toggleSection(sectionNumber: number) {
    this.resetFlags();
    switch(sectionNumber) {
      case 1:
        this.p1 = true;
        break;
      case 2:
        this.p2 = true;
        break;
      case 3:
        this.p3 = true;
        break;
      case 4:
        this.p4 = true;
        break;
      case 5:
        this.p5 = true;
        break;
      default:
        break;
    }
  }

  resetFlags() {
    this.p1 = false;
    this.p2 = false;
    this.p3 = false;
    this.p4 = false;
    this.p5 = false;
  }
}