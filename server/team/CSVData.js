// import React from "react";

// const csvData = `name,affiliation,position,website,linkedin,twitter,email
// Yiping Jia,Queen's University,PhD Student,,,,
// Fangjian Lei,Queen's University,PhD Student,,fangjian-lei-5b110b204,,
// Junjie Li,Concordia University,PhD Student,,,,
// Sharon Ho,Concordia University,Master's Student,,sharon-ho,,
// Amanda Kolopanis,Concordia University,Master's Student,,amanda-kolopanis,,
// Mohayeminul Islam,University of Alberta,PhD Student,,mohayemin,,
// Akalanka Galappaththi,University of Alberta,PhD Student,,akalanka-galappaththi-67580719,@boney_ag,akalanka@ualberta.ca
// Aurel Lucrich Ikama Honey,Ecole Polytechnique,PhD Student,,aurel-i-345a91ba,,
// Pierre-Olivier Cote,Ecole Polytechnique,Master's Student,,pierre-olivier-côté,,
// Vahid Majdinasab,Ecole Polytechnique,PhD Student,,,,
// Patrick Loic Foalem,Ecole Polytechnique,PhD Student,,patrick-loïc-foalem-37281a100,Patrick_Loic_F,
// Forough Majidi,Ecole Polytechnique,PhD Student,,forough-majidi-8a35b8227,,
// Chunli Yu,Queen's University,PhD Student,,,,
// Divya Kamath,Queen's University,Master's Student,,divyamkamath,,
// Antonio Collante,Concordia University,PhD Student,,antonio-c-737aa566,,
// Khaled Badran,Concordia University,Master's Student,https://das.encs.concordia.ca/members/khaled-badran,khaled-badran-6b0908174,khaled_badran9,
// Rached Bouchoucha,Ecole Polytechnique,Master's Student,,rached-bouchoucha-1061997,,
// Ahmed Haj Yahmed,Ecole Polytechnique,Master's Student,,ahmed-haj-yahmed/,,
// Musfiqur Rahman,Concordia University,PhD Student,https://das.encs.concordia.ca/members/musfiqur-rahman,musfiqur-rahman-37596444,,
// Jasmine Latendresse,Concordia University,PhD Student,https://jaslatendresse.github.io,jasmine-latendresse-2835561a6/,,
// Jiawen Liu,Queen's University,Master's Student,https://seal-queensu.github.io/member-current.html,jiawen-liu-691906178,,
// Pouya Fathollahzadeh,Queen's University,Master's Student,https://seal-queensu.github.io/member-current.html,,,
// Akshat Malik,Queen's University,Master's Student,,akshat-malik/,,
// Harsh Patel,Queen's University,Master's Student,https://harsh8398.github.io,harsh8398/,,
// Jaskirat Singh,Queen's University,Master's Student,,jaskirat409,,
// Shenyu Zheng,Queen's University,Master's Student,,shenyu-zheng-31146524b/,,
// Afiya Fahmida Sarah,University of Alberta,Master's Student,,afiya-sarah-039007179,,
// Fazle Rabbi,Concordia University,PhD Student,https://frabbisw.github.io/,fazle-rabbi-720139207,,
// Lorena Pacheco,Concordia University,Master's Student,,lorenasimedo,,
// Samuel Abedu,Concordia University,PhD Student,,samuel-abedu-42b755103,,
// Khouloud Oueslati,Ecole Polytechnique,Master's Student,,khouloud-ouesleti/,,
// Yang Liu,Ecole Polytechnique,PhD Student,,,,
// Laila Mahmoud Daw Abodinar,Ecole Polytechnique,PhD Student,,laila-abodinar-2541491ba,,
// Altaf Allah Abbassi,Ecole Polytechnique,Master's Student,,altafallahabbassi/,,
// Alor Ebube,Concordia University,Master's Student,https://das.encs.concordia.ca/members/alor-ebube,alor-ebubechukwu/,,
// Mayra Ruiz,Concordia University,Master's Student,,mruiz27,,`;

// const CSVData = () => {
//   const rows = csvData.split("\n");
//   const headers = rows[0].split(",");

//   return (
//     <div>
//       <h1>CSV Data</h1>
//       <table>
//         <thead>
//           <tr>
//             {headers.map((header, index) => (
//               <th key={index}>{header}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {rows.slice(1).map((row, index) => {
//             const columns = row.split(",");
//             return (
//               <tr key={index}>
//                 {columns.map((column, index) => (
//                   <td key={index}>{column}</td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CSVData;
