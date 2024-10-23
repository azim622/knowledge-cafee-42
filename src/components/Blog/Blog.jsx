import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog , handleAddToBookMarks , handleMarkAsRead}) => {
    const {title , cover ,author , author_img ,reading_time,posted_date, hashtags}=blog;
    // console.log(blog)
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`Cover Picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex gap-4'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h2 className='text-2xl font-bold'>{author}</h2>
                        <span className=''>{posted_date}</span>
                    </div>
                    
                </div>
                <div>
                    <span>{reading_time} read</span>
                    <button onClick={() => handleAddToBookMarks(blog)}
                     className='ml-2 text-2xl text-red-500'>
                     <FaBookmark></FaBookmark>
                     </button>
                </div>
            </div>
            <h2 className="text-4xl mb-6">{title}</h2>
            <p>
                {
                    hashtags.map((hash , idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={() =>handleMarkAsRead(reading_time)} className='mt-4 text-purple-600 font-bold underline'>Mark As Read</button>
            
        </div>
    );
};
Blog.propTypes ={
    blog:PropTypes.object.isRequired,
    handleAddToBookMarks:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blog;