// Componente header
const header = document.querySelector(".encabezado");
const imagenLogo = /*html*/`
    <div class="logo">
        <a href="index.html" class="link_logo">
            <svg class="iconoLogo" xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                <g clip-path="url(#clip0_1_486)">
                <path d="M25.543 18.7717L24.2528 9.835C23.9214 7.53666 21.921 5.83333 19.5656 5.83333H8.84175C6.4863 5.83333 4.48594 7.53666 4.15452 9.835L2.86434 18.7717C2.60394 20.5683 4.01248 22.1667 5.84713 22.1667C6.65201 22.1667 7.40954 21.8517 7.97769 21.2917L10.6527 18.6667H17.7546L20.4178 21.2917C20.9859 21.8517 21.7553 22.1667 22.5484 22.1667C24.3948 22.1667 25.8034 20.5683 25.543 18.7717ZM13.02 12.8333H10.6527V15.1667H9.46908V12.8333H7.10179V11.6667H9.46908V9.33333H10.6527V11.6667H13.02V12.8333ZM17.7546 11.6667C17.1036 11.6667 16.571 11.1417 16.571 10.5C16.571 9.85833 17.1036 9.33333 17.7546 9.33333C18.4056 9.33333 18.9382 9.85833 18.9382 10.5C18.9382 11.1417 18.4056 11.6667 17.7546 11.6667ZM20.1219 15.1667C19.4709 15.1667 18.9382 14.6417 18.9382 14C18.9382 13.3583 19.4709 12.8333 20.1219 12.8333C20.7729 12.8333 21.3055 13.3583 21.3055 14C21.3055 14.6417 20.7729 15.1667 20.1219 15.1667Z" fill="#2A7AE4"/>
                </g>
                <defs>
                <clipPath id="clip0_1_486">
                    <rect width="28.4075" height="28" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <img src="/assets/img/logoNombre.svg" alt="Logo AluraGeek" class="iconoNombre">
        </a>
    </div>
`;
const btnLogin = /*html*/`
    <button type="button" class="btn_login btn">Login</button>
`;
const busqueda = /*html*/`
    <svg class="busqueda" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>    
`
const header_full = document.createElement("div");
header_full.classList = "encabezado_contenido";
header_full.innerHTML += imagenLogo;
header_full.innerHTML += btnLogin;
header_full.innerHTML += busqueda;
header.appendChild(header_full);


// Component footer
const footer = document.querySelector("footer");
footer.innerHTML = /*html*/`
    <footer class="footer container">
        <h3 class="footer_descripcion"> Desarrollado por Juan García</h3>
        <h3 class="footer_año">2023</h3>
    </footer>
`;

// seccion Imagen menu y contacto
const rodapie = document.querySelector(".rodapie");
const menu = /*html*/`
<div class="menu">
<nav>
<ul class="menu_list-nav">
<li class="menu_link"><a href="#">Quiénes somos</a></li>
<li class="menu_link"><a href="#">Política de privacidad</a></li>
<li class="menu_link"><a href="#">Programa de fidelidad</a></li>
<li class="menu_link"><a href="#">Nuestras tiendas</a></li>
<li class="menu_link"><a href="#">Quiero ser franquiciado</a></li>
<li class="menu_link"><a href="#">Anuncie aquí</a></li>
</ul>
</nav>
</div>  
`
const contacto = /*html*/`
<div class="formulario">
    <div class="formulario_contenido">
        <h2 class="formulario_titulo">Hable con nosotros</h2>
        <form action="enviar.php" method="post">
            <div class="campo_texto">
                <input type="text" id="nombre" name="nombre" required class="inp" placeholder="Aqui va el nombre">
                <label for="nombre" class="lbl"><span class="text-nomb">Nombre</span></label>
                <span class="inp-msg-error">Este campo es requerido</span>
            </div>
            <br>
            <div class="campo_texto">
                <textarea id="mensaje" name="mensaje" required class="inp_textarea"></textarea>
                <label for="mensaje" class="lbl"><span class="text-nomb">Mensaje</span></label>
                <span class="inp-msg-error">Este campo es requerido</span>
            </div>
            <br>
            <input class="btn btn_principal" type="submit" value="Enviar Mensaje">
        </form>
    </div>
</div>
`
const rodapie_full = document.createElement("div");
rodapie_full.classList = "rodapie_contenido";
rodapie_full.innerHTML += imagenLogo;
rodapie_full.innerHTML += menu;
rodapie_full.innerHTML += contacto;
rodapie.appendChild(rodapie_full);


