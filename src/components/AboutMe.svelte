<div class="wrapper">
  <div class="content">
    <h1 class="pink-gradient-text">about me</h1>
    <p>
      Hey there! I'm a voice actor looking for roles in video games or anime
      dubs. I have a deep bass-heavy voice and am able to voice characters in
      both English and Mandarin Chinese.
    </p>
    <img src="./images/bocchi.png" alt="bocchi-in-trash" />
  </div>
</div>

<style>
  .wrapper {
    position: relative;
    height: 100vh;
    width: 100%;
    margin: 0px;
    padding: 0px;
  }
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
  }
  h1 {
    font-size: 60px;
    margin: 0px;
  }
  p {
    font-size: 18px;
  }
  img {
    margin-top: 20px;
    width: 160px;
  }
  @media only screen and (max-width: 1200px) {
    .content {
      padding: 30px;
      width: calc(100% - 60px);
    }
    img {
      width: 100%;
      max-width: 180px;
      margin: 0px;
    }
  }
</style>
