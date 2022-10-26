
import { useLoaderData } from 'react-router-dom';
import SingleCources from './SingleCources';

const CoursesDetails = () => {
    const detailsData =  useLoaderData([])
    console.log(detailsData);
    return (
        <div>
            {
                detailsData.map(details=><SingleCources 
                key={details._id}
                details={details}
                />)
            }
        </div>
    );
};

export default CoursesDetails;