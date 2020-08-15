import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss']
})

export class RightSidebarComponent implements OnInit {

  constructor() { }

  skills: string[] = this.getSkills() || [];
  canEdit: boolean = false;
  formValue: string = ''; 
  isUpdating: boolean = false;
  isAdding: boolean = false;
  isNotUpdating: boolean = true;
  tempSkill: string = '';


  setEdit(): void{

  	if(!this.canEdit && !this.isUpdating) {
  	  this.isAdding = true;
  	}

  	if(this.canEdit && !this.isUpdating) {
  		this.addSkill(this.formValue);
  	}

  	if(this.canEdit && this.isUpdating) {
  		this.updateSkill(this.tempSkill);
  		this.clearForm();
  	}
  	
  	this.canEdit = !this.canEdit;
  }

  addSkill (newSkill: string) {
    if (!newSkill || this.checkSkill()) return;
  	this.skills.push(newSkill.toUpperCase());
  	this.clearForm();
  	this.saveSkills();
  }

  getSkills(): string[] {
  	return JSON.parse(localStorage.getItem('skills'));

  }

  getSkill(skillName: string): string{
  	return this.getSkills().find(skill => skill === skillName);

  }

  clearForm () {
  	this.formValue = '';
  	this.tempSkill = '';
  	this.isAdding = false;
  	this.isUpdating = false;
  }

  setUpdate(currentSkill: string) {
  	
  	if (!this.isUpdating) {
  		this.setEdit();
  	}

  	this.formValue = currentSkill;
  	this.isUpdating = true;
  	this.tempSkill = currentSkill;
  	
  }

  checkSkill(): boolean {
  	const existentSkill: string = this.getSkill(this.formValue.toUpperCase());
  	if (!!existentSkill) {
  		alert(`Skill '${existentSkill}' already exists`);
  		this.clearForm();
  		return true;
  	} 
  }

  updateSkill(currentSkill: string) {
  	if (!currentSkill || this.checkSkill()) return;
  	const index = this.skills.indexOf(this.getSkill(currentSkill));
   	this.skills[index] = this.formValue.toUpperCase();
  	this.saveSkills();
  }

  removeSkill (skillName: string) {
  	this.skills = this.skills.filter(skill => skill !== skillName);
  	this.saveSkills();
  }

  saveSkills() {
  	localStorage.setItem('skills', JSON.stringify(this.skills));
  }


  ngOnInit(): void {
  }

}
