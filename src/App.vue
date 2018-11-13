<template>
  <div id="app">
    
    <header class="header">
          <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container"><a href="./" class="navbar-brand"><h2>Squared Health</h2></a>
              <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right">Menu<i class="fa fa-bars ml-2"></i></button>
              <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                      <!-- Link-->
                      <li class="nav-item"><h5><a href="#/gratitude" class="nav-link">Start Daily Report</a></h5></li>
                      <li class="nav-item"><h5><a href="#/signup" class="nav-link">Signup</a></h5></li>
                      <li class="nav-item"><h5><a href="#/login" class="nav-link">Login</a></h5></li>
                      <li class="nav-item dropdown"><h5><a id="pages" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle">Menu</a>
                        <div class="dropdown-menu">
                          <a href="#/gratitude_index" class="dropdown-item"><h5>Gratitudes</h5></a>
                          <a href="#/report" class="dropdown-item"><h5>Your Stats</h5></a>
                          <a href="#/logout" class="dropdown-item"><h5>Logout</h5></a>
                        </div></h5>
                    </li>
                  </ul>
                </div>
            </div>
          </nav>
        </header>

    <router-view/>

    <footer class="main-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-9 mb-5 mb-lg-0">
            <div class="footer-logo"><h2>Squared Health</h2></div>
          </div>
    
          <div class="col-lg-3 mb-5 mb-lg-0">
            <h5 class="footer-heading">Links</h5>
            <ul class="list-unstyled">
              <li> <a href="https://www.linkedin.com/in/kyle-hassett-/" class="footer-link">LinkedIn</a></li>
              <li> <a href="https://github.com/kyle-hassett" class="footer-link">Github</a></li>
              <li>kylehassett72@gmail.com</li>
            </ul>
          </div>
          
        </div>
      </div>
      <div class="copyrights">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 text-center text-lg-left">
              <p class="copyrights-text mb-3 mb-lg-0">&copy; All rights reserved. Appton.co. Design by <a href="https://bootstrapious.com/landing-pages" class="external footer-link">Bootstrapious </a></p>
              <!-- Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
  .header {
  font-family: "Aref Ruqaa";
  }

  body {
    background-image: url("assets/extra_clean_paper.png");
  }
</style>