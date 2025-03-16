const lista_stack = [
    { name: "HTML", bg: "#E34F26" },
    { name: "CSS", bg: "#1572B6" },
    { name: "JavaScript", bg: "#F7DF1E" },
    { name: "React", bg: "#61DAFB" },
    { name: "Java", bg: "#007396" },
    { name: "Spring", bg: "#6DB33F" },
    { name: "MySQL", bg: "#4479A1" },
    { name: "Git", bg: "#F05032" },
    { name: "Linux", bg: "#FCC624" },
    { name: "Python", bg: "#3776AB" }
  ];
  
  const obj_main = document.querySelector(".main-conteiner");
  
  const load_stack = () => {
  
    obj_main.innerHTML = '';
  
    lista_stack.forEach((item, index) => {
      
      obj_main.innerHTML += `
                         <div class="card-content">
                             <div class="content-img">
                             <img src="${item.name.toLowerCase() + ".png"}">
                             </div>
                         <p>${item.name}</p>
                         </div>
      `;
    });
  

    const list_div_main = obj_main.querySelectorAll('.card-content');
  
  
    list_div_main.forEach((item, index) => {
      item.addEventListener('mouseover', () => {
        item.querySelector(".content-img").style.backgroundColor = lista_stack[index].bg;
      }
    );
  
      item.addEventListener('mouseout', () => {
        item.querySelector(".content-img").style.backgroundColor = "#282828";
      });
    });
  }
  
  
  load_stack();