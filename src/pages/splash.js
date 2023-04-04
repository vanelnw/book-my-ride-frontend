import SignupButton from './signup';

const Splash = () => (
  <div className="container-img">
    <div className="d-flex aligns-items-center justify-content-center h-100 d-inline-block">
      <div className="align-self-center ms-3">
        <h1 className="title text-center">Rent a Car</h1>
        <div className="d-flex justify-content-center">
          <div className="mx-2" />
          <div>
            <SignupButton />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Splash;
