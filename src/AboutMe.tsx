import React from "react";

export interface IAboutMeProps {}

const AboutMe: React.FunctionComponent<IAboutMeProps> = (props) => {
  return (
    <div>
      <p>AboutMe Page works!</p>
    </div>
  );
};

// const AboutMe = () => {
//     return (
//         <div>
//             <p>AboutMe Page works!</p>
//         </div>
//     );
// }

export default AboutMe;
