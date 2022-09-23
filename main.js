//local storage هنشفها فاضيه ولا لا
let maincolor = localStorage.getItem("color_option");

if (maincolor !== null) {
  //   لو مش فاضيه هنجيب المان كارل وهنخليها هوا المان  وال هنجيبه دا هوا ال ضغطنا عليه
  document.documentElement.style.setProperty("--main-color", maincolor);
  // document.querySelectorAll(".color-list li").forEach((ele)=>{
  //     ele.target.classList.remove("active")
  // })
}

// let open = document.querySelector(".setting-box ");

document.querySelector(".fa-gear").onclick = function () {
  // الكود دا مكنش بيخليها ترجع لما نضغط عليها تاني 
  // this.className = `${this.className} fa-spin `;
  // open.className = `${open.className} open`;

  this.classList.toggle("fa-spin")
  document.querySelector(".setting-box").classList.toggle("open")

};


const test = document.querySelectorAll(".color-list li");

test.forEach((li) => {
  li.addEventListener("click", (e) => {

    // هنا احنا بنغير المان بتاعت css باللون ال ضغط عليه الوقتي
    // ال هوا e.target.dataset.color
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );

    //set color on local storage
    // هنا بنحط في اللوكل ال كي والفاليو ال هوا جبناه من فوق
    localStorage.setItem("color_option", e.target.dataset.color);
    e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
      // هنا بنشيل كلاس الأكتف من علي العناصر كلها اول ما تضغط علي اي زرار
      ele.classList.remove("active");
    });
    // هنا بنرجعه لال انضغط عليه
    e.target.classList.add("active");
  });
});

// انتا عاوز توصل من الأخر ان لما الصفحه تحمل تعحمل معاها كيمه السبان في الإسكل 
let ourskills = document.querySelector(".skills");
// console.log(ourskills)
window.onscroll = () => {
  // skills offset top
  let offsettop = ourskills.offsetTop;
  //skills outer heigher
  let outerheight = ourskills.offsetHeight;

  let heigt = this.innerHeight;

  let scrolltop = this.pageYOffset;

  if (scrolltop > offsettop + outerheight - heigt) {
    let scroll = document.querySelectorAll(
      ".skills .skill-box .skill-progress span"
    )
    scroll.forEach(skill => {
      skill.style.width = skill.dataset.progress

    })
  }
};
let ourgalary = document.querySelectorAll(".galary img")

ourgalary.forEach(img => {
  img.addEventListener('click', (e) => {
    let overlay = document.createElement("div")
    overlay.className = "popup-overlay"
    document.body.appendChild(overlay)
    let divpop = document.createElement("div")
    divpop.className = "popup-box"

    if (img.alt !== null) {
      let imgheading = document.createElement("h2")

      let imgfuck = document.createTextNode(img.alt)
      imgfuck.className = 'text'

      imgheading.appendChild(imgfuck)
      divpop.appendChild(imgheading)
    }

    let imgpop = document.createElement("img")
    imgpop.className = "img-pop"
    imgpop.src = img.src
    divpop.appendChild(imgpop)
    document.body.appendChild(divpop)

    let closebutton = document.createElement("span")
    let closetext = document.createTextNode("X")
    closebutton.className = "close-button"
    closebutton.appendChild(closetext)
    divpop.appendChild(closebutton)
  })
})

document.addEventListener("click", (e) => {
  if (e.target.className == "close-button") {
    e.target.parentNode.remove()
    document.querySelector(".popup-overlay").remove()
  }
})

let bullet = document.querySelectorAll(".navigation .bullet")
// bullet.forEach(bull => {
//   bull.addEventListener("click", (e) => {

//     document.querySelector(e.target.dataset.section).scrollIntoView({
//       behavior: "smooth"
//     })
//   })

// })


let allLinks = document.querySelectorAll(".header .links a")

// allLinks.forEach(link => {
//   link.addEventListener("click", (e) => {

//     e.preventDefault()
//     document.querySelector(e.target.dataset.section).scrollIntoView({
//       behavior: "smooth"
//     })
//   })

// })


// الفنكشن دي اختصرت الإثنين بتاعت لما تضغط علي اللينك  فوق ولما تضغط علي البولت في الجنب

function scrollToSomewhere(element) {
  element.forEach(ele => {
    ele.addEventListener("click", (e) => {
      // البريفنت دي مهمه اوي عشان لما يروح للعنصر ميبعتش البيانات علطول لو شلتلها هتعرف
      e.preventDefault()
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth"
      })

    })

  })
}
function handelactive(ev) {
  ev.target.parentElement.querySelectorAll(".active").forEach(element => {
    element.classList.remove("active")
  })
  element.target.classList.add("active")
}


// وهنشغل الفنكشن نفسها لللإثنين البولت واللينك
scrollToSomewhere(bullet)
scrollToSomewhere(allLinks)


let bulletsSpan = document.querySelectorAll(".option-box span")
let remobullet = document.querySelector(".navigation")
let bulletlocal = localStorage.getItem("bullet-option")


if (bulletlocal === null) {
  bulletsSpan.forEach(span => {
    span.classList.remove("active");
  })
}

if (bulletlocal !== null) {
  bulletsSpan.forEach(span => {
    span.classList.remove("active");
  })
  if (bulletlocal === "block") {
    remobullet.style.display = "block"
    document.querySelector(".option-box-bullet .no").classList.add("active")

  } else if (bulletlocal === "none") {
    remobullet.style.display = "none"
    document.querySelector(".option-box-bullet .yes").classList.add("active")

  }
}

bulletsSpan.forEach(bullet => {
  bullet.addEventListener("click", (e) => {
    e.target.parentElement.querySelectorAll(".active").forEach((ele) => {

      ele.classList.remove("active");

    });
    e.target.classList.add("active");

    if (e.target.dataset.display === "show") {
      remobullet.style.display = "none"
      localStorage.setItem("bullet-option", "none")

    } else {

      remobullet.style.display = "block"
      localStorage.setItem("bullet-option", "block")
    }
  })
})

let reset = document.querySelector(".reset-options")

reset.onclick = function () {
  localStorage.clear()
  window.location.reload()
}

let togglebutton = document.querySelector(".toggle-menu")
let tlinks = document.querySelector(".links-container .links")
let butn = document.querySelector(".header .toggle-menu")

togglebutton.onclick = function (e) {
  e.stopPropagation()
  this.classList.toggle("menu-active")
  tlinks.classList.toggle("open")
}

document.addEventListener("click", (e) => {
  if (e.target !== togglebutton && e.target !== tlinks) {
    if (tlinks.classList.contains("open")) {
      tlinks.classList.toggle("open")
      togglebutton.classList.toggle("menu-active")
    }
  }
})
tlinks.onclick = function (e) {
  e.stopPropagation()
}
