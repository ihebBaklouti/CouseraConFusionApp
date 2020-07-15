import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import {Comment} from '../shared/comment';
import { DishService } from '../services/dish.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';
import { visibility } from '../animations/app.animations';



@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
  animations: [
    visibility()
  ]
})
export class DishdetailComponent implements OnInit {

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 5;
  min = 1;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  value = 5;
  vertical = false;
  tickInterval = 1;

  formErrors = {
    'name': '',
    'comment': '',
  };

  validationMessages = {
    'name': {
      'required':      'Author Name is required.',
      'minlength':     'Author Name must be at least two characters long.',
    },
    'comment': {
      'required':      'Comment is required.',
    },
  };  

comment:Comment;
dish:Dish;



dishIds: string[];
prev: string;
next: string;

errMess: string;

feedbackForm: FormGroup;
feedback: Feedback;
contactType = ContactType;

dishcopy: Dish;

visibility = 'shown';
  
@ViewChild('fform') feedbackFormDirective;


  constructor(
    private activateRoute : ActivatedRoute,
    private route : Router,
    private dishService : DishService,
    private location : Location,
    private fb: FormBuilder,
    @Inject('baseURL') private baseURL
  ) {  this.createForm();}

  ngOnInit(): void {
    this.dishService.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.activateRoute.params.pipe(switchMap((params: Params) => {this.visibility = 'hidden'; return this.dishService.getDish(params['id']);}))
    .subscribe(dish => { this.dish = dish; this.dishcopy = dish;  this.setPrevNext(dish.id); this.visibility = 'shown'},
    errmess => this.errMess = <any>errmess);
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack(): void {
    this.location.back();
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)] ],
      comment: ['', [Validators.required] ],
    });

    this.feedbackForm.valueChanges
    .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now

  }

  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      name: '',
      comment: ''
    });
    this.feedbackFormDirective.resetForm();
  }

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.tickInterval; 
    }
    return 0;
  }

  addFeedback(){
    var date = new Date().toISOString();
    var comment = {
      rating: this.value, 
      comment: this.feedbackForm.value.comment,
      author: this.feedbackForm.value.name,
      date: date,
  }
  let comments=this.dish.comments;
  this.dishcopy.comments.push(comment);
  /* this.dishcopy.comments.push(this.comment); */
    this.dishService.putDish(this.dishcopy)
      .subscribe(dish => {
        this.dish = dish; this.dishcopy = dish;
      },
      errmess => { this.dish = null; this.dishcopy = null; this.errMess = <any>errmess; });


  }
}
