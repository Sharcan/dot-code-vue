<template>
    <PresentationLayout>
      <template #content>
        <div class="part-1">
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
      </template>
    </PresentationLayout>
</template>

<script>
  import PresentationLayout from '@/layouts/PresentationLayout'
  import SpaceButton from '@/components/SpaceButton'

  export default {
    name: 'Home',
    components: {
      PresentationLayout,
      SpaceButton
    }
  }
</script>

<style>
  /* Part 1 */
  .part-1 {
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

</style>
