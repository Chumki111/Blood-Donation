// import TeamCard from "../Card/TeamCard";


// const TeamMember = () => {
//   const cards = [
//     {
//       image: 'https://i.ibb.co/mGSrL5D/t1.jpg',
//       name: 'Nora Khaypeia',
//       title: 'Co-Founder',
//     },
//     {
//       image: 'https://i.ibb.co/LPjsGRj/t2.jpg',
//       name: 'Poon Hill, Nepal',
//       title: 'Starry Night',
//     },
//     {
//       image: 'https://i.ibb.co/pX2hrmq/t3.jpg',
//       name: 'Bojcin Forest, Serbia',
//       title: 'Path Of Peace',
//     },
//   ];
//   return (
//     <div>
//       <h2 className="text-red-500 text-center text-xl font-semibold py-3">Team Member</h2>
//       <h2 className="text-4xl font-bold text-center py-6 ">Meet Volunteers</h2>
//       {/* card section */}
      

//       <div className="grid place-items-center mx-6 py-5">
//       <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
//         {cards.map((card, index) => (
//           <TeamCard key={index} image={card.image} name={card.name} title={card.title} />
//         ))}
//       </div>
//     </div>
//       </div>
//   )
// }

// export default TeamMember

import TeamCard from '../Card/TeamCard';
import Heading from '../Heading/Heading';

const TeamMember = () => {
  const cards = [
    {
      image: 'https://i.ibb.co/mGSrL5D/t1.jpg',
      name: 'Nora Khaypeia',
      title: 'Co-Founder',
    },
    {
      image: 'https://i.ibb.co/LPjsGRj/t2.jpg',
      name: 'Poon Hill, Nepal',
      title: 'Starry Night',
    },
    {
      image: 'https://i.ibb.co/pX2hrmq/t3.jpg',
      name: 'Bojcin Forest, Serbia',
      title: 'Path Of Peace',
    },
  ];

  return (
    <div className='mt-12'>
     <Heading heading="Meet Volunteers" subHeading="Team Member"/>
      <div className="grid place-items-center mx-6 py-5">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <TeamCard key={index} image={card.image} name={card.name} title={card.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
