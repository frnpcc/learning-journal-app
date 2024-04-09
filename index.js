document.head.insertAdjacentHTML('afterbegin', `
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&family=Source+Sans+3:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">`)

if (document.getElementById('recent-posts')){

  document.getElementById('recent-posts').innerHTML = `
    <h3 class="recent-posts-h3">Recent posts</h3>
    <div class="posts">
      <div class="post">
        <img src="images/post-1.png" alt="">
        <span>july 23, 2022</span>
        <h3>Blog one</h3>
        <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
      </div>
      <div class="post">
        <img src="images/post-2.png" alt="">
        <span>july 23, 2022</span>
        <h3>Blog two</h3>
        <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
      </div>
      <div class="post">
        <img src="images/post-3.png" alt="">
        <span>july 23, 2022</span>
        <h3>Blog three</h3>
        <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
      </div>
    </div>`
}

document.querySelector('header').innerHTML = `
  <div>
    <img src="images/logo.png" alt="">
    <h1>My learning journal</h1>
  </div>
  <nav>
    <ul>
      <li><a href="index.html">home</a></li>
      <li><a href="about-me.html">about me</a></li>
    </ul>
  </nav>`

document.querySelector('footer').innerHTML = `
  <h4>My Learning Journal</h4>
  <p>Copyright ©2022</p>`

document.getElementById('view-more').addEventListener('click', function() {
  document.getElementById('posts-container').insertAdjacentHTML('beforeend', `
  <div class="post">
    <img src="images/post-4.png" alt="">
    <span>july 23, 2022</span>
    <h3>Blog four</h3>
    <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
  </div>
  <div class="post">
    <img src="images/post-5.png" alt="">
    <span>july 23, 2022</span>
    <h3>Blog five</h3>
    <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
  </div>
  <div class="post">
    <img src="images/post-6.png" alt="">
    <span>july 23, 2022</span>
    <h3>Blog six</h3>
    <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
  </div>`)
})
