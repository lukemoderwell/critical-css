// JS
// Find all classes above the fold

function findClasses() {
  let classes = [];
  const criticalContent = document.querySelector('[data-critical-content]');
  
  // add parent classes
  const parentClasses = criticalContent.classList.value.split(' ');
  for (var i = 0; i < parentClasses.length; i += 1) {
    classes.push(parentClasses[i]);
  }

  // add child classes
  const children = criticalContent.children;
  for (var x = 0; x < children.length; x += 1) {
    var childClasses = children[x].classList.value.split(' ');
    for (var z = 0; z < childClasses.length; z += 1) {
      classes.push(childClasses[z]);
    }
  }

  console.log(classes);
}

findClasses();
