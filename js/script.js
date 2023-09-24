
let percent = 0;

// REVEAL FUNCTION
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}

window.addEventListener("scroll", reveal);

reveal();

// Changes the shape of the red line
function red() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    classEqs('shape', 'square');
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
      classEqs('shape', 'rectangle');
      if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        classEqs('shape', 'circle');
        if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100) {
          classEqs('shape', 'scircle');
          if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
            classEqs('shape', 'fline');
            document.getElementById('shape').style.position = "relative";
          }
        }
      }
    }
  }
  else {
    classEqs('shape', 'line');
    document.getElementById('shape').style.position = "sticky";
  }
}

let i = 1;
var lastScrollTop = 0;

window.addEventListener("scroll", function() {
  var st = document.documentElement.scrollTop;
  
  if (st > lastScrollTop) {
    if(document.documentElement.scrollTop > 1200) {
      document.getElementById('moon').style.marginLeft = i / 2 + "%";
      i++;
    }
  } else if (st < lastScrollTop && document.documentElement.scrollTop < 2800) {
    console.log("up")
    document.getElementById('moon').style.marginLeft = i / 1.5 + "%";
    i--;  
  }

  if (document.documentElement.scrollTop <= 1000) {
    document.getElementById('moon').style.marginLeft = -10 + "%";
  }
  // if (document.documentElement.scrollTop = 1200) {
  //   document.getElementById('moon').style.marginLeft = 1 + "%";
  // }
  if (document.documentElement.scrollTop > 2800) {
    document.getElementById('moon').style.marginLeft = 100 + "%";
  }

  lastScrollTop = st <= 0 ? 0 : st
}, false);

// moves moon
function moon() {
  // if (document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700) {
  //   document.getElementById('moon').style.marginLeft = "25%";
  //   if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {
  //     document.getElementById('moon').style.marginLeft = "45%";
  //     if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
  //       document.getElementById('moon').style.marginLeft = "65%";
  //       if (document.body.scrollTop > 2300 || document.documentElement.scrollTop > 2300) {
  //         document.getElementById('moon').style.marginLeft = "85%";
  //       }
  //     }
  //   }
  // }

  // if(document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1600) {
  //   document.getElementById('moon').style.marginLeft = (document.documentElement.scrollTop / 185) * 4.5 + "%";
  // }


 

  // if(document.body.scrollTop > 1700 || document.documentElement.scrollTop < 1500) {
  //   document.getElementById('moon').style.marginLeft = "0%";
  // }

  // if(document.body.scrollTop > 1700 || document.documentElement.scrollTop < 1600) {
  //   document.getElementById('moon').style.marginLeft = (document.documentElement.scrollTop / 180)  + "%";
  // }

  // else {
  //   document.getElementById('moon').style.marginLeft = "0%";
  // }
}

function scrollNum() {
  if (document.documentElement.scrollTop > document.documentElement.scrollTop+1 ) {
    percent += 1;
    console.log (percent);
  }
}

// Called here
window.onscroll = function() { red(), moon(), scrollNum() };

// WRITE FUNCTION
function write(id, text, k, sp) {
  if (k < text.length) {
    document.getElementById(id).innerHTML += text.charAt(k);
    k++;
    setTimeout(write, sp, id, text, k, sp);
  }
}
// write function takes in 4 parameters, id, text, k and sp
// id is the html/css id of the place you want to write
// text is the text you want to write
// k is needed to reset the number so it can be compared to the length
// sp is the speed at you want to text to be written

setTimeout(
  write, 1300, "fes", "FES", 0, 1000
  )

// setimeout will wait a certain amount of time before funning the function, the first number is how long it will wait

setTimeout(
  write, 4000, "die", "Remember you will die", 0, 100
  )



function test() {
  setTimeout(classEqs, 500, "shape", "square");
  setTimeout(classEqs, 2000, "shape", "rectangle");
  setTimeout(classEqs, 3000, "shape", "circle");
  setTimeout(classEqs, 4000, "shape", "scircle");
  setTimeout(classEqs, 5000, "shape", "fline");

}

function swap(id, cls) {
  document.getElementById(id).classList.toggle(cls);
}

function classEqs(id, cls) {
  document.getElementById(id).className = cls;
}


