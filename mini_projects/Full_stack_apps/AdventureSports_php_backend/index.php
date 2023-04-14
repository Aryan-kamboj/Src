<?php
$server = "localhost";

$username = "root";

$password = "";

// $dbname = "SUMMIT_SEEKERS";
$con = mysqli_connect($server, $username, $password);

if(!$con){
    die("connection to this database failed due to".mysqli_connect_error());
}
$name = $_POST['name'];
$service = $_POST['service'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$sql="INSERT INTO `SUMMIT_SEEKERS`.`USER_INPUT` (`service`, `phone_no`, `email`, `name`) VALUES ('$service', '$phone', '$email', '$name')";
if($con->query($sql) == true){
    //
}
else{
    echo "ERROR: $sql <br> $con->error";
}
// Close the database connection
$con->close();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Summit Seekers</title>
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <!-- jQuery library -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <!-- Popper JS -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <!-- Bootstrap JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="style.css">
  <style>
      .form{
    width: 40vw;
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 1.5rem;
}
  .form_wrapper{
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(./images/backgroundForm.jpg) no-repeat center center fixed;
}
  </style>

</head>
<body>
    <nav class="navbar fixed-top navbar-expand-md bg-dark navbar-dark">
        <!-- Brand -->
        <a class="navbar-brand" href="#">Summit Seekers</a>
        <!-- Toggler/collapsible Button -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <!-- Navbar links -->
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#top">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#form">Get seeking</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contacts">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./services.html" id="services-btn">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./about_us.html">About</a>
          </li>
          </ul>
        </div>
      </nav>
    <div class="wrapper">
        <div id="top" class="div1">
            <img id="background" src="images/background.png" alt="background">
            <img id="foreground"src="images/foreground.png" alt="foreground">
            <h1 >ADVENTURE</h1>
        </div>
        <section class="bg-dark">
            <h2  class="secHeading">Adventure Time</h2>
            <p class="text">
                Welcome to Summit Seekers! We are thrilled to offer you an unforgettable outdoor adventure experience that will leave you exhilarated and empowered. Whether you're a seasoned thrill-seeker or a first-time adventurer, our team of experienced guides and instructors is committed to providing you with the highest level of safety and excitement.
                <br>
                <br>
                Our range of adventure activities is designed to suit all levels of experience and interests. From adrenaline-fueled white water rafting and bungee jumping, to scenic hikes and peaceful kayaking, we offer something for everyone. Our state-of-the-art equipment and facilities ensure that you have the best possible experience, while our knowledgeable and friendly staff are always on hand to offer guidance and support.
                <br>
                <br>
                At Summit Seekers, we believe that adventure sports are more than just a way to get your heart racing - they are an opportunity to challenge yourself, build confidence, and connect with nature in a way that is both exhilarating and deeply rewarding. So why wait? Book your adventure today and let us help you discover the thrill of the great outdoors!                
                <br>
            </p>
            <div class="bg bg1">
                <h2 class="desc">BIKING</h2>
            </div>
            <p class="text">
                Experience the thrill of the ride with Summit Seekers' range of biking adventures! Whether you're a seasoned cyclist or a beginner, we have a biking adventure that will challenge and inspire you. Our experienced guides will take you through some of the most breathtaking landscapes in the country, offering you an opportunity to explore nature at its finest.
                <br>
                <br>
                Choose from a variety of biking adventures, including downhill mountain biking, cross-country mountain biking, and road cycling. Our downhill mountain biking adventures take you down rugged terrain, challenging you to navigate through technical features and steep drops. For cross-country mountain biking, you'll ride through a network of trails, experiencing the beauty of the natural surroundings while testing your endurance and technical skills. And if you prefer to hit the open road, our road cycling adventures offer scenic routes that will take you through stunning landscapes and picturesque towns.
                <br>
                <br>
                At Summit Seekers, we pride ourselves on providing our customers with the highest level of safety and support. Our state-of-the-art equipment is regularly maintained and updated, ensuring that you have a safe and enjoyable ride. Our experienced guides are trained in first aid and will provide you with guidance and support throughout your adventure. We also offer a variety of tour options, so you can choose the adventure that best suits your interests and skill level.
                <br>
                <br>
                So, whether you're looking for a high-energy adventure or a scenic tour, Summit Seekers has the perfect biking adventure for you. Book your adventure today and discover the thrill of the ride!                <br>
                <br>                
            </p>
            <div class="bg bg2">
                <h2 class="desc">PARA GLIDING</h2>
            </div>
            <p class="text">
                Take to the skies with Summit Seekers' paragliding adventures! Experience the exhilaration of soaring above the ground, taking in stunning views of the natural surroundings. Our experienced paragliding instructors will guide you through every step of the process, ensuring that you have a safe and unforgettable experience.
                <br><br>
                We offer a variety of paragliding adventures, including tandem flights and training courses. Our tandem flights are perfect for those who are new to paragliding or simply want to experience the thrill of flying with an experienced instructor. During the flight, you'll be securely harnessed to your instructor, who will handle all aspects of the flight while you sit back and enjoy the ride.
                <br><br>
                For those who want to take their paragliding skills to the next level, we offer a range of training courses. Our courses are taught by experienced instructors and cover everything from basic skills to advanced techniques. We use the latest equipment and technology to ensure that you have the best possible learning experience.
                <br><br>
                At Summit Seekers, we take your safety very seriously. Our equipment is regularly maintained and updated, and our instructors are trained to the highest standards. We also provide all necessary safety equipment, including helmets and harnesses, to ensure that you have a safe and enjoyable flight.
                <br><br>
                So, if you're looking for an adventure that will take your breath away, book your paragliding adventure with Summit Seekers today!               
            </p>
            <div class="bg bg3">
                <h2 class="desc">SURFING</h2>
            </div>
            <p class="text">
                Hang ten with Summit Seekers' surfing adventures! Whether you're a beginner or an experienced surfer, we have a surfing adventure that will challenge and inspire you. Our experienced guides will take you to some of the best surf spots in the country, offering you an opportunity to catch the perfect wave.
                <br><br>
                Choose from a variety of surfing adventures, including beginner lessons, intermediate lessons, and advanced surf trips. Our beginner lessons are perfect for those who have never surfed before, or those who want to brush up on their skills. You'll learn all the basics, including how to paddle, stand up, and ride the wave. For intermediate and advanced surfers, we offer surf trips that will take you to the best surf spots in the area, allowing you to catch the biggest and best waves.
                <br><br>
                At Summit Seekers, we pride ourselves on providing our customers with the highest level of safety and support. Our state-of-the-art equipment is regularly maintained and updated, ensuring that you have a safe and enjoyable surfing experience. Our experienced guides are trained in first aid and will provide you with guidance and support throughout your adventure. We also offer a variety of tour options, so you can choose the adventure that best suits your interests and skill level.
                <br><br>
                So, whether you're looking to catch your first wave or tackle some of the most challenging breaks, Summit Seekers has the perfect surfing adventure for you. Book your adventure today and experience the thrill of the surf!
            </p>
        </section>
            <div id="form" class="form_wrapper text-white">
                <form class="form" action="index.php" method="post" >
                    <div class="form-group">
                      <label for="adventure">Choose an Adventure:</label>
                      <select name="service" class="form-control" id="adventure" required>
                        <option selected>Biking</option>
                        <option>Paragliding</option>
                        <option>Surfing</option>
                        <option>Guided Tours</option>
                        <option>Customized Adventures</option>
                        <option>Training and Certification</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="name">Name:</label>
                      <input name="Name" type="text" class="form-control" id="name" placeholder="Enter your name" required>
                    </div>
                    <div class="form-group">
                      <label for="email">Email:</label>
                      <input name="email" type="email" class="form-control" id="email" placeholder="Enter your email" required>
                    </div>
                    <div class="form-group">
                      <label for="phone">Phone No:</label>
                      <input name="phone" type="tel" class="form-control" id="phone" placeholder="Enter your phone number" required>
                    </div>
                    <button class="btn btn-primary btn-block">Submit</button>
                </form>  
            </div>
        <section id ="contacts" class="bg-dark py-4">
            <div class="footer">
              <h2>Contact Us</h2>
              <p>Please feel free to contact us with any questions or comments you may have.</p>
              <div class="row">
                <div class="col-md-4">
                  <h4>Address</h4>
                  <p>123 Main St.</p>
                  <p>Anytown, INDIA</p>
                </div>
                <div class="col-md-4">
                  <h4>Phone</h4>
                  <p>(555) 555-1234</p>
                </div>
                <div class="col-md-4">
                  <h4>Email</h4>
                  <p>info@summitseekers.com</p>
                </div>
              </div>
            </div>
          </section>
    </div>

    <!-- <script language="php" src="index2.php"></script> -->
  </body>
</html>
