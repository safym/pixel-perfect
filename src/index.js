const controls = {
  layersCheckbox: document.getElementById("layers-switch"),
  blendCheckbox: document.getElementById("blend-switch"),
  referenceCheckbox: document.getElementById("ref-switch"),
  element: {
    layersElement: document.getElementById("layers"),
    referenceElement: document.getElementById("ref"),
  },
  setChecked() {
    this.layersCheckbox.checked = true;
    this.blendCheckbox.checked = false;
    this.referenceCheckbox.checked = false;
  }
}

controls.setChecked()

controls.referenceCheckbox.addEventListener('change', function() {
  if (this.checked) {
    setDensity(controls.element.referenceElement, 0.5);
  } else {
    setDensity(controls.element.referenceElement, 0);
  }
});

controls.layersCheckbox.addEventListener('change', function() {
  if (this.checked) {
    setDensity(controls.element.layersElement, 1);
  } else {
    setDensity(controls.element.layersElement, 0);
  }
});

controls.blendCheckbox.addEventListener('change', function() {
  if (this.checked) {
    setBlend(controls.element.referenceElement, "exclusion");
  } else {
    setBlend(controls.element.referenceElement, "normal");
  }
});

function setDensity(element, den) {
  element.style.opacity = den;
}

function setBlend(element, blend) {
  element.style.MixBlendMode = blend
  element.style["mix-blend-mode"] = blend
}


