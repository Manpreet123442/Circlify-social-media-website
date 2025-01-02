import './home.css';
import Stories from '../../stories/Stories';
import Share from '../../share/Share';
import Posts from '../../posts/Posts';

function Home() {
    return (
        <div className='home'>
            <Stories/>
            <Share/>
            <Posts/>
        </div>
    );
}

export default Home;