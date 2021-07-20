import Series from "../series";

const FeaturedSeries = ({ series }) => {
  if (series)
    return (
      <div>
        <div className="row">
          <h3 className="col-md-12 text-center featuredSeries">Featured Series</h3>
        </div>
        <Series series={series} />
      </div>
    );
  return <div>No featured series at this time</div>;
};

export default FeaturedSeries;
