import React from "react";
import './FacultyCards.css'
const electricalfacultyData = [
  {
    name: "Dr. Harikumar R",
    designation: "Associate Professor",
    subject: "Power Systems",
    qualifications: "PhD (University of Kerala) M.Tech (NIE, Mysore) B.Tech - EEE (MIT Manipal)",
    email: "harikumar@cet.ac.in",
    previous: "Introduction to Electrical & Electronics Engineering (Part 1: Electrical Engineering)",
    photo: "http://ee.cet.ac.in/images/faculty/F-HKR.jpeg",
  },
  
  {
    name: "Saina Deepthi",
    designation: "Associate Professor",
    subject: "Energy Management, Power System Operation and Control",
    qualifications: "M.Tech (Anna University, Chennai), B.Tech - EEE (University of Kerala)",
    email: "saina@cet.ac.in",
    previous: "Digital Electronics and Logic System Design, Analog Electronics",
    photo: "http://ee.cet.ac.in/images/faculty/F-SD.jpg",
  },
  {
    name: "Dr. Anu G",
    designation: "Assistant Professor",
    subject: "Power Systems",
    qualifications: "M.Tech (Calicut University), B.Tech - EEE (CUSAT)",
    email: "anugsivakumar@gmail.com",
    previous: "Analog Electronic Circuits, Introduction to Electrical and Electronics Engineering (Part 1: Electrical Engineering)",
    photo: "http://ee.cet.ac.in/images/faculty/F-AG.jpg",
  },
  {
    name: "Dr. Deepa M U",
    designation: "Assistant Professor",
    subject: "Power Electronics, Electrical Machines & Drives",
    qualifications: "PhD, M.Tech (Mahatma Gandhi University), B.Tech - EEE (University of Calicut)",
    email: "deepashibu@cet.ac.in",
    previous: "Analog Electronic Circuits, Electrical Machines, Electrical Machines Lab",
    photo: "http://ee.cet.ac.in/images/faculty/F-DMU.jpg",
  },
  {
    name: "Vijayasree G",
    designation: "Assistant Professor",
    subject: "Power Electronics, Electrical Machines",
    qualifications: "M.Tech (CSI Institute of Technology, Anna University), B.Tech - EEE (CET, University of Kerala)",
    email: "vijayasreejayachandran@gmail.com",
    previous: "Circuits and Networks",
    photo: "http://ee.cet.ac.in/images/faculty/F-VSG.jpg",
  },
  {
    name: "Shabna S S",
    designation: "Assistant Professor",
    subject: "Control Systems, Power System Engineering",
    qualifications: "M.Tech (University of Kerala), B.Tech - EEE (University of Kerala)",
    email: "shabnass@cet.ac.in",
    previous: "Electrical Machines Lab",
    photo: "http://ee.cet.ac.in/images/faculty/shabna.jpeg",
  },
  {
    name: "Sanjana Rajam A",
    designation: "Assistant Professor",
    subject: "Control Systems",
    qualifications: "M.Tech (CET), B.E - EEE (St. Xavier's Catholic College of Engineering)",
    email: "sanjana3roses@gmail.com",
    previous: "Electrical Machines Lab",
    photo: "http://ee.cet.ac.in/images/faculty/sanjana.png",
  },
  {
    name: "Renju R S",
    designation: "Assistant Professor",
    subject: "Control Systems",
    qualifications: "M.Tech (University of Calicut), B.Tech - EEE (University of Kerala)",
    email: "rsrenju35@gmail.com",
    previous: "Electrical Machines Lab",
    photo: "http://ee.cet.ac.in/images/faculty/renju.jpg",
  },
  {
    name: "Ammukutty M S",
    designation: "Assistant Professor",
    subject: "Communication Systems",
    qualifications: "M.Tech - Communication Systems, BE - ECE",
    email: "ammukutty@cet.ac.in",
    previous: "Introduction to Electrical and Electronics Engineering (Part 2: Electronics Engineering)",
    photo: "http://ece.cet.ac.in/wp-content/uploads/2022/11/Ammukutty-M-S-150x150.jpg",
  },
];

const computerfacultyData = [
  {
    name: "Dr. Deepa M U",
    designation: "Assistant Professor",
    subject: "Computer Science",
    qualifications: "",
    email: "",
    previous: "Algorithmic Thinking with Python",
    photo: "",
  },
  {
    name: "Dr. Ann Mary Joshua",
    designation: "Assistant Professor",
    subject: "Computer Science",
    qualifications: "",
    email: "",
    previous: "Algorithmic Thinking with Python",
    photo: "",
  },
  {
    name: "Prof. Divya Krishnan",
    designation: "Assistant Professor",
    subject: "Computer Science",
    qualifications: "",
    email: "",
    previous: "Foundations of Computing",
    photo: "",
  },
  {
    name: "Merlin Mon Mathew",
    designation: "Assistant Professor",
    subject: "Computer Science",
    qualifications: "",
    email: "",
    previous:
      "Algorithmic Thinking with Python Lab, Object Oriented Programming (JAVA) Lab",
    photo: "",
  },
  {
    name: "Prof. John Prakash Joseph",
    designation: "Assistant Professor",
    subject: "Computer Science",
    qualifications: "",
    email: "",
    previous:
      "Programming in C, Data Structures and Algorithms, Data Structures Lab, Computer Organization and Architecture",
    photo: "",
  },
  {
    name: "Dr. Harikumar R",
    designation: "Assistant Professor",
    subject: "Computer Science",
    qualifications: "",
    email: "",
    previous: "IT Workshop, Foundations of Computing",
    photo: "",
  },
  {
    name: "Dr. N. Mayadevi",
    designation: "Assistant Professor",
    subject: "Computer Science",
    qualifications: "",
    email: "",
    previous: "IT Workshop",
    photo: "",
  },
  {
    name: "Prof. Sreedevi G",
    designation: "Assistant Professor",
    subject: "Computer Science",
    qualifications: "",
    email: "",
    previous: "Introduction to Artificial Intelligence and Data Science",
    photo: "",
  },
  {
    name: "Prof. Zubin J B",
    designation: "Assistant Professor",
    subject: "Computer Science",
    qualifications: "",
    email: "",
    previous: "Data Structures and Algorithms, Programming in C",
    photo: "",
  },
  {
    name: "Prof. Vishal M J",
    designation: "Assistant Professor",
    subject: "Computer Science",
    qualifications: "",
    email: "",
    previous:
      "Object Oriented Programming Using Java, Object Oriented Programming (JAVA) Lab",
    photo: "",
  },
];

