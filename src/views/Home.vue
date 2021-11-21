<template>
    <PresentationLayout>
      <template #content>
        <div class="part-1">
          <div class="title-container">
            <img class="title" src="@/assets/images/title.svg" alt="Welcome on board !">
            <div class="buttons">
              <div class="btn-1">
                <SpaceButton text="Jouer en ligne" />
              </div>
              <div class="btn-2">
                <SpaceButton text="Jouer en ligne" />
              </div>
            </div>
          </div>
          <div class="bg-astronaute"></div>
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
  .part-1 {
    position: relative;
    height: 88vh;
  }
  .bg-astronaute {
    position: absolute;
    top: 60px;
    height: 0;
    height: 95%;
    width: 85%;
    background: url('~@/assets/images/bg-astronaute.png');
    background-size: contain;
    background-repeat: no-repeat;
    z-index: -1;
  }
  .title-container {
    height: 45%;
    width: 55%;
    float: right;
  }
  .title {
    width: 110%;
  }
  .buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .btn-1, .btn-2 {
    width: 49%;
  }
</style>
