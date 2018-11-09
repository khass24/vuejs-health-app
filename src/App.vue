<template>
  <div id="app">
    
    <header class="header">
          <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container"><a href="./" class="navbar-brand"><h3>Squared Health</h3></a>
              <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right">Menu<i class="fa fa-bars ml-2"></i></button>
              <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                      <!-- Link-->
                      <li class="nav-item"> <a href="#/gratitude" class="nav-link">Start Daily Report</a></li>
                      <li class="nav-item"> <a href="#/signup" class="nav-link">Signup</a></li>
                      <li class="nav-item"> <a href="/" class="nav-link">Login</a></li>
                      <li class="nav-item dropdown"><a id="pages" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                      class="nav-link dropdown-toggle">Menu</a>

                        <div class="dropdown-menu">
                          <a href="#/gratitude_index" class="dropdown-item">Gratitudes</a>
                          <a href="#/report" class="dropdown-item">Your Stats</a>
                          <a href="#/logout" class="dropdown-item">Logout</a>
                        </div>
                      </li>
                      </ul>
                </div>
            </div>
          </nav>
        </header>
        
    <router-view/>
    <footer class="main-footer fixed-bottom">
     
          <div class="row">
            <div class="col-lg-6 text-center text-lg-left">
              <p class="copyrights-text mb-3 mb-lg-0">&copy; All rights reserved. Appton.co. Design by <a href="https://bootstrapious.com/landing-pages" class="external footer-link">Bootstrapious </a></p>
              <!-- Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)-->
              
            </div>
            <div class="col-lg-6 text-center text-lg-right">
              <ul class="list-inline social mb-0">
                <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook"></i></a><a href="#" class="social-link"><i class="fa fa-twitter"></i></a><a href="#" class="social-link"><i class="fa fa-youtube-play"></i></a><a href="#" class="social-link"><i class="fa fa-vimeo"></i></a><a href="#" class="social-link"><i class="fa fa-pinterest"></i></a></li>
              </ul>
            </div>
          </div>
    </footer>
  </div>
</template>

<style>
</style>