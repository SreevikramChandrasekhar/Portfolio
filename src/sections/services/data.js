import {RiReactjsLine} from 'react-icons/ri'
import {FaServer} from 'react-icons/fa'
import {GiArtificialIntelligence} from 'react-icons/gi'
import {AiFillCloud} from 'react-icons/ai'


const data = [
    {
        id: 1, icon: <GiArtificialIntelligence/>, title: 'Machine Learning' , desc: "Machine Learning enables me to automate tasks, provide data-driven insights and enable predictive analytics across a wide range of fields from healthcare to finance."
    },
    {
        id: 2, icon: <RiReactjsLine/>, title: 'Frontend Development', desc: "Front-end development allows me to create interactive and visually appealing websites and applications, offering a creative outlet for design and user experience enthusiasts while bridging the gap between technology and user engagement"
    },
    {
        id: 3, icon: <FaServer/>, title: 'Backend Development', desc: "Back-end development offers me the opportunity to build behind-the-scenes infrastructure of websites and applications, solving complex technical challenges and ensuring the functionality and data management critical for user experiences."
    },
    {
        id: 4, icon: <AiFillCloud/>, title: 'Cloud Development', desc: "Cloud development allows me to leverage scalable and cost-effective cloud services, facilitating the deployment and management of applications globally."
    }
]


export default data