let buttons = document.querySelectorAll('.shopping-list1 button');
  buttons.forEach(function (button) {
    button.addEventListener('click', function() {
      this.style.color = 'lightgray';
    });
  });
  let buttons2 = document.querySelectorAll(".shopping-list2 button");
    buttons2.forEach(button =>{
      button.addEventListener("click", (e)=>{
          e.target.classList.toggle("line")
      })
    })
    buttons2.addEventListener("click", addLine);
    buttons2.addEventListener("click", addColor);
    function addColor(){
      buttons2.style.color = "blue";
    }
    function addLine(){
      buttons2.classList.toggle("line");
      buttons.removeEventListener("click", addColor);
    }


    document.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            console.log('ENTER');
        }
    });
    // document.addEventListener('keydown', function(event) {
    //     if (event.key === 'Enter') {
    //         console.log('ENTER');
    //     }
    // });
    let form1 = document.querySelector("#form1");
    form1.addEventListener("submit", (e) => {
        e.preventDefault();
        let myForm = new FormData(e.target);
        console.log(`Name is: ${myForm.get("name")}`);
        console.log(`Surname is: ${myForm.get("surname")}`);
        form1.reset();
    });
    let form2 = document.querySelector("#form2");
    form2.addEventListener("submit", (e) => {
        e.preventDefault();
        let password = form2.querySelector("input[name='password']").value;  
        if (password.length > 5) {
            console.log("İcazə verildi.");
        } else {
            console.log("İcazə verilmədi.");
        }
        form2.reset();
    });
