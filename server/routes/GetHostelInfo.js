const express = require('express');
const router = express.Router();

const hostels = {
  "A": {
    "location": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1501.8192035429963!2d76.36464300000002!3d30.351616!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391029f32ef719ff%3A0x27eb49cd02103a13!2sAgira%20Hall%20(Hostel%20A)!5e1!3m2!1sen!2sin!4v1732728637198!5m2!1sen!2sin",
    "wardenName": "M. Vasundhara",
    "wardenContact": "8288008174, 9115600644",
    "wardenMail": "wardena@thapar.edu",
    "caretakerName": "Day Caretaker: Mr. Sandeep Singh, Mrs. Jasvir Kaur, Mr. Deepak Batish | Night Caretaker: Mrs. Suman Kumari, Mrs. Gagandeep Kaur",
    "caretakerContact": "9115608801, 9115600633, 9115608815",
    "caretakerMail": "caretaker.a@thapar.edu",
    "messMenu": "",
    "receptionContact": "9115611510"
  },
  "B": {
    "location": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1501.8169012526419!2d76.362471!3d30.351766!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39102f005cfcf4a1%3A0x88d72e51a3688fcf!2sHostel%20B!5e1!3m2!1sen!2sin!4v1732728516068!5m2!1sen!2sin",
    "wardenName": "Dr. Mohit Agarwal",
    "wardenContact": "+91 8288088161",
    "wardenMail": "wardenb@thapar.edu",
    "caretakerName": "Mr. Hardeep Singh, Mr. Avtar Singh",
    "caretakerContact": "9115608802",
    "caretakerMail": "caretaker.b@thapar.edu",
    "messMenu": ""
  },
  "C": {
    "location": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d750.9124028699307!2d76.361079!3d30.351250999999998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39102f0065e84af3%3A0xa39b0e0b489151ae!2sPrithvi%20Hall(Hostel%20C)!5e1!3m2!1sen!2sin!4v1732728611408!5m2!1sen!2sin",
    "wardenName": "Dr. Hari Shankar",
    "wardenContact": "+91 7977389955",
    "wardenMail": "wardenc@thapar.edu",
    "caretakerName": "Mr. Gurmeet Singh",
    "caretakerContact": "9115608803",
    "caretakerMail": "caretaker.c@thapar.edu",
    "messMenu": ""
  },
  "D": {
    "location": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1501.8210146708414!2d76.360955!3d30.351498000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39102f0001b1f7d3%3A0x45da9e723272794b!2sHostel%20D(Neeram%20Hall)!5e1!3m2!1sen!2sin!4v1732728580394!5m2!1sen!2sin",
    "wardenName": "Dr. Rajendra Kumar Godara",
    "wardenContact": "9115600146, 9456338299",
    "wardenMail": "wardend@thapar.edu",
    "caretakerName": "Mr. Mandeep Daniel, Mr. Manish Kumar",
    "caretakerContact": "8860609206",
    "caretakerMail": "caretaker.d@thapar.edu",
    "messMenu": ""
  },
  "E": {
    "location": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d750.8890031692742!2d76.366785!3d30.354300000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391029000564f817%3A0x7dd296d9f6ed2bf1!2sVashuda%20Hall!5e1!3m2!1sen!2sin!4v1732728857509!5m2!1sen!2sin",
    "wardenName": "Dr. Vasundhara Reddy",
    "wardenContact": "8288008174",
    "wardenMail": "wardene@thapar.edu",
    "caretakerName": "S. Mukhtiar Singh",
    "caretakerContact": "9115608806",
    "caretakerMail": "caretaker.e@thapar.edu",
    "messMenu": ""
  },
  "G": {
    "location": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d750.8890031692742!2d76.366785!3d30.354300000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391029000564f817%3A0x7dd296d9f6ed2bf1!2sVashuda%20Hall!5e1!3m2!1sen!2sin!4v1732728857509!5m2!1sen!2sin",
    "wardenName": "Dr. Deepshikha Tiwari",
    "wardenContact": "9115608809",
    "wardenMail": "wardeng@thapar.edu",
    "caretakerName": "Mr. Parshotam Lal",
    "caretakerContact": "9115608813",
    "caretakerMail": "caretaker.g@thapar.edu",
    "messMenu": ""
  },
  "H": {
        "location": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3003.5803264668684!2d76.365987!3d30.353508000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39102900188c6a59%3A0x6ab6e9955496e839!2sHostel%20H!5e1!3m2!1sen!2sin!4v1732728661703!5m2!1sen!2sin",
        "wardenName": "Dr. Madhup Kumar Mittal",
        "wardenContact": "+91 828808179",
        "wardenMail": "wardenh@thapar.edu",
        "caretakerName": "Mr. Varinderdeep Singh",
        "caretakerContact": "9115608833",
        "caretakerMail": "caretaker.h@thapar.edu",
        "messMenu": ""
      },
  "I": {
        "location": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d750.8890031692742!2d76.366785!3d30.354300000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391029000564f817%3A0x7dd296d9f6ed2bf1!2sVashuda%20Hall!5e1!3m2!1sen!2sin!4v1732728857509!5m2!1sen!2sin",
        "wardenName": "Dr. Neetu Singh",
        "wardenContact": "+91 8288008189",
        "wardenMail": "wardeni@thapar.edu",
        "caretakerName": "Mrs. Mandeep Kaur, Mr. Satnam Singh",
        "caretakerContact": "9115608807, 9034266322",
        "caretakerMail": "caretaker.i@thapar.edu",
        "messMenu": ""
      },
  "J": {
        "location": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3003.6006796147267!2d76.36361!3d30.352845!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39102f000cdb2529%3A0x44517b614f4666ad!2sTejas%20Hall(Hostel%20J)!5e1!3m2!1sen!2sin!4v1732728695920!5m2!1sen!2sin",
        "wardenName": "Dr. Munish Kansal",
        "wardenContact": "9115608845",
        "wardenMail": "wardenj@thapar.edu",
        "caretakerName": "Mr. Raj Kumar, Mr. Jaspal Singh",
        "caretakerContact": "8559010110",
        "caretakerMail": "caretaker.j@thapar.edu",
        "messMenu": ""
      },
  "K": {
        "location": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3003.460532521896!2d76.365881!3d30.35741!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39102f0075886679%3A0x161e52e12e700994!2sHostel%20K!5e1!3m2!1sen!2sin!4v1732728756989!5m2!1sen!2sin",
        "wardenName": "Dr. Neeraj Kumar",
        "wardenContact": "7508380066",
        "wardenMail": "wardenk@thapar.edu",
        "caretakerName": "Mr. Satnam Singh",
        "caretakerContact": "8427993205",
        "caretakerMail": "caretaker.k@thapar.edu",
        "messMenu": ""
      },
  "L": {
        "location": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3003.47751082979!2d76.364535!3d30.356857!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391029004c8fc547%3A0x3321d325eef31290!2sL%20hostel!5e1!3m2!1sen!2sin!4v1732728786911!5m2!1sen!2sin",
        "wardenName": "Dr. Bharat Garg",
        "wardenContact": "9115608834",
        "wardenMail": "wardenl@thapar.edu",
        "caretakerName": "Ms. Rajesh Kumar",
        "caretakerContact": "9115608840",
        "caretakerMail": "caretaker.l@thapar.edu",
        "messMenu": ""
      },
  "M": {
        "location": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3003.6062359849047!2d76.36009400000002!3d30.352664!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39102f005b5d4331%3A0xcc6ac8ac889e4c08!2sHostel%20M!5e1!3m2!1sen!2sin!4v1732728728088!5m2!1sen!2sin",
        "wardenName": "Dr. Rahul Upadhaya",
        "wardenContact": "+91 8288008189",
        "wardenMail": "wardenm@thapar.edu",
        "caretakerName": "Mr. Satgur Singh, Mr. Arun Mattu,Mr. Maninderpal Singh",
        "caretakerContact": "7889523067",
        "caretakerMail": "caretaker.m@thapar.edu",
        "messMenu": ""
      },
  "N": {
        "location": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d750.8871688621301!2d76.3669!3d30.354539!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391029001bbfa90d%3A0xe242ba008c6f5b1c!2sHostel%20N!5e1!3m2!1sen!2sin!4v1732728896753!5m2!1sen!2sin",
        "wardenName": "Dr. Nidhi Kalra",
        "wardenContact": "+91 7719619800",
        "wardenMail": "wardenn@thapar.edu",
        "caretakerName": "Mr. Kuldeep Singh",
        "caretakerContact": "9115608810",
        "caretakerMail": "caretaker.n@thapar.edu",
        "messMenu": ""
      },
      "O": {
          "location": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1501.8235164725575!2d76.362177!3d30.351335!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39102f00034dae5d%3A0x1f762a6d93ddbbfb!2sHostel%20O!5e1!3m2!1sen!2sin!4v1732728549543!5m2!1sen!2sin",
          "wardenName": "Dr. Anil Arora",
          "wardenContact": "+91 9056080375",
          "wardenMail": "warden.o@thapar.edu",
          "caretakerName": "Mr. Navjot Sharma, Mr. Jaspreet Singh",
          "caretakerContact": "9056080375",
          "caretakerMail": "caretaker.o@thapar.edu",
          "messMenu": "https://lh3.googleusercontent.com/pw/AP1GczMYU0xbkkP0ovaInEPUllUbMepWhsO48UbX_rJChE7jFWdEPchYxESDBIGnTyNaqw_ssji9gzShMnIDF0of3ACsIFfhFbNpPbQ9MlghM7D2SXRLX4LvHrn7HBWpunupZ1prGyzFrMRvH4uPmI_vuZE=w659-h878-s-no-gm"
      },
      "Q": {
          "location": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d750.9075987755764!2d76.367555!3d30.351876999999998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391029005ea81c7b%3A0x80eafaeac369d0e1!2sHostel%20Q!5e1!3m2!1sen!2sin!4v1732728958258!5m2!1sen!2sin",
          "wardenName": "Dr. Anju Bala",
          "wardenContact": "+91 828808175",
          "wardenMail": "wardenq@thapar.edu",
          "caretakerName": "Mr. Amarinder Singh, Mrs. Amandeep Rani",
          "caretakerContact": "9815557057",
          "caretakerMail": "caretaker.q@thapar.edu",
          "messMenu": ""
},
"PG": {
          "location": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d750.9075987755764!2d76.367555!3d30.351876999999998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391029005ea81c7b%3A0x80eafaeac369d0e1!2sHostel%20Q!5e1!3m2!1sen!2sin!4v1732728958258!5m2!1sen!2sin",
          "wardenName": "Dr. Rinkle Aggarwal",
          "wardenContact": "+91 6280495076",
          "wardenMail": "wardenq@thapar.edu",
          "caretakerName": "Mr. Akash Sharma",
          "caretakerContact": "6280495076",
          "caretakerMail": "caretaker.PG@thapar.edu",
          "messMenu": ""
}

}


router.post("/", async (req, res) =>{
  // res.send("Hello World");
  console.log("Someone on Hostel info page!!");
  const hostelName = req.body.hostel;
  console.log(hostelName);
  const hostel = hostels[hostelName];
  res.json(hostel);
});

module.exports = router;