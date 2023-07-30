if (!window.changeMeme) {
  window.memeChanged = false;
  window.changeMeme = () => {
    const memeImages = [
      "https://i.pinimg.com/originals/d1/07/17/d107178c10a908b3ec8aae3082f6dd58.jpg",
      "https://i.pinimg.com/originals/67/22/0e/67220e4ae86ade07c5f2f6ef7a722b62.jpg",
      "https://i.pinimg.com/originals/59/28/bd/5928bd465050c508c284b22459582de2.jpg",
      "https://i.pinimg.com/originals/bf/19/60/bf1960e4f6526ec8d1f364168e70249b.jpg",
      "https://i.pinimg.com/originals/70/d1/0e/70d10eb8f925f054acf2046e978d17bc.jpg",
      "https://i.pinimg.com/originals/7e/8e/53/7e8e53e42a4e0b8ff33e0f62e673b06f.jpg",
      "https://i.pinimg.com/originals/76/df/5f/76df5f51d2e9784c3932f3e15dc6b3bc.jpg",
      "https://i.pinimg.com/originals/5f/01/a3/5f01a37b51f530daec9290953940d432.jpg",
      "https://i.pinimg.com/originals/bf/05/5a/bf055ac664fca803f6b7a8e88ba7845d.jpg",
      "https://i.pinimg.com/originals/12/cc/6d/12cc6da510a71ab1ee1ead1f85820a37.jpg",
      "https://i.pinimg.com/originals/b9/e7/ca/b9e7ca176c2aa7b9bb7ec376fd4981ac.jpg",
      "https://i.pinimg.com/originals/7d/4b/7c/7d4b7c5e2eb02223e2a1dc99502c8024.jpg",
      "https://i.pinimg.com/originals/ac/8e/66/ac8e6698f5703d944d251c0cc2d05598.jpg",
      "https://i.pinimg.com/originals/e0/ce/62/e0ce6284709dc3ac182c9d730f22b4c2.jpg",
      "https://i.pinimg.com/originals/0c/04/b1/0c04b15d038eeb3b4634f2a3392f4992.jpg",
      "https://i.pinimg.com/originals/65/5c/35/655c35c344ca499ac1f7446167b23d2a.jpg",
      "https://i.pinimg.com/originals/ee/9d/ad/ee9dade9709c594d3ef29f0b4846f63e.jpg",
      "https://i.pinimg.com/originals/4e/7b/9c/4e7b9c9805485e7903f6be372382477d.jpg",
      "https://i.pinimg.com/originals/1b/fb/28/1bfb288620aa25bb5df5cbe5e15ad29f.jpg",
    ];
    const memePhoto = document.querySelector(".meme-photo");
    // if (memePhoto) {
    if (memeImages.length > 0) {
      const randomIndex = Math.floor(Math.random() * memeImages.length);
      const randomImage = memeImages[randomIndex];
      console.log(memePhoto);
      if (memePhoto) {
        memePhoto.src = randomImage;
        memePhoto.alt = "Random Meme";
      }
    } else {
      memePhoto.src = "default.jpg";
      memePhoto.alt = "Default Meme";
    }
    // }
  };
}

setTimeout(() => {
  if (!window.memeChanged) {
    window.changeMeme();
    window.memeChanged = true;
  } else {
    window.memeChanged = false;
  }
}, 100);
