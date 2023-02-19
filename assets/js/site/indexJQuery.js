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

function generateTableSchedule() {
  const dateCourseOneInput = $('input[name="dateCourseOne"]')
  const dateCourseTwoInput = $('input[name="dateCourseTwo"]')
  const dateCourseThreeInput = $('input[name="dateCourseThree"]')
  let dateCourseOne = $('input[name="dateCourseOne"]').val()
  let dateCourseTwo = $('input[name="dateCourseTwo"]').val()
  let dateCourseThree = $('input[name="dateCourseThree"]').val()

  if (!dateCourseOneInput.is(':checked')) {
    dateCourseOne = ""
  }
  if (!dateCourseTwoInput.is(':checked')) {
    dateCourseTwo = ""
    
  }
  if (!dateCourseThreeInput.is(':checked')) {
    dateCourseThree = ""
    
  }

  return `<table class="table">
  <thead>
    <tr>
      <th scope="col">Asignatura</th>
      <th scope="col">Lu</th>
      <th scope="col">Ma</th>
      <th scope="col">Mi</th>
      <th scope="col">Ju</th>
      <th scope="col">Vi</th>
      <th scope="col">Sa</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${coursesList[0]}</td>
      // 18:50 
      <td>${dateCourseOne.substring(0, 2) == "Lu" ? dateCourseOne.slice(2) : ""}</td>
      <td>${dateCourseOne.substring(0, 2) == "Ma" ? dateCourseOne.slice(2) : ""}</td>
      <td>${dateCourseOne.substring(0, 2) == "Mi" ? dateCourseOne.slice(2) : ""}</td>
      <td>${dateCourseOne.substring(0, 2) == "Ju" ? dateCourseOne.slice(2) : ""}</td>
      <td>${dateCourseOne.substring(0, 2) == "Vi" ? dateCourseOne.slice(2) : ""}</td>
      <td>${dateCourseOne.substring(0, 2) == "Sa" ? dateCourseOne.slice(2) : ""}</td>
      </tr>
      <tr>
      <td>${coursesList[1]}</td>
      <td>${dateCourseTwo.substring(0, 2) == "Lu" ? dateCourseTwo.slice(2) : ""}</td>
      <td>${dateCourseTwo.substring(0, 2) == "Ma" ? dateCourseTwo.slice(2) : ""}</td>
      <td>${dateCourseTwo.substring(0, 2) == "Mi" ? dateCourseTwo.slice(2) : ""}</td>
      <td>${dateCourseTwo.substring(0, 2) == "Ju" ? dateCourseTwo.slice(2) : ""}</td>
      <td>${dateCourseTwo.substring(0, 2) == "Vi" ? dateCourseTwo.slice(2) : ""}</td>
      <td>${dateCourseTwo.substring(0, 2) == "Sa" ? dateCourseTwo.slice(2) : ""}</td>
      </tr>
      <tr>
      <td>${coursesList[2]}</td>
      <td>${dateCourseThree.substring(0, 2) == "Lu" ? dateCourseThree.slice(2) : ""}</td>
      <td>${dateCourseThree.substring(0, 2) == "Ma" ? dateCourseThree.slice(2) : ""}</td>
      <td>${dateCourseThree.substring(0, 2) == "Mi" ? dateCourseThree.slice(2) : ""}</td>
      <td>${dateCourseThree.substring(0, 2) == "Ju" ? dateCourseThree.slice(2) : ""}</td>
      <td>${dateCourseThree.substring(0, 2) == "Vi" ? dateCourseThree.slice(2) : ""}</td>
      <td>${dateCourseThree.substring(0, 2) == "Sa" ? dateCourseThree.slice(2) : ""}</td>
     
    </tr>
  </tbody>
</table>`
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
  alert(inputCareer)

  const formCard = `   <div class="card" id="formCard">
  <div class="card-header bg-dark text-white fw-bold fs-5">Datos personales</div>
  <div class="card-body">
    <div id="validationFeedback" class="alert alert-danger text-center">
      All information is required
    </div>
    <div class="w-100 mb-3">
      <label class="form-label">Nombre</label>
      <input id="name" value="${inputName}" class="form-control">
    </div>
    <div class="w-100 mb-3">
      <label class="form-label">Provincia</label>
      <input id="state" value="${inputState}" class="form-control">
    </div>
    <div class="w-100 mb-3">
      <label class="form-label">Ciudad</label>
      <input id="city" value="${inputCity}" class="form-control">
    </div>
    <div class="w-100 mb-3">
      <label class="form-label">Sector</label>
      <input id="district" value="${inputDistrict}" class="form-control">
    </div>
    <div class="w-100 mb-3">
      <label class="form-label">Calle</label>
      <input id="street" value="${inputStreet}" class="form-control">
    </div>
    <div class="w-100 mb-3">
      <label class="form-label">Carrera</label>
      <select id="career" value="${inputCareer}" class="form-select">
        <option value="">Seleccione una opcion</option>
        <option ${inputCareer === "Multimedia" ? "selected" : ""} value="Multimedia">Multimedia</option>
        <option ${inputCareer === "Software" ? "selected" : ""} value="Software">Software</option>
        <option ${inputCareer === "SeguridadSoftware" ? "selected" : ""} value="SeguridadSoftware">Seguridad de software</option>
      </select>
    </div>
    <div class="w-100 mb-3">
      <button id="registerBTN" class="btn btn-primary float-end ms-3">Registrar</button>
      <button id="resetBTN" class="btn btn-warning float-end">Limpiar</button>
    </div>
  </div>
  </div>`

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
  alert(breadCrumb.children.length)
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

function generateConfirmationCard(){
  return confirmationCard = `   <div class="card">
<div class="card-header bg-success text-white fw-bold fs-4">
  Confirmacion
</div>
<div class="card-body">
  <div class="card">
    <div class="card-header bg-primary text-white fs-5">
      Datos basicos
    </div>
    <div class="card-body px-0 py-0">
      <div class="border border1 paddingD">
        <h6>Nombre: ${inputName}</h6>
      </div>
      <div class="border border1 paddingD">
        <h6>Provincia: ${inputState}</h6>
      </div>
      <div class="border border1 paddingD">
        <h6>Ciudad: ${inputCity}</h6>
      </div>
      <div class="border border1 paddingD">
        <h6>Sector: ${inputDistrict}</h6>
      </div>
      <div class="border border1 paddingD">
        <h6>Calle: ${inputStreet}</h6>
      </div>
      <div class="border border1 paddingD">
        <h6>Carrera: ${inputCareer}</h6>
      </div>
    </div>
  </div>
</div>
</div>`
}



function generateAccordion(acordionTittle, headingId, collapseId, dateCourse) {

  return acordionItem = `  <div class="accordion-item mb-2">
  <h2 class="accordion-header" id="${headingId}">
    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}"
      aria-expanded="true" aria-controls="${collapseId}">
      ${acordionTittle}
    </button>
  </h2>
  <div id="${collapseId}" class="accordion-collapse collapse" aria-labelledby="${headingId}"
    data-bs-parent="#accordionExample">
    <div class="accordion-body d-flex justify-content-evenly">
      <div class="form-check form-check-inline">
        <input name="${dateCourse[0]}" type="radio" class="form-check-input me-2" value="Lu 18:00 - 20:00">
        <label for="" class="form-check-label">Lu 18:00 - 20:00</label>
      </div>
      <div class="form-check form-check-inline">
        <input name="${dateCourse[1]}" type="radio" class="form-check-input me-2" value="Ju 18:00 - 20:00">
        <label for="" class="form-check-label">Ju 18:00 - 20:00</label>
      </div>
      <div class="form-check form-check-inline">
        <input name="${dateCourse[2]}" type="radio" class="form-check-input me-2" value="Sa 14:00 - 16:00">
        <label for="" class="form-check-label">Sa 14:00 - 16:00</label>
      </div>
    </div>
  </div>
  </div>`

   
}

const coursesCard = `
<div class="card" id="coursesCard">
  <div class="card-header bg-primary text-white fw-bold fs-5">Seleccion de materias</div>
  <div class="card-body">
    <div class="accordion" id="accordionExample">
    </div>
    <button class="btn btn-primary mt-3 float-end" id="btnCoursesContinue">Aceptar</button>
  </div>
</div>`


