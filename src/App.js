import './App.css';
import gridIcon from './grid.svg'
import coursesIcon from './journals.svg'
import materialsIcon from './stickies.svg'
import personIcon from './person-check.svg'
import settingsIcon from './gear.svg'
import photo from './photo.jpg'
import menuVertical from './menu-vertical.svg'
import android from './android.svg'
import apple from './apple.svg'

function App() {
  return (
    <>
    <div className="sidebar d-flex flex-column p-3">
      <p className='logo d-flex align-self-center mt-4 mb-5 fs-5'>Effective team</p>
      <ul className=' nav nav-pills flex-column mb-auto'>
        <li className='nav-item'>
          <a href="#" className='menu nav-link active'>
            <img src={gridIcon} alt="Team Icon" /> Team</a></li>
        <li className='nav-item'>
          <a href="#" className='menu nav-link'>
            <img src={coursesIcon} alt="Corses Icon" /> Courses</a></li>
        <li className='nav-item'>
          <a href="#" className='menu nav-link'>
            <img src={materialsIcon} alt="Materials Icon" /> Materials</a></li>
        <li className='nav-item'>
          <a href="#" class="menu nav-link">
            <img src={personIcon} alt="Attendance Icon" /> Attendance</a></li>
        <li className='nav-item'>
          <a href="#" className='menu nav-link'>
            <img src={settingsIcon} alt="Attendance Icon" /> Settings</a></li>
      </ul>
    </div>

    <div className='bg-light d-flex justify-content-end p-3'>
      <div className='me-5'>
        <button className='btn me-3'></button>
        <button className='btn'></button>
      </div>
      <div className='d-flex me-5'>
        <div className='d-flex'>
          <img className='photo rounded-circle' src={photo} alt="photo" />
        </div>
        <div className='d-flex flex-column ms-2'>
          <p className='name p-0 m-0'>Mia V</p>
          <p className='status p-0 m-0'>Student</p>
        </div>
        <a href="#" className='menu-vertical'><img className='logoMenuVertical' src={menuVertical} alt="Menu" /></a>
      </div>
    </div>



    <div className='teams'>
      <div className='headers'>
        <h4 className='fw-bold'>Teams</h4>
        <a href="#" className='customize'>Customize</a>
      </div>
    <div className='container-teams'>
      <div className='teamOne'>
        <div className='team'>
          <img className='teamLogo' src={android} alt="Team One" />
          <h5 className='fw-bold'>Команда 1</h5>
        </div>
        <p className='score'>15</p>
      </div>
<hr></hr>
    <div className='teamTwo'>
      <div className='team'>
        <img className='teamLogo' src={apple} alt="Team Two" />
        <h5 className='fw-bold'>Команда 2</h5>
      </div>
        <p className='score'>10</p>
      </div>
<hr></hr>
  <div className='addTeam'>
    <button className='addTeamPlus fw-bold'>+</button>
    <button className='addTeamText fw-bold'>Добавить команду</button>
  </div>
</div>
    </div>
    </>
  );
}

export default App;
