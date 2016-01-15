//***********************************************************************
// Javascript Toolkit to generate awesome spinner for Salesforce Projects
//***********************************************************************
function isEmptyString(toReturn) {
  if (typeof toReturn === 'string' || toReturn instanceof String) {
    if (!toReturn.trim())
      return true;
  } else {
    if (toReturn === null)
      return true;
    return false;
  }
}

function generateSpinnerHtml(ele, spinnerType) {
  var spinnerHTML;
  !isEmptyString(spinnerType) ? spinnerType = spinnerType : spinnerType = "windows";
  switch (spinnerType) {
    case "facebook":
      spinnerHTML = '<div class="force-wave">';
      spinnerHTML += '<div class="force-rect force-rect1"></div>';
      spinnerHTML += '<div class="force-rect force-rect2"></div>';
      spinnerHTML += '<div class="force-rect force-rect3"></div>';
      spinnerHTML += '<div class="force-rect force-rect4"></div>';
      spinnerHTML += '<div class="force-rect force-rect5"></div></div>';
      break;
    case "windows":
      spinnerHTML = '<div class="force-rotating-plane"></div>';
      break;
    case "bounce":
      spinnerHTML = '<div class="force-double-bounce">';
      spinnerHTML += '<div class="force-child force-double-bounce1"></div>';
      spinnerHTML += '<div class="force-child force-double-bounce2"></div></div>';
      break;
    case "cubes":
      spinnerHTML = '<div class="force-wandering-cubes">';
      spinnerHTML += '<div class="force-cube force-cube1"></div>';
      spinnerHTML += '<div class="force-cube force-cube2"></div></div>';
      spinner = "force-wandering-cubes";
      break;
    case "pulse":
      spinnerHTML = '<div class="force-spinner force-spinner-pulse"></div>';
      break;
    case "dots":
      spinnerHTML = '<div class="force-chasing-dots">';
      spinnerHTML += '<div class="force-child force-dot1"></div>';
      spinnerHTML += '<div class="force-child force-dot2"></div></div>';
      break;
    case "bubbles":
      spinnerHTML = '<div class="force-three-bounce">';
      spinnerHTML += '<div class="force-child force-bounce1"></div>';
      spinnerHTML += '<div class="force-child force-bounce2"></div>';
      spinnerHTML += '<div class="force-child force-bounce3"></div></div>';
      break;
    case "circle":
      spinnerHTML = '<div class="force-circle">';
      spinnerHTML += '<div class="force-circle1 force-child"></div>';
      spinnerHTML += '<div class="force-circle2 force-child"></div>';
      spinnerHTML += '<div class="force-circle3 force-child"></div>';
      spinnerHTML += '<div class="force-circle4 force-child"></div>';
      spinnerHTML += '<div class="force-circle5 force-child"></div>';
      spinnerHTML += '<div class="force-circle6 force-child"></div>';
      spinnerHTML += '<div class="force-circle7 force-child"></div>';
      spinnerHTML += '<div class="force-circle8 force-child"></div>';
      spinnerHTML += '<div class="force-circle9 force-child"></div>';
      spinnerHTML += '<div class="force-circle10 force-child"></div>';
      spinnerHTML += '<div class="force-circle11 force-child"></div>';
      spinnerHTML += '<div class="force-circle12 force-child"></div></div>';
      break;
    case "fastspinner":
      spinnerHTML = '<div class="spinner-loader"></div>';
      break;
    case "dotsloader":
      spinnerHTML = '<div class="dots-loader"></div>';
      break;
    case "throbberloader":
      spinnerHTML = '<div class="throbber-loader"></div>';
      break;
    case "whirlyloader":
      spinnerHTML = '<div class="whirly-loader"></div>';
      break;
    case "google":
      spinnerHTML = '<span class="google-force-container">  <div class="firstdot"></div><div class="secondtdot"></div><div class="thirddot"></div><div class="forthdot"></div></span>';
      break;
    case "material":
      spinnerHTML = '<div class="load-bar"><div class="bar"></div>  <div class="bar"></div><div class="bar"></div></div>';
      break;
    case "youtube":
      spinnerHTML = '<div class="loading-line"></div><div class="km"></div>>';
      break;
    case "ball-beat":
      spinnerHTML = '<div class="loading-line"></div><div class="km"></div>>';
      break;
    case "google-material":
      spinnerHTML = '<div class="loader"> <svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>';
      break;
    case "slds":
      spinnerHTML = '<div class="slds_spinner">';
      spinnerHTML += '<div class="slds_spinner-a"></div>';
      spinnerHTML += '<div class="slds_spinner-b"></div>';
      spinnerHTML += '</div>';
      break; 
  }
  $(ele).append(spinnerHTML);
}

function forceSpin(elementId, spinnerType, spinnerColor, spinnerbgColor) {
  console.log('hello');
  generateSpinnerHtml(elementId, spinnerType);
  switch (spinnerType) {
    case "facebook":
      $('.force-rect1').css("background-color", spinnerColor);
      $('.force-rect2').css("background-color", spinnerColor);
      $('.force-rect3').css("background-color", spinnerColor);
      $('.force-rect4').css("background-color", spinnerColor);
      $('.force-rect5').css("background-color", spinnerColor);
      $('.force-wave ').css("background-color", spinnerbgColor);
      //$('.force-react ').css("background-color", height);
      break;
    case "circle":
      $('.force-child:before').css("background-color", spinnerColor);
      break;
    case "windows":
      $('.force-rotating-plane').css("background-color", spinnerColor);
      break;
    case "bubbles":
      $('.force-three-bounce .force-child').css("background-color", spinnerColor);
      break;
    case "pulse":
      $('.force-spinner-pulse ').css("background-color", spinnerColor);
      break;
    case "dots":
      $('.force-child').css("background-color", spinnerColor);
      break;
    case "cubes":
      $('.force-cube').css("background-color", spinnerColor);
      break;
    case "bounce":
      $('.force-child .force-double-bounce1').css("background-color", spinnerColor);
      $('.force-child .force-double-bounce2').css("background-color", spinnerColor);
      break;
     
  }
}
