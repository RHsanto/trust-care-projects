import React from 'react';
import news1 from '../../images/news-1.jpg'
import news2 from '../../images/news-2.jpg'
import news3 from '../../images/news-3.jpg'
import news4 from '../../images/news-4.jpg'

import './LatestNews.css'
const LatestNews = () => {
  return (
    // here latest news section
    <div className='container'>
      <h1 className='fw-bold my-5'> <span className='border-3 border-primary border-bottom p-3'>Latest news </span> </h1>
      <div className="row my-5  ">
     <div className="col-8 mx-auto">
     <div className="card mb-3" >
  <div className="row  g-4 d-flex justify-content-center align-items-center text-start">
    <div className="col-md-5 ">
      <img src={news1} className="img-fluid rounded-start news-img" alt="..."/>
    </div>
    <div className="col-md-7">
      <div className="card-body ">
        <h2 className="card-title">Your Medical Records are Safe</h2>
        <p className="card-text">Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business applications through revolutionary catalysts for change.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        <button className=' btn btn-outline-primary border-2'>Read more</button>
      </div>
    </div>
  </div>
</div>
     </div>
     <div className="col-8 mx-auto">
     <div className="card mb-3" >
  <div className="row  g-4 d-flex justify-content-center align-items-center text-start">
    <div className="col-md-5 ">
      <img src={news2} className="img-fluid rounded-start news-img" alt="..."/>
    </div>
    <div className="col-md-7">
      <div className="card-body ">
        <h2 className="card-title">Are drugs the best solution?</h2>
        <p className="card-text">Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled applications.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        <button className=' btn btn-outline-primary border-2'>Read more</button>
      </div>
    </div>
  </div>
</div>
     </div>
     <div className="col-8 mx-auto">
     <div className="card mb-3" >
  <div className="row  g-4 d-flex justify-content-center align-items-center text-start">
    <div className="col-md-5 ">
      <img src={news3} className="img-fluid rounded-start news-img" alt="..."/>
    </div>
    <div className="col-md-7">
      <div className="card-body ">
        <h2 className="card-title">Negative stain stories add to heart health risk</h2>
        <p className="card-text">Credibly intermediate backend ideas for cross-platform models. Continually intermediated integrated processes through technically sound intellectual capital.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        <button className=' btn btn-outline-primary border-2'>Read more</button>
      </div>
    </div>
  </div>
</div>
     </div>
     <div className="col-8 mx-auto">
     <div className="card mb-3" >
  <div className="row  g-4 d-flex justify-content-center align-items-center text-start">
    <div className="col-md-5 ">
      <img src={news4} className="img-fluid rounded-start news-img" alt="..."/>
    </div>
    <div className="col-md-7">
      <div className="card-body ">
        <h2 className="card-title">Study finds link between very early stages of brain and heart disease</h2>
        <p className="card-text">Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        <button className=' btn btn-outline-primary border-2'>Read more</button>
      </div>
    </div>
  </div>
</div>
     </div>

     
      </div>
    </div>
  );
};

export default LatestNews;