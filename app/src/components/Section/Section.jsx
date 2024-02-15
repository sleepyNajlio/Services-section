import SectionHeader  from '../Section-header/Section-header';
import ServiceCard  from '../Service-card/Service-card';
import TeamIcon from '../../Assets/images/icon-team-builder.svg'
import SupervisorIcon from '../../Assets/images/icon-supervisor.svg'
import KarmaIcon from '../../Assets/images/icon-karma.svg'
import CalcIcon from '../../Assets/images/icon-calculator.svg'
import './Section.style.css'

const Section = () => {
    return ( 
    <>
        <SectionHeader />
        <section className='Services-container'>
            <div className='card1'>
                <ServiceCard
                header='Supervisor' 
                subheader='Monitors activity to identify project roadblocks' 
                icon={SupervisorIcon}
                borderColor="hsl(180, 62%, 55%)"
                />
            </div>
            <div className='card2'>
                <ServiceCard
                header='Team Builder' 
                subheader='Scans our talent network to create the optimal team for your project' 
                icon={TeamIcon}
                borderColor="hsl(0, 78%, 62%)"
                />
            </div>
            <div className='card3'>
                <ServiceCard
                header='Calculator' 
                subheader='Scans our talent network to create the optimal team for your project' 
                icon={CalcIcon}
                borderColor="hsl(212, 86%, 64%)"
                />
            </div>
            <div className='card4'>
                <ServiceCard
                header='Karma' 
                subheader='Regularly evaluates our talent to ensure quality' 
                icon={KarmaIcon}
                borderColor="hsl(34, 97%, 64%)"
                />
            </div>
        </section>
    </>
    );
}

export default Section;