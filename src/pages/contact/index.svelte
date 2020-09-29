<script>
  const getTime = () => {
    return "8 to 8";
  };
</script>

<style type="text/scss">
  @import "../../scss/config";
  @import "../../scss/utils.scss";

  .pg {
    @extend %page;
    h1 {
      @extend %header1;
    }
    h2 {
      @extend %header2;
    }
  }
</style>

<section class="pg contact-pg">
  <h1>Let's get in touch!</h1>
  <h2>I am available from {getTime()}, your time</h2>
  <!-- 
      Possibilities

      create my own typeform
      
      use form.io 

      social media links
       -->
</section>
