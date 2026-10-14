import React from 'react';
import Card from './Cards';

const partners = [
  
  { id: 2, name: 'Shivam', image: 'images/shivam2.jpeg', number: '+917054868273' },
  { id: 3, name: 'Aditya', image: 'images/ab.jpeg', number: '+918218779498' },
  { id: 4, name: 'Rishab', image: 'images/rishabh.jpeg', number: '+918006277267' },
  { id: 5, name: 'Rohit', image: 'images/rohit.jpeg', number: '+919758564157' },
  { id: 6, name: 'Vivek', image: 'images/vivek.jpeg', number: '+918174004795' },
  { id: 7, name: 'Vashu', image: 'images/vasu.jpeg', number: '+917067197433' },
  { id: 8, name: 'Vishal', image: 'images/vishal.jpeg', number: '+918736033617' },
  { id: 9, name: 'Suryansh', image: 'images/sur.jpeg', number: '+917355155858' },
  { id: 10, name: 'Suraj', image: 'images/sun.jpeg', number: '+919621986324' },
  { id: 16, name: 'Rajat', image: 'images/rajat.jpeg', number: '+916397273200' },
  { id: 17, name: 'Pratham', image: 'images/pop.jpeg', number: '+919068939100' },
  { id: 18, name: 'Nishant', image: 'images/nish.jpeg', number: '+917817011438' },
  { id: 11, name: 'Vipin', image: 'images/vip.jpeg', number: '+917019168762' },
  { id: 1, name: 'Vaibhav Sharma', image: 'images/shivam.jpeg', number: '+919876543210' },
  { id: 12, name: 'Adarsh', image: 'images/ada.jpeg', number: '+918853557713' },
  { id: 13, name: 'Ashutosh', image: 'images/ash.jpeg', number: '+919696279472' },
  { id: 14, name: 'Aman', image: 'images/aman.jpeg', number: '+919258346489' },
  { id: 15, name: 'Yatharth', image: 'images/yat.jpeg', number: '+919026379839' },
  
];

function Body() {
  return (
    <div className="container py-4">
      {/* Intro Description Header */}
      <div className="text-center my-4">
        <span
          className="badge rounded-pill px-3 py-2 mb-2 text-uppercase fw-semibold"
          style={{
            backgroundColor: 'rgba(216, 27, 96, 0.1)',
            color: '#D81B60',
            letterSpacing: '1px',
            fontSize: '0.75rem',
          }}
        >
          ✨ Navratri Special
        </span>
        <h2 className="fw-bold text-dark mb-2">Find Your Perfect Garba Partner</h2>
        <p className="text-muted mx-auto mb-1" style={{ maxWidth: '620px', fontSize: '1rem' }}>
          Don't sit out this festive season! Browse verified dance partners ready for non-stop 
          Raas, Dodhiya, and Dandiya nights.
        </p>
        <p className="text-secondary small fw-medium">
          Connect directly via WhatsApp or call to coordinate your steps and passes.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="row g-3 justify-content-center">
        {partners.map((partner) => (
          <Card
            key={partner.id}
            name={partner.name}
            image={partner.image}
            number={partner.number}
          />
        ))}
      </div>
    </div>
  );
}

export default Body;