import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-cv-faceeit',
  templateUrl: './cv-faceeit.component.html',
  styleUrls: ['./cv-faceeit.component.scss']
})
export class CvFaceeitComponent implements OnInit {

  constructor() { }
  companyChoose = null
  objectLogoColor={
    efficom : false,
    insset : false,
    promeo : false
  }

  headerFix = document.getElementsByClassName('headerFix');
  skillTitleDiv = document.getElementsByClassName('skillTitleDiv');
  underSkillTitleDiv1 = document.getElementsByClassName('underSkillTitleDiv1');
  underSkillTitleDiv2 = document.getElementsByClassName('underSkillTitleDiv2');
  underSkillTitleDiv1name = document.getElementsByClassName('underSkillTitleDiv1name');
  underSkillTitleDiv2name = document.getElementsByClassName('underSkillTitleDiv2name');
  lifeExpDetails = document.getElementsByClassName('lifeExpDetails') as HTMLCollectionOf<HTMLElement>;
  lifeExpDetails2 = document.getElementsByClassName('lifeExpDetails2') as HTMLCollectionOf<HTMLElement>;
  lifeExpDetails3 = document.getElementsByClassName('lifeExpDetails3') as HTMLCollectionOf<HTMLElement>;
  pCompanyCere = document.getElementsByClassName('pCompanyCere') as HTMLCollectionOf<HTMLElement>;
  pCompanyAmeu = document.getElementsByClassName('pCompanyAmeu') as HTMLCollectionOf<HTMLElement>;
  pCompanyKoppaz = document.getElementsByClassName('pCompanyKoppaz') as HTMLCollectionOf<HTMLElement>;
  svgArrowLeft = document.getElementsByClassName('svgArrowLeft') as HTMLCollectionOf<HTMLElement>;
  svgArrowRight = document.getElementsByClassName('svgArrowRight') as HTMLCollectionOf<HTMLElement>;
  buttonArrowAccueil = document.getElementsByClassName('buttonArrowAccueil') as HTMLCollectionOf<HTMLElement>;
  underSchoolDiv1name = document.getElementsByClassName('underSchoolDiv1name') as HTMLCollectionOf<HTMLElement>;
  underSchoolDiv2name = document.getElementsByClassName('underSchoolDiv2name') as HTMLCollectionOf<HTMLElement>;
  animation1 = gsap.timeline({
    paused: true,
    defaults: {repeat : 0, duration: 1, ease: 'in-out'}
  });
  animation2 = gsap.timeline({
    paused: true,
    defaults: {repeat : 0, duration: 1, ease: 'in-out'}
  });
  animation3 = gsap.timeline({
    paused: true,
    defaults: {repeat : 0, duration: 1, ease: 'in-out'}
  });
  animationButtonArrow = gsap.timeline({
    defaults: {repeat : 0, duration: 0.5, ease: 'in-out'}
  });

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    this.animation1
      .to(this.svgArrowLeft,{x: -500})
      .to(this.svgArrowRight,{y: -60, opacity: 1},0);

    this.animation2
      .to(this.underSkillTitleDiv1name,{y: -61})
      .to(this.underSkillTitleDiv2name,{y: -61, opacity: 1, display: 'block'},0);

    this.animation3
      .to(this.underSchoolDiv1name,{y: -61, opacity: 0})
      .to(this.underSchoolDiv2name,{y: -61, opacity: 1, display: 'block'},0);



    ScrollTrigger.create({ // rotate animation
      trigger: this.underSkillTitleDiv2name,
      id: 'animation2',
      start: 'bottom bottom',
      animation: this.animation2,
      markers: false,
    });

    ScrollTrigger.create({ // rotate animation
      trigger: this.underSchoolDiv2name,
      id: 'animation3',
      start: 'bottom bottom',
      animation: this.animation3,
      markers: false,
    });
  }


  displayDetails(company: string) {
    switch (company) {
      case 'ameu':
        if (this.companyChoose !== 'ameu'){
          this.pCompanyAmeu[0].style.backgroundColor = '#ff4b36'
          this.lifeExpDetails[0].style.display = 'flex'
          this.pCompanyAmeu[0].style.color = 'white'
          this.divKoppazOff()
          this.divCereOff()
        }
        break;
      case 'cere':
        if (this.companyChoose !== 'cere'){
          this.pCompanyCere[0].style.backgroundColor = '#ff4b36'
          this.lifeExpDetails2[0].style.display = 'flex'
          this.pCompanyCere[0].style.color = 'white'
          this.divAmeuOff()
          this.divKoppazOff()
        }
        break;
      case 'koppaz':
        if (this.companyChoose !== 'koppaz'){
          this.pCompanyKoppaz[0].style.backgroundColor = '#ff4b36'
          this.pCompanyKoppaz[0].style.color = 'white'
          this.lifeExpDetails3[0].style.display = 'flex'
          this.divAmeuOff()
          this.divCereOff()
        }
        break;
      default:
        break;
    }
  }

  divKoppazOff(){
    this.pCompanyKoppaz[0].style.backgroundColor = '#F2F6FF'
    this.lifeExpDetails3[0].style.display = 'none'
    this.pCompanyKoppaz[0].style.color = '#666a80'
  }
  divCereOff(){
    this.pCompanyCere[0].style.backgroundColor = '#F2F6FF'
    this.lifeExpDetails2[0].style.display = 'none'
    this.pCompanyCere[0].style.color = '#666a80'
  }
  divAmeuOff(){
    this.pCompanyAmeu[0].style.backgroundColor = '#F2F6FF'
    this.lifeExpDetails[0].style.display = 'none'
    this.pCompanyAmeu[0].style.color = '#666a80'
  }

  functionAnimationButtonArrow() {
    /*this.animationButtonArrow
      .to(this.svgArrowRight,{x: 60, opacity: 0})
      .to(this.buttonArrowAccueil,{backgroundColor: 'red', border: 'none'}, 0)
      .to(this.svgArrowLeft,{ display: 'block', opacity: 1}, 0)*/
  }

  logoColor(school: string) {
    switch (school) {
      case 'efficom':
        this.objectLogoColor.efficom = true
        break;
      case 'insset':
        this.objectLogoColor.insset = true
        break;
      case 'promeo':
        this.objectLogoColor.promeo = true
        break;
    }
  }

  logoColorOut(school: string) {
    switch (school) {
      case 'efficom':
        this.objectLogoColor.efficom = false
        break;
      case 'insset':
        this.objectLogoColor.insset = false
        break;
      case 'promeo':
        this.objectLogoColor.promeo = false
        break;
    }
  }
}
