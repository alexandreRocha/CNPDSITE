<template>
         <iframe id="framemaps" src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d4794.142966769725!2d-23.518058034548883!3d14.915076823289706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d14.9140935!2d-23.515552099999997!4m3!3m2!1d14.9141017!2d-23.5155522!5e1!3m2!1spt-PT!2spt!4v1446735881594"
                        frameborder="0" allowfullscreen>
         </iframe> 
</template>

<script>
export default {
    name: 'ContatoMaps'
}
</script>

<style scoped>
 
/*--------------------------------------------------------------
# Contact
--------------------------------------------------------------*/
#framemaps{

border-radius: 1%;
width: 100%; 
height: 400px;
}
.section-title {
  text-align: center;
  padding-bottom: 30px;
}
.section-title h2 {
  font-size: 13px;
  letter-spacing: 1px;
  font-weight: 700;
  padding: 8px 20px;
  line-height: 1;
  margin: 0;
  background: #BD9A13;
  color: #000;
  display: inline-block;
  text-transform: uppercase;
  border-radius: 50px;
}
.section-title h3 {
  margin: 15px 0 0 0;
  font-size: 32px;
  font-weight: 700;
}
.section-title h3 span {
  color: #000;
}
.section-title p {
  margin: 15px auto 0 auto;
  font-weight: 600;
}
@media (min-width: 1024px) {
  .section-title p {
    width: 50%;
  }
}
.contact .info {
  width: 100%;
  background: #fff;
}
.contact .info i {
  font-size: 20px;
  color: #030B1C;
  float: left;
  width: 44px;
  height: 44px;
  background: #BD9A13;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
}
.contact .info h4 {
  padding: 0 0 0 60px;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #493c3e;
}
.contact .info p {
  padding: 0 0 0 60px;
  margin-bottom: 0;
  font-size: 14px;
  color: #000;
}
.contact .info .email, .contact .info .phone {
  margin-top: 40px;
}
.contact .info .email:hover i, .contact .info .address:hover i, .contact .info .phone:hover i {
  background: #030B1C;
  color: #fff;
}
.contact .php-email-form {
  width: 100%;
  background: #fff;
}
.contact .php-email-form .form-group {
  padding-bottom: 8px;
}
.contact .php-email-form .error-message {
  display: none;
  color: #fff;
  background: #ed3c0d;
  text-align: left;
  padding: 15px;
  font-weight: 600;
}
.contact .php-email-form .error-message br + br {
  margin-top: 25px;
}
.contact .php-email-form .sent-message {
  display: none;
  color: #fff;
  background: #18d26e;
  text-align: center;
  padding: 15px;
  font-weight: 600;
}
.contact .php-email-form .loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
}
.contact .php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #18d26e;
  border-top-color: #eee;
  -webkit-animation: animate-loading 1s linear infinite;
  animation: animate-loading 1s linear infinite;
}
.contact .php-email-form input, .contact .php-email-form textarea {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
}
.contact .php-email-form input:focus, .contact .php-email-form textarea:focus {
  border-color: #030B1C;
}
.contact .php-email-form input {
  height: 44px;
}
.contact .php-email-form textarea {
  padding: 10px 12px;
}
.contact .php-email-form button[type=submit] {
  background: #0C214C;
  border: 0;
  padding: 10px 28px;
  color: #fff;
  transition: 0.4s;
  border-radius: 50px;
}
.contact .php-email-form button[type=submit]:hover {
  background: #0C214C;
}
@-webkit-keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

 
</style>
