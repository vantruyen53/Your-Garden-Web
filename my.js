 const cabbageModel = document.getElementById("cabbagemodel");
  let rotationX = 0;

  function animate() {
    rotationX += 0.5;
    cabbageModel.setAttribute("camera-orbit", `${rotationX}deg 80deg`);
    requestAnimationFrame(animate);
  }

  animate();
