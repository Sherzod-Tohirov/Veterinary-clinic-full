function check() {
  let elinp = document.getElementById('form-inp');
  if (elinp.value.length == 0 | elinp.value.length < 5) {
    elinp.style.borderColor = '#dc4d41';
    elinp.classList.add('invalid');
  } else if (elinp.value.toLowerCase().match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {

    elinp.style.borderColor = 'transparent';
    elinp.classList.remove('invalid');
  } else {
    elinp.style.borderColor = '#dc4d41';
    elinp.classList.add('invalid');
  }
}

function check_feedback() {
  let name = document.getElementById('userName');
  let email = document.getElementById('userEmail');
  let feedback = document.getElementById('userFeedback');
  if (name.value.length == 0 | name.value.length < 2) {
    name.style.borderColor = '#dc4d41';
    name.classList.add('invalid');
  } else {
    name.style.borderColor = 'transparent';
    name.classList.remove('invalid');
  }
  if (email.value.length == 0 | email.value.length < 5) {
    email.style.borderColor = '#dc4d41';
    email.classList.add('invalid');
  } else if (email.value.toLowerCase().match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {

    email.style.borderColor = 'transparent';
    email.classList.remove('invalid');
  } else {
    email.style.borderColor = '#dc4d41';
    email.classList.add('invalid');
  }
  if (feedback.value.length == 0 | feedback.value.length < 3) {
    feedback.style.borderColor = '#dc4d41';
    feedback.classList.add('invalid');
  } else {
    feedback.style.borderColor = 'transparent';
    feedback.classList.remove('invalid');
  }
}

function check_feedback_index() {
  let name = document.getElementById('userNameIndex');
  let email = document.getElementById('userEmailIndex');
  let feedback = document.getElementById('userFeedbackIndex');
  if (name.value.length == 0 | name.value.length < 2) {
    name.style.borderColor = '#dc4d41';
    name.classList.add('invalid');
  } else {
    name.style.borderColor = 'transparent';
    name.classList.remove('invalid');
  }
  if (email.value.length == 0 | email.value.length < 5) {
    email.style.borderColor = '#dc4d41';
    email.classList.add('invalid');
  } else if (email.value.toLowerCase().match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {

    email.style.borderColor = 'transparent';
    email.classList.remove('invalid');
  } else {
    email.style.borderColor = '#dc4d41';
    email.classList.add('invalid');
  }
  if (feedback.value.length == 0 | feedback.value.length < 3) {
    feedback.style.borderColor = '#dc4d41';
    feedback.classList.add('invalid');
  } else {
    feedback.style.borderColor = 'transparent';
    feedback.classList.remove('invalid');
  }
}


function check_feedback_without_email() {

  let name = document.getElementById('userName_second');
  let feedback = document.getElementById('userFeedback_second');
  if (name.value.length == 0 | name.value.length < 2) {
    name.style.borderColor = '#dc4d41';
    name.classList.add('invalid');
  } else {
    name.style.borderColor = 'transparent';
    name.classList.remove('invalid');
  }
  if (feedback.value.length == 0 | feedback.value.length < 3) {
    feedback.style.borderColor = '#dc4d41';
    feedback.classList.add('invalid');
  } else {
    feedback.style.borderColor = 'transparent';
    feedback.classList.remove('invalid');
  }
}



function open_faq_pop_up() {

  let pop_up = document.getElementsByClassName('question-pop-up')[0];
  let pop_up_overlay = document.getElementsByClassName('question-pop-up-overlay')[0];
  pop_up.classList.add('question-pop-up-active');
  pop_up_overlay.classList.add('question-pop-up-overlay-active');
  pop_up_overlay.addEventListener('click', () => {
    pop_up.classList.remove('question-pop-up-active');
    pop_up_overlay.classList.remove('question-pop-up-overlay-active');
  });

}

function close_faq_pop_up() {
  let pop_up = document.getElementsByClassName('question-pop-up')[0];
  let pop_up_overlay = document.getElementsByClassName('question-pop-up-overlay')[0];
  pop_up.classList.remove('question-pop-up-active');
  pop_up_overlay.classList.remove('question-pop-up-overlay-active');
}



function open_pop_up() {
  let pop_up_overall = document.getElementsByClassName('pop-up')[0];
  let pop_up_overlay_overall = document.getElementsByClassName('pop-up-overlay')[0];
  pop_up_overall.classList.add('pop-up-active');
  pop_up_overlay_overall.classList.add('pop-up-overlay-active');
  pop_up_overlay_overall.addEventListener('click', () => {
    pop_up_overall.classList.remove('pop-up-active');
    pop_up_overlay_overall.classList.remove('pop-up-overlay-active');
  });
}

function close_pop_up() {
  let pop_up_overall = document.getElementsByClassName('pop-up')[0];
  let pop_up_overlay_overall = document.getElementsByClassName('pop-up-overlay')[0];
  pop_up_overall.classList.remove('pop-up-active');
  pop_up_overlay_overall.classList.remove('pop-up-overlay-active');
}