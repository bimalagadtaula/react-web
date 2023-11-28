
import './style.scss';

const PageHeader=(props)=>{
    const {headertxt, icon} = props;
    return (
        <div className='txt_wrapper'>
        <h2>{headertxt}</h2>
            <span>{icon}</span>
        </div>
      );
} 
export default PageHeader;
