// 'use client'
// import { useState, useEffect } from "react";

// const Counter = ({ targetValue, duration }:any) => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
    
//     let startValue = 0;
//     const increment = targetValue / (duration / 5); // Adjust the speed

//     const updateCounter = () => {
//       if (startValue < targetValue) {
//         startValue += increment;
//         setCount(Math.ceil(startValue)); // Use Math.ceil to round up
//         setTimeout(updateCounter, 10); // Recursively update every 10ms
//       } else {
//         setCount(targetValue); // Ensure it finishes exactly at the target
//       }
//     };

//     updateCounter();

//     // Cleanup function in case the component unmounts
//     return () => clearTimeout(updateCounter);
//   }, [targetValue, duration]);

//   return <h2>{count}</h2>;
// };

// export default function CounterPlace() {
//     return (
//       <div>
//         <h1>Our Clients</h1>
//         <Counter targetValue={500} duration={3000} /> {/* Target value of 500 over 2 seconds */}
//       </div>
//     );
//   }