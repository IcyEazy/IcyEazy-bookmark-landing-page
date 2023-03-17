let openBtn = document.getElementById("open-btn"),
    closeBtn = document.getElementById("close-btn"),
    mobileMenu = document.querySelector(".menu"),
    simpleOpt = document.querySelectorAll(".simple"),
    speedyOpt = document.querySelectorAll(".speedy"),
    easyOpt = document.querySelectorAll(".easy"),
    featuresImage = document.querySelector(".feat-img"),
    featuresTitle = document.querySelector(".opt-txt-head"),
    featuresTexts = document.querySelector(".opt-txts"),
    arrow = document.querySelectorAll(".arrow"),
    whatQues = document.getElementById("what-is"),
    whatAns = document.getElementById("what-ans"),
    requestQues = document.getElementById("request"),
    requestAns = document.getElementById("req-ans"),
    appQues = document.getElementById("mobile-app"),
    appAns = document.getElementById("app-ans"),
    chromiumQues = document.getElementById("chromium"),
    chromiumAns = document.getElementById("chro-ans"),
    inputField = document.querySelector("input"),
    submitBtn = document.getElementById("submit-btn"),
    labelDiv = document.querySelector(".label"),
    errorImg = document.getElementById("error");

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const validate = () => {
  const email = $('#email').val();
  if (validateEmail(email)) {
    errorImg.classList.remove("show");
    labelDiv.style.borderColor = 'white';
  } else {
    errorImg.classList.add("show");
    labelDiv.style.borderColor = 'red';
  }
  return false;
}
// $('#email').on('input', validate);
inputField.addEventListener("keypress", function(e){
    if(e.key === 'Enter'){
        validate();
    }
});
submitBtn.addEventListener("click", validate);


whatQues.addEventListener("click", function(){
    whatAns.classList.toggle("show");
    arrow.item(0).classList.toggle("rotate");
    arrow.item(0).classList.toggle("col");
});

requestQues.addEventListener("click", function(){
    requestAns.classList.toggle("show");
    arrow.item(1).classList.toggle("rotate");
    arrow.item(1).classList.toggle("col");
});

appQues.addEventListener("click", function(){
    appAns.classList.toggle("show");
    arrow.item(2).classList.toggle("rotate");
    arrow.item(2).classList.toggle("col");
});

chromiumQues.addEventListener("click", function(){
    chromiumAns.classList.toggle("show");
    arrow.item(3).classList.toggle("rotate");
    arrow.item(3).classList.toggle("col");
});

simpleOpt.forEach(simple => {
    simple.addEventListener("click", function(){
        featuresImage.setAttribute("src", "./images/illustration-features-tab-1.svg");
        featuresTitle.textContent = "Bookmark in one click";
        featuresTexts.textContent = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
        simple.classList.add("opt-prop");
        borderLine();
    });
});

speedyOpt.forEach(speedy => {
    speedy.addEventListener("click", function(){
        featuresImage.setAttribute("src", "./images/illustration-features-tab-2.svg");
        featuresTitle.textContent = "Intelligent search";
        featuresTexts.textContent = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
        speedy.classList.add("opt-prop");
        borderLine();
    });
});

easyOpt.forEach(easy => {
    easy.addEventListener("click", function(){
        featuresImage.setAttribute("src", "./images/illustration-features-tab-3.svg");
        featuresTitle.textContent = "Share your bookmarks";
        featuresTexts.textContent = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
        easy.classList.add("opt-prop");
        borderLine();
    });
});


openBtn.addEventListener("click", function(){
    openBtn.classList.toggle("hide");
    mobileMenu.classList.toggle("show");
});

closeBtn.addEventListener("click", function(){
    openBtn.classList.toggle("hide");
    mobileMenu.classList.toggle("show");
});

function borderLine(){
    simpleOpt.forEach(simple => {
        simple.classList.remove("simp");
        speedyOpt.forEach(speedy => {
            easyOpt.forEach(easy => {
                simple.addEventListener("click", function(){
                    speedy.classList.remove('opt-prop');
                    easy.classList.remove('opt-prop');
                })
                speedy.addEventListener("click", function(){
                    simple.classList.remove('opt-prop');
                    easy.classList.remove('opt-prop');
                })
                easy.addEventListener("click", function(){
                    speedy.classList.remove('opt-prop');
                    simple.classList.remove('opt-prop');
                })
            })
        })
    })
}

window.onload = function(){
    simpleOpt.forEach(simple => {
        simple.classList.add('simp');
    })
}
// for (var i = 0; i < question.length; i++){
//     question[i].addEventListener("click", function(e){
//         console.log("question clicked")
//         for (var j = 0; j < faqAnswer.length; j++){
//             faqAnswer[j].classList.toggle("show");
//         }
//     })
// }