const mathfacultyData = [
  {
    name: "Dr. K. Asokan",
    designation: "Professor",
    subject: "Mathematics",
    qualifications: "",
    email: "",
    previous: "",
    photo: "",
  },
  {
    name: "Indu L",
    designation: "Assistant Professor",
    subject: "Mathematics",
    qualifications: "",
    email: "",
    previous: "",
    photo: "",
  },
  {
    name: "Dr. Najiya K Z",
    designation: "Assistant Professor",
    subject: "Mathematics",
    qualifications: "",
    email: "",
    previous: "",
    photo: "",
  },
];

const physicsfacultyData = [
  {
    name: "Dr. Madhu G",
    designation: "Professor",
    subject: "Physics",
    qualifications: "",
    email: "",
    previous: "",
    photo: "",
  },
  {
    name: "Dr. Neena Sugathan",
    designation: "Professor",
    subject: "Physics",
    qualifications: "",
    email: "",
    previous: "",
    photo: "",
  },
  {
    name: "Dr. Prabitha V G",
    designation: "Assistant Professor",
    subject: "Physics (Lab)",
    qualifications: "",
    email: "",
    previous: "",
    photo: "",
  },
  {
    name: "Prof. Deepthi S Nair",
    designation: "Assistant Professor",
    subject: "Physics (Lab)",
    qualifications: "",
    email: "",
    previous: "",
    photo: "",
  },
  {
    name: "Dr. Biji M S",
    designation: "Assistant Professor",
    subject: "Physics (Lab)",
    qualifications: "",
    email: "",
    previous: "",
    photo: "",
  },
];

const chemistryfacultyData = [
  {
    name: "Prof. Angeo Varghese",
    designation: "Assistant Professor",
    subject: "Chemistry",
    qualifications: "",
    email: "",
    previous: "",
    photo: "",
  },
  {
    name: "Dr. Gowri Sreedevi K C",
    designation: "Assistant Professor",
    subject: "Chemistry",
    qualifications: "",
    email: "",
    previous: "",
    photo: "",
  },
];

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function FacultyCard({ name, designation, subject, qualifications, previous, email, photo}) {
  return (
    <div className="faculty-card">
      <div className="faculty-card__avatar">
        {photo ? (
          <img src={photo} alt={name} className="faculty-card__avatar-img" />
        ) : (
          <span>{getInitials(name)}</span>
        )}
      </div>
      <p className="faculty-card__name">{name}</p>
      <p className="faculty-card__designation">{designation}</p>
      <span className="faculty-card__subject">{subject}</span>
      <p className="faculty-card__quals">{qualifications}</p>
      <p className="faculty-card__prev">{previous}</p>
      <a className="faculty-card__email" href={`mailto:${email}`}>
        {email}
      </a>
    </div>
  );
}

export default function FacultySection({ type }) {
  if (type == "e"){
    return (
    <div className="faculty-section">
      <div className="faculty-grid">
        {electricalfacultyData.map((faculty, index) => (
          <FacultyCard key={index} {...faculty} />
        ))}
      </div>
    </div>
  );
  }else if (type == "c"){
    return (
    <div className="faculty-section">
      <div className="faculty-grid">
        {computerfacultyData.map((faculty, index) => (
          <FacultyCard key={index} {...faculty} />
        ))}
      </div>
    </div>
  );
  }else if (type == "m"){
    return (
    <div className="faculty-section">
      <div className="faculty-grid">
        {mathfacultyData.map((faculty, index) => (
          <FacultyCard key={index} {...faculty} />
        ))}
      </div>
    </div>
  );
  }else if (type == "p"){
    return (
    <div className="faculty-section">
      <div className="faculty-grid">
        {physicsfacultyData.map((faculty, index) => (
          <FacultyCard key={index} {...faculty} />
        ))}
      </div>
    </div>
  );
  }else if (type == "ch"){
    return (
    <div className="faculty-section">
      <div className="faculty-grid">
        {chemistryfacultyData.map((faculty, index) => (
          <FacultyCard key={index} {...faculty} />
        ))}
      </div>
    </div>
  );
  }else{
    return "Internal Error: Error Loading Department Faculty";
  }
}
