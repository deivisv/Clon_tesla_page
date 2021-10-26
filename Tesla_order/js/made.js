
function color_carro(nombre_color_archivo) {
    let contenedor_color = document.getElementById("contenedor_carousel")
    let contenido = ''
    let active_slider = ''
    for (let x = 0; x < 5; x++) {
        active_slider = (x == 1) ? "active" : ""
        contenido += `
			<div class="carousel-item ${active_slider}">
                <img src="img/${nombre_color_archivo}_${x}.jpg" class="d-block w-100" alt="...">
			</div>
		`
    }
    contenedor_color.innerHTML = `
		<div id="slider_carros" class=" sticky-top carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              	<button type="button" data-bs-target="#slider_carros" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
				<button type="button" data-bs-target="#slider_carros" data-bs-slide-to="1" aria-label="Slide 2"></button>
				<button type="button" data-bs-target="#slider_carros" data-bs-slide-to="2" aria-label="Slide 3"></button>
				<button type="button" data-bs-target="#slider_carros" data-bs-slide-to="3" aria-label="Slide 4"></button>
				<button type="button" data-bs-target="#slider_carros" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div class="carousel-inner">
              	${contenido}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#slider_carros" data-bs-slide="prev">
              	<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#slider_carros" data-bs-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
              	<span class="visually-hidden">Next</span>
            </button>
		</div>
            
            `
}
color_carro('Model_Y_blanco', true)

function info_motor0 (informacion_motor){
  let info_motor_traccion =document.getElementById("id_range")
  let info_motor_alcance =document.getElementById("id_plaid")
  
  info_motor_traccion.innerHTML = `
   30000
  `
  info_motor_alcance.innerHTML = `
   60000
  `
}
info_motor0(1,true)

function info_motor1 (){
  let info_motor_traccion =document.getElementById("id_range")
  let info_motor_alcance =document.getElementById("id_plaid")
  
  info_motor_traccion.innerHTML = `
   23566
  `
  info_motor_alcance.innerHTML = `
   80000
  `
}

function info_vel_0 (info_vel){
  let = info_vel_motor_mi = document.getElementById("num_millas")
  let = info_vel_motor_mph = document.getElementById("num_mph")
  let = info_vel_motor_sec = document.getElementById("num_sec")

  info_vel_motor_mi.innerHTML = `
  405
  `
  info_vel_motor_mph.innerHTML = `
  115
  `
  info_vel_motor_sec.innerHTML = `
  3,1
  `
}
info_vel_0(1,true)

function info_vel_1 (info_vel){
  let = info_vel_motor_mi = document.getElementById("num_millas")
  let = info_vel_motor_mph = document.getElementById("num_mph")
  let = info_vel_motor_sec = document.getElementById("num_sec")

  info_vel_motor_mi.innerHTML = `
  305
  `
  info_vel_motor_mph.innerHTML = `
  100
  `
  info_vel_motor_sec.innerHTML = `
  2,1
  `
}
