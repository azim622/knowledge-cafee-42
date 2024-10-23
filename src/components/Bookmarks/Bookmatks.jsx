import PropTypes from 'prop-types';
import Bookmark from '../BookMark/Bookmark';
const Bookmatks = ({bookmarks, readingTime}) => {
    return (
        <div className="md: w-1/3 bg-gray-300 ml-4 mt-2 p-4">
            <div>
                <h2 className='text-4xl'>Reading Time : {readingTime}</h2>
            </div>
            <h2 className="text-3xl text-center">BookMarked Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmatks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number

}
export default Bookmatks;