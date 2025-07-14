
function generateAvatar() {
  const input = document.getElementById("imageInput");
  const canvas = document.getElementById("avatarCanvas");
  const ctx = canvas.getContext("2d");
  const file = input.files[0];
  if (file) {
    const img = new Image();
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      alert("Avatar generated and ready to talk!");
    };
    img.src = URL.createObjectURL(file);
  }
}
