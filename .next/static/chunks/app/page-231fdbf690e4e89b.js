(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9227:function(e,t,s){Promise.resolve().then(s.bind(s,3249)),Promise.resolve().then(s.bind(s,8715)),Promise.resolve().then(s.bind(s,8564)),Promise.resolve().then(s.bind(s,7660)),Promise.resolve().then(s.bind(s,9752))},8564:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return c}});var l=s(7437),r=s(2265),i=s(6691),a=s.n(i),o=e=>{let{active:t,selecTab:s,children:r}=e;return(0,l.jsx)("button",{onClick:s,children:(0,l.jsx)("p",{className:"mr-3 font-semibold hover:text-white ".concat(t?"text-white border-b border-slate-400":"text-[#ADB7BE] "),children:r})})};let n=[{title:"Skills",id:"skills",content:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"Node.js"}),(0,l.jsx)("li",{children:"Express"}),(0,l.jsx)("li",{children:"PostgreSQL"}),(0,l.jsx)("li",{children:"Sequelize"}),(0,l.jsx)("li",{children:"MySQL"}),(0,l.jsx)("li",{children:"Mongodb"}),(0,l.jsx)("li",{children:"Javascript"}),(0,l.jsx)("li",{children:"HTML, CSS"}),(0,l.jsx)("li",{children:"React JS"}),(0,l.jsx)("li",{children:"Redux"}),(0,l.jsx)("li",{children:"Next.js"})]})},{title:"Educacion",id:"educacion",content:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"Soy HENRY : Fullstack Web Developer (Stack PERN)."}),(0,l.jsx)("li",{children:"UNSJ : Estudiante, Licenciatura en Sistemas."})]})},{title:"Experiencia",id:"experiencia",content:(0,l.jsx)("ul",{children:(0,l.jsx)("li",{children:"Como desarrollador autodidacta y alumno de la academia Henry, he realizado diversos proyectos en solitario y en conjunto(modalidad SCRUM) para aplicar conocimientos tanto en areas de frontend como en backend, aunque con mas enfoque en backend y base de datos."})})}];var c=()=>{let[e,t]=(0,r.useState)("skills"),[s,i]=(0,r.useTransition)(),c=e=>{i(()=>{t(e)})};return(0,l.jsx)("section",{id:"about",className:"text-white mt-20",children:(0,l.jsxs)("div",{className:"md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ",children:[(0,l.jsx)(a(),{src:"/images/about.jpg",width:400,height:400,alt:"image",className:"rounded-full"}),(0,l.jsxs)("div",{className:"mt-4 md:mt-0 text-left flex flex-col h-full",children:[(0,l.jsx)("h2",{className:"text-4xl font-bold text-white mb-4",children:"Sobre mi"}),(0,l.jsx)("p",{className:"text-base md:text-lg ",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam aliquam labore non possimus."}),(0,l.jsxs)("div",{className:"flex flex-row mt-8",children:[(0,l.jsxs)(o,{selecTab:()=>c("skills"),active:"skills"===e,children:[" ","Skills"," "]}),(0,l.jsxs)(o,{selecTab:()=>c("educacion"),active:"educacion"===e,children:[" ","Educacion"," "]}),(0,l.jsxs)(o,{selecTab:()=>c("experiencia"),active:"experiencia"===e,children:[" ","Experiencia"," "]})]}),(0,l.jsx)("div",{className:"mt-8",children:n.find(t=>t.id===e).content})]}),(0,l.jsx)("div",{id:"projects"})]})})}},9752:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return x}});var l=s(7437),r=s(2265),i={src:"/_next/static/media/github-icon.d172885c.svg",height:24,width:24,blurWidth:0,blurHeight:0},a={src:"/_next/static/media/linkedin-icon.b06115c0.svg",height:24,width:24,blurWidth:0,blurHeight:0},o={src:"/_next/static/media/instagram-icon.31185efe.svg",height:24,width:24,blurWidth:0,blurHeight:0},n=s(1396),c=s.n(n),d=s(6691),m=s.n(d),x=()=>{let[e,t]=(0,r.useState)({email:"",motivo:"",mensaje:""}),[s,n]=(0,r.useState)(""),d=s=>{let{name:l,value:r}=s.target;t({...e,[l]:r})},x=async s=>{s.preventDefault(),n("Enviando...");try{let s=await fetch("https://formspree.io/f/mgejzzbz",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(s.ok)n("\xa1Gracias por tu mensaje!"),t({email:"",motivo:"",mensaje:""});else{let e=await s.json();e.errors?n(e.errors.map(e=>e.message).join(", ")):n("\xa1Ups! Hubo un problema al enviar tu formulario")}}catch(e){n("\xa1Ups! Hubo un problema al enviar tu formulario")}};return(0,l.jsx)("div",{id:"contact",className:"mt-20",children:(0,l.jsxs)("section",{className:"grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h5",{className:"text-xl font-bold text-white my-m2",children:"Hablemos!"}),(0,l.jsxs)("p",{className:"text-[#ADB7BE] mb-4 max-w-md",children:[" ","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, officiis nihil nulla temporibus ab aspernatur."]}),(0,l.jsxs)("div",{className:"socials flex flex-row gap-2",children:[(0,l.jsx)(c(),{href:"https://www.linkedin.com/in/juan-cruz-ruarte-aa302a255",children:(0,l.jsx)(m(),{src:a,alt:"Linkedin Icon"})}),(0,l.jsx)(c(),{href:"https://github.com/Juan191101",children:(0,l.jsx)(m(),{src:i,alt:"Github Icon"})}),(0,l.jsx)(c(),{href:"https://www.instagram.com/juanruarte_/",children:(0,l.jsx)(m(),{src:o,alt:"Instagram Icon"})})]})]}),(0,l.jsx)("div",{children:(0,l.jsxs)("form",{className:"flex flex-col",onSubmit:x,children:[(0,l.jsxs)("div",{className:"mb-6",children:[(0,l.jsx)("label",{htmlFor:"email",className:"text-white block mb-2 text-sm font-medium",children:"Tu email"}),(0,l.jsx)("input",{name:"email",type:"email",id:"email",value:e.email,onChange:d,required:!0,className:"bg-[#18191E] border border-[#33353F] placeholder-slate-600 text-gray-100 text-sm rounded-s block w-full p-2",placeholder:"ejemplo@google.com"})]}),(0,l.jsxs)("div",{className:"mb-6",children:[(0,l.jsx)("label",{htmlFor:"motivo",className:"text-white block mb-2 text-sm font-medium",children:"Motivo"}),(0,l.jsx)("input",{name:"motivo",type:"text",id:"motivo",value:e.motivo,onChange:d,required:!0,className:"bg-[#18191E] border border-[#33353F] placeholder-slate-600 text-gray-100 text-sm rounded-s block w-full p-2",placeholder:"Tu motivo aqu\xed"})]}),(0,l.jsxs)("div",{className:"mb-6",children:[(0,l.jsx)("label",{htmlFor:"mensaje",className:"text-white block mb-2 text-sm font-medium",children:"Mensaje"}),(0,l.jsx)("textarea",{name:"mensaje",id:"mensaje",value:e.mensaje,onChange:d,required:!0,className:"bg-[#18191E] border border-[#33353F] placeholder-slate-600 text-gray-100 text-sm rounded-s block w-full p-2",placeholder:"Tu mensaje aqu\xed."})]}),(0,l.jsx)("button",{type:"submit",className:"bg-slate-800 to-slate-300 text-white hover:bg-slate-700 py-2.5 px-5 rounded-lg w-full",children:"Enviar mensaje"}),(0,l.jsx)("p",{children:s})]})})]})})}},3249:function(e,t,s){"use strict";s.r(t);var l=s(7437);s(2265);var r=s(6691),i=s.n(r),a=s(2400);t.default=()=>(0,l.jsx)("section",{children:(0,l.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-12",children:[(0,l.jsxs)("div",{className:"col-span-7 place-self-center text-center sm:text-left",children:[(0,l.jsxs)("h1",{className:"text-white mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold",children:[(0,l.jsxs)("span",{className:"text-transparent bg-clip-text bg-gradient-to-br from-slate-300 via-slate-600 to-slate-300 ",children:["Hola!",""," Soy Juan Ruarte, "]}),(0,l.jsx)("br",{}),(0,l.jsx)(a.e,{sequence:["Fullstack Devloper",1e3,"Backend Developer",1e3,"Frontend Developer",1e3],wrapper:"span",speed:50,repeat:1/0})]}),(0,l.jsx)("p",{className:"text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl ",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nam explicabo fugit laudantium dolorem."}),(0,l.jsxs)("div",{children:[(0,l.jsx)("button",{className:"px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-900 via-slate-600 to-slate-300 hover:from-slate-300 hover:to-slate-600 hover:via-blue-900  text-white",children:"Conoceme"}),(0,l.jsx)("button",{className:"px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-900 via-slate-600 to-slate-300 hover:bg-slate800 text-white  mt-3",children:(0,l.jsx)("span",{className:"block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2",children:"Descargar CV"})})]})]}),(0,l.jsx)("div",{className:"col-span-5 place-self-center mt-4 lg:mt-0",children:(0,l.jsx)("div",{className:"rounded-full bg-slate-400 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative",children:(0,l.jsx)(i(),{src:"/images/image.png",alt:"pc-image",width:300,height:300,className:"absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"})})})]})})},8715:function(e,t,s){"use strict";s.r(t),s.d(t,{NavBar:function(){return x}});var l=s(7437),r=s(2265),i=s(1396),a=s.n(i),o=e=>{let{href:t,title:s}=e;return(0,l.jsx)(a(),{href:t,className:"block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white",children:s})},n=s(2364),c=s(7830),d=e=>{let{links:t}=e;return(0,l.jsx)("ul",{className:"flex flex-col py-4 items-center",children:t.map((e,t)=>(0,l.jsx)("li",{children:(0,l.jsx)(o,{href:e.path,title:e.title})},t))})};let m=[{title:"Sobre m\xed",path:"#about"},{title:"Proyectos",path:"#projects"},{title:"Contacto",path:"#contact"}],x=()=>{let[e,t]=(0,r.useState)(!1);return(0,l.jsxs)("nav",{className:"fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-95",children:[(0,l.jsxs)("div",{className:"flex flex-wrap items-center justify-between mx-auto p-6",children:[(0,l.jsx)(a(),{href:"/",className:"text-2xl md:text 5xl text-white font-semibold",children:"LOGO"}),(0,l.jsx)("div",{className:"mobile-menu block md:hidden",children:e?(0,l.jsx)("button",{onClick:()=>t(!1),className:"flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white",children:(0,l.jsx)(c.Z,{className:"h-5 w-5"})}):(0,l.jsx)("button",{onClick:()=>t(!0),className:"flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white",children:(0,l.jsx)(n.Z,{className:"h-5 w-5"})})}),(0,l.jsx)("div",{className:"menu hidden md:block md:w-auto",id:"navbar",children:(0,l.jsx)("ul",{className:"flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0",children:m.map((e,t)=>(0,l.jsx)("li",{children:(0,l.jsx)(o,{href:e.path,title:e.title,onClick:()=>scrollTo(e.path)})},t))})})]}),e?(0,l.jsx)(d,{links:m}):null]})}},7660:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return x}});var l=s(7437),r=s(2265),i=s(7055),a=s(9142),o=s(1396),n=s.n(o),c=e=>{let{imgUrl:t,title:s,description:r,gitUrl:o,previewUrl:c}=e;return(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"h-52 md:h-72 rounded-t-xl relative group ",style:{background:"url(".concat(t,")"),backgroundSize:"cover"},children:(0,l.jsxs)("div",{className:"overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500",children:[(0,l.jsx)(n(),{href:o,className:"h-14 mr-2 w-14 border-2 relative rounded-full border-slate-300 hover:border-white",children:(0,l.jsx)(i.Z,{className:"h-10 w-10 text-slate-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white"})}),(0,l.jsx)(n(),{href:c,className:"h-14 w-14 border-2 relative rounded-full border-slate-300 hover:border-white",children:(0,l.jsx)(a.Z,{className:"h-10 w-10 text-slate-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover/link:text-white"})})]})}),(0,l.jsxs)("div",{className:"text-white rounded-b-xl bg-[#181818] py-6 px-4",children:[(0,l.jsx)("h5",{className:"text-xl font-semibold mb-2",children:s}),(0,l.jsx)("p",{className:"text-[#ADB7BE]",children:r})]})]})},d=e=>{let{name:t,onClick:s,isSelected:r}=e;return(0,l.jsx)("button",{className:"".concat(r?"text-white border-white":"text-[#ADB7BE] border-slate-600 hover:border-white hover:text-white"," rounded-full border-2 px-4 py-3 text-xl cursor-pointer"),onClick:()=>s(t),children:t})};let m=[{id:1,title:"Portfolio",description:"Pagina web para mi Portfolio personal utilizando NextJS",image:"/images/projects/Portfolio.png",tag:["Todos","Frontend"],gitUrl:"/",previewUrl:"/"},{id:2,title:"Celular Xpress",description:"Backend y base de datos para e-commerce de celulares",image:"/images/projects/CellXpress.png",tag:["Todos","Backend"],gitUrl:"https://github.com/Gambuli8/CellXpress-Frontend/tree/developer",previewUrl:"https://pf-cell-xpress-frontend.vercel.app/"},{id:3,title:"PokeAPI Project",description:"Proyecto integrador Bootcamp SoyHenry, servidor con Nodejs, Express y PostgreSQL y cliente con ReactJS, React-Redux",image:"/images/projects/PokeAPI.png",tag:["Todos","Backend","Frontend"],gitUrl:"https://github.com/Juan191101/Deploy-Pokemon",previewUrl:"https://github.com/Juan191101/Deploy-Pokemon"},{id:4,title:"Galeria Personal",description:"(Actualmente en proceso...) Practica personal para implementacion de cloudinary, mongoose y autenticacion propia.",image:"/images/projects/Galeria.png",tag:["Todos","Backend","Frontend"],gitUrl:"/",previewUrl:"/"},{id:5,title:"Homelo chino",description:"Es como homero pero... chino",image:"/images/projects/Homero.png",tag:["Todos","Backend","Frontend"],gitUrl:"/",previewUrl:"/"}];var x=()=>{let[e,t]=(0,r.useState)("Todos"),s=e=>{t(e)},i=m.filter(t=>t.tag.includes(e));return(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{className:"text-center text-4xl font-bold text-white mt-4",children:"Mis Proyectos"}),(0,l.jsxs)("div",{className:"text-white flex flex-row justify-center items-center gap-2 text py-6 ",children:[(0,l.jsx)(d,{onClick:s,name:"Todos",isSelected:"Todos"===e}),(0,l.jsx)(d,{onClick:s,name:"Frontend",isSelected:"Frontend"===e}),(0,l.jsx)(d,{onClick:s,name:"Backend",isSelected:"Backend"===e})]}),(0,l.jsx)("div",{className:"grid md:grid-cols-3 gap-8 md:gap-12",children:i.map(e=>(0,l.jsx)(c,{title:e.title,description:e.description,imgUrl:e.image,tags:e.tag,gitUrl:e.gitUrl,previewUrl:e.previewUrl},e.id))})]})}}},function(e){e.O(0,[325,971,596,744],function(){return e(e.s=9227)}),_N_E=e.O()}]);