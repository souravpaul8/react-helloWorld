import "./series.css";


const series = ({ series }) => {
  return (
    <div>
      <div className="row mt-2">
        <h3 className="col-md-12">{series.name}</h3>
      </div>
      <div className="row">
        <h5 className="col-md-12">{series.network}</h5>
      </div>
      <div className="row">
        <div className="col-md-7">
          <img src={`/images/${series.photo}.PNG`} className = "photo" alt="series" />
        </div>
        <div className="col-md-5">
          <p className="year">{series.year}</p>
          <p>{series.description}</p>

        </div>
      </div>
    </div>
  );
};

export default series;
