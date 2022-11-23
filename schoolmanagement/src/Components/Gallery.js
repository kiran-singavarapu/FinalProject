import school5 from './school5.jpg'
import school1 from './school1.jpg'
import school2 from './school2.jpg'
import school3 from './school3.jpg'
import school4 from './school4.jpg'
import school6 from './school6.jfif'
import school7 from './school7.jpg'
import school8 from './school8.jpg'
import school9 from './school9.jfif'
import Loginnavbar from './Loginnavbar'

function Gallery(){
return(
    <div>
      <Loginnavbar/> 
    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={school1} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">SCHOOL LIBRARY</h5>
       
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={school2} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">PROJECT TEAM</h5>
        
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={school3} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">CLASS MATES</h5>
       
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={school4} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">FUN TEAM</h5>
       
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={school5} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">AFTER CARONA BACK TO SCHOOL</h5>
       
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={school6} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">SCHOOL IMAGE</h5>
       
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={school7} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">WHILE READING</h5>
       
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={school8} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">ON SCHOOL UNIFORM</h5>
       
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={school9} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">PLAY GROUND</h5>
       
      </div>
    </div>
  </div>
</div>
</div>

)
}
export default Gallery;