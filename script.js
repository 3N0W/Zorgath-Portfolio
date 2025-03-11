document.addEventListener('DOMContentLoaded', function() {
  // GSAP Animations for Hero Section
  gsap.to('.hero h1', { duration: 1, opacity: 1, y: 0, delay: 0.5, ease: "power2.out" });
  gsap.to('.hero p', { duration: 1, opacity: 1, y: 0, delay: 0.7, ease: "power2.out" });
  gsap.to('.btn', { duration: 1, opacity: 1, y: 0, delay: 1, ease: "power2.out" });

  // Three.js 3D Interactive Element Setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 500, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, 500);
  document.getElementById('canvas-container').appendChild(renderer.domElement);

  // Create a premium looking sphere geometry
  const geometry = new THREE.SphereGeometry(1, 32, 32);
  const material = new THREE.MeshStandardMaterial({ 
      color: 0xf39c12,  // Gold hue for luxury
      metalness: 0.6, 
      roughness: 0.4 
  });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  // Add lighting for an elegant glow effect
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(5, 5, 5);
  scene.add(pointLight);

  // Set camera position
  camera.position.z = 3;

  // Animate the sphere with a slow, refined rotation
  function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.005;
    sphere.rotation.y += 0.005;
    renderer.render(scene, camera);
  }
  animate();

  // Responsive resizing for the canvas
  window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / 500;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, 500);
  });
});