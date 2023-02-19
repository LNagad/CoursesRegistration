/// <reference types="jquery" />

//document variables

let inputName = $("#name")
let inputState = $("#state")
let inputCity = $("#city")
let inputDistrict = $("#district")
let inputStreet = $("#street")
let inputCareer = $("#career")

let coursesList = []
let formCard = $("#formCard")
const fatherContainer = formCard.parent()
const breadCrumb = $(".breadcrumb")

$("#content-container").on("click", "#resetBTN", function () {
  InputReset()
})

$("#content-container").on("click", "#registerBTN", function () {
  Register()
})

$("#content-container").on("click", ".breadcrumb-item:first", function () {
  
  if ($("#formCard").length == 0) {
    removeConfirmationCard()
    goHome()
  }
})

$("#content-container").on("click", ".secondBreadCrumb", function () {
  
  if ($("#coursesCard").length == 0) {
  
    $(".breadcrumb-item")[2].remove()
    $(".breadcrumb-item")[1].remove()
    removeConfirmationCard()
    goCourses()
  }
})

$("#content-container").on("click", "#btnCoursesContinue", function () {
  goConfirm()
})

function goConfirm() {

  const li = document.createElement('li')
  $(li).addClass("breadcrumb-item activeX ")
  li.innerText = 'Confirmacion'
  
  breadCrumb.children([1]).removeClass('activeX')
  breadCrumb.append(li)

  $("#content-container").append(generateConfirmationCard())
  $("#content-container").append(generateTableSchedule())
  $("#coursesCard").remove()

}

function Register() {
  if (Validate()) {

    inputName = $("#name").val()
    inputState = $("#state").val()
    inputCity = $("#city").val()
    inputDistrict = $("#district").val()
    inputStreet = $("#street").val()
    inputCareer = $("#career").val()

    goCourses()
  }
}

function goHome() {

  const formCard = generateFormCard()

  const li = document.createElement('li')
  $(li).addClass("breadcrumb-item activeX")
  li.innerText = 'Datos Persnales'

  breadCrumb.children([1]).remove()
  breadCrumb.children([2]).remove()
  breadCrumb.append(li)
  
  $("#content-container").append(formCard)
  $("#coursesCard").remove()
}

function goCourses() {
  
  const li = document.createElement('li')
  $(li).addClass("breadcrumb-item activeX secondBreadCrumb")
  li.innerText = 'Seleccion de Materias'
  
  breadCrumb.children([0]).removeClass('activeX')
  breadCrumb.append(li)

  $("#content-container").append(coursesCard)
  $("#formCard").remove()
  coursesSchedule()
}

function coursesSchedule() {
  coursesList = []

  const courses = {
    Multimedia: ['Intro to Photoshop', 'UI/UX Design', 'Avanced Tools for Designer'],
    Software: ['PC fundamentals', 'Programacion 2', 'Programacion 3'],
    SeguridadSoftware: ['Programacion 2', 'CCNA', 'CCNA 2']
  }
  
  for (course in courses) {

    if (inputCareer == course) {

      const headings = ['headingOne', 'headingTwo', 'headingThree']
      const collaps = ['CollapseOne', 'CollapseTwo', 'CollapseThree']
      const dateCourse = ['dateCourseOne', 'dateCourseTwo', 'dateCourseThree']

      let counter = 0;

      courses[course].forEach(element => {
        coursesList.push(element)
        $("#accordionExample").append(generateAccordion(
          element, 
          headings[counter], 
          collaps[counter], 
          dateCourse))

        counter++
      });

    }
  }
}