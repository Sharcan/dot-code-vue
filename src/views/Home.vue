<template>
    <HomeLayout>
      <template #content>
        <div class="title-part">
          <div class="title-container">
            <h1 class="main-title geminis">Welcome<br>on board !</h1>
            <div class="buttons">
              <div class="btn-1">
                <SpaceButton text="Jouer en ligne" />
              </div>
              <div class="btn-2">
                <SpaceButton text="Créer une partie privée" />
              </div>
            </div>
          </div>
          <div class="bg-astronaute"></div>
        </div>

        <div class="text-part">
          <div class="text-container">
            <h2 class="geminis">Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magnam eum. Maiores, nesciunt culpa quae odit fugit repellendus, iure optio repudiandae voluptates tempore in repellat eum perspiciatis ea, minima quam enim qui impedit nostrum veritatis reiciendis suscipit inventore? Numquam accusantium, corrupti odio possimus iure molestiae autem quasi facere maiores consectetur doloribus praesentium, rerum quas modi! Labore dolorem asperiores rerum et molestias nobis eos? Totam, perspiciatis quo quibusdam illo qui iste doloremque ratione blanditiis suscipit beatae ab corrupti eaque nesciunt perferendis. Magnam est praesentium architecto aliquam voluptatum vero nihil nesciunt in maxime eligendi, unde rerum nulla dolorem eveniet sequi ea suscipit?</p>
          </div>
          <div class="bg-planet-red"></div>
        </div>

        <div class="text-part text-part-right">
          <div class="text-container text-right">
            <h2 class="geminis">Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magnam eum. Maiores, nesciunt culpa quae odit fugit repellendus, iure optio repudiandae voluptates tempore in repellat eum perspiciatis ea, minima quam enim qui impedit nostrum veritatis reiciendis suscipit inventore? Numquam accusantium, corrupti odio possimus iure molestiae autem quasi facere maiores consectetur doloribus praesentium, rerum quas modi! Labore dolorem asperiores rerum et molestias nobis eos? Totam, perspiciatis quo quibusdam illo qui iste doloremque ratione blanditiis suscipit beatae ab corrupti eaque nesciunt perferendis. Magnam est praesentium architecto aliquam voluptatum vero nihil nesciunt in maxime eligendi, unde rerum nulla dolorem eveniet sequi ea suscipit?</p>
          </div>
          <div class="bg-planet-earth"></div>
        </div>

        <div class="text-part">
          <div class="text-container">
            <h2 class="geminis">Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magnam eum. Maiores, nesciunt culpa quae odit fugit repellendus, iure optio repudiandae voluptates tempore in repellat eum perspiciatis ea, minima quam enim qui impedit nostrum veritatis reiciendis suscipit inventore? Numquam accusantium, corrupti odio possimus iure molestiae autem quasi facere maiores consectetur doloribus praesentium, rerum quas modi! Labore dolorem asperiores rerum et molestias nobis eos? Totam, perspiciatis quo quibusdam illo qui iste doloremque ratione blanditiis suscipit beatae ab corrupti eaque nesciunt perferendis. Magnam est praesentium architecto aliquam voluptatum vero nihil nesciunt in maxime eligendi, unde rerum nulla dolorem eveniet sequi ea suscipit?</p>
          </div>
          <div class="bg-planet-egg"></div>
        </div>

        <div class="button-part">
          <img src="@/assets/images/splash.png" alt="Splash" class="splash">
          <img src="@/assets/images/diamond.png" alt="Diamond" class="diamond">
          <div class="button-text">
            <h3 class="geminis button-title">Prêt à rejoindre l'aventure ?</h3>
            <h4 class="geminis button-title">L'espace a besoin de toi !</h4>
            <SpaceButton text="Se créer un compte" class="bottom-btn" />
          </div>
        </div>

        <div class="footer">
          <img src="@/assets/images/dotcode.png" alt="Dotcode" class="footer-img">
          <div class="geminis footer-txt-1">Made with love by l'équipe 12</div>
          <div class="geminis footer-txt-2">2021, Dotcode</div>
        </div>

      </template>
    </HomeLayout>
</template>

<script>
  import HomeLayout from '@/layouts/HomeLayout'
  import SpaceButton from '@/components/SpaceButton'

  export default {
    name: 'Home',
    components: {
      HomeLayout,
      SpaceButton
    }
  }
</script>

<style>
  /* Title part */
  .title-part {
    position: relative;
    height: 88vh;
  }
  .bg-astronaute {
    position: absolute;
    top: 60px;
    height: 95%;
    width: 85%;
    background: url('~@/assets/images/bg-astronaute-2.png');
    background-size: contain;
    background-repeat: no-repeat;
    z-index: -1;
  }
  .title-container {
    height: 45%;
    width: 48%;
    float: right;
    margin-top: 3.5rem;
  }
  .main-title {
    font-size: 7rem;
    text-shadow: #30B5FF 1px 0 50px;
    margin-bottom: 20px;
  }
  .buttons {
    width: 95%;
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
  }
  .btn-1, .btn-2 {
    width: 48%;
  }

  /* Text parts */
  .text-part {
    position: relative;
    height: 60vh;
    display: flex;
    align-items: center;
    margin-top: -50px;
  }
  .text-part-right {
    justify-content: end;
  }
  .text-container {
    width: 50%;
    margin-top: 25px;
  }
  .text-container h2 {
    font-size: 2.2rem;
    margin-bottom: 15px;
  }
  .text-container p {
    margin-top: 0;
    font-size: 0.9rem;
    color: rgb(212, 212, 212);
  }
  .bg-planet-red {
    position: absolute;
    top: 60px;
    right: 0;
    height: 95%;
    width: 45%;
    background: url('~@/assets/images/bg-planet-red.png');
    background-size: contain;
    background-repeat: no-repeat;
    z-index: -1;
  }
  .bg-planet-earth {
    position: absolute;
    top: 60px;
    left: 0;
    height: 95%;
    width: 45%;
    background: url('~@/assets/images/bg-planet-earth.png');
    background-size: contain;
    background-repeat: no-repeat;
    z-index: -1;
  }
  .bg-planet-egg {
    position: absolute;
    top: 60px;
    right: 0;
    height: 95%;
    width: 45%;
    background: url('~@/assets/images/bg-planet-egg.png');
    background-size: contain;
    background-repeat: no-repeat;
    z-index: -1;
  }

  .button-part {
    height: 33vh;
    width: 100%;
    margin-top: 150px;
    background-color: #fff;
    border-radius: 150px;
    position: relative;
    z-index: -1;
  }
  .splash {
    width: 200px;
    position: absolute;
    top: -15px;
    left: 0;
  }
  .diamond {
    width: 250px;
    position: absolute;
    bottom: -100px;
    right: -30px;
  }
  .button-text {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .button-title {
    color: #090B31;
  }
  .button-text h3 {
    font-size: 3.3rem;
    margin-bottom: 0;
  }
  .button-text h4 {
    font-size: 2rem;
    margin-top: 10px;
    margin-bottom: 30px;
  }
  .bottom-btn {
    width: 30%;
  }

  .footer {
    width: 100%;
    text-align: center;
  }
  .footer-img {
    margin-top: -15px;
  }
  .footer-txt-1 {
    margin-top: 20px;
  }

</style>
