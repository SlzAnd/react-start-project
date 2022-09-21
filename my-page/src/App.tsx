
import './App.css';

const user = {
  firstname: 'Andrii',
  lastname: 'Seleznov',
  contacts: {
    telegram: '@SeleznovAndrii',
    github: 'SlzAnd',
    email : 'seleznov.andriy@gmail.com',
    linkedin: 'https://www.linkedin.com/in/andrii-seleznov-32142721a/'
  },
  skills: ["Django", "DRF", "FastAPI", "PostgreSQL", "HTML", "CSS",
   "Basic knowledge JS", "Git/GitHub", "Postman", "English B1"]
}

const skillsItems = user.skills.map((skill) =>
    <li>{skill}</li>
);

const App = () => (
  <div className="App">
      <h1 className='name'>{user.firstname} {user.lastname}</h1>
      <h3 className='head3'>Contacts:</h3>
      <ul className="list">
        <li>Email : {user.contacts.email}</li>
        <li>Linkedin : {user.contacts.linkedin}</li>
        <li>GitHub : {user.contacts.github}</li>
        <li>Telegram : {user.contacts.telegram}</li>
      </ul>
      <h3 className='head3'>Skills</h3>
      <ul className='list'>{skillsItems}</ul>
  </div>
  );


export default App;
