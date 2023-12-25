/*кнопка навигации*/

function OpenAddrecept() {
     let recept = document.querySelector('.recp-add-block');
     if (recept.style.opacity == "1") {
          recept.style.cssText = `
          margin-top: 0;
          margin-bottom: 0;
          height: 0;
          opacity: 0;
          padding: 0 40px;`;
     } else {
          recept.style.cssText = `
          margin-top: 30px;
          margin-bottom: 30px;
          height: 200px;
          opacity: 1;
          padding: 40px;`;
     }

}

document.getElementById('add-recept-button').addEventListener("click", OpenAddrecept);