import Link from 'next/link';
import {FaGithub,FaLinkedinIn,FaTwitter} from 'react-icons/fa';

const socials=[
    {icon:<FaGithub />, path:'https://github.com/sainsg333'},
    {icon:<FaLinkedinIn  />, path:'https://www.linkedin.com/in/nagireddy-sai-gowtham-9b9904245/'},
    {icon:<FaTwitter  />, path:'https://x.com/sainsg369?t=eiDnCCHdRJ2DZca539sYbw&s=09'},
  
];

const Social = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>{socials.map((item,index)=>{
        return (
            <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
            </Link>
        )
    })}</div>
  )
}

export default Social