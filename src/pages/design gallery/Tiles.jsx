
import popular1 from "../../assets/images/her1.jpeg";
import popular2 from "../../assets/images/her1.jpeg";
import popular3 from "../../assets/images/her1.jpeg";
import popular4 from "../../assets/images/her1.jpeg";
import popular5 from "../../assets/images/her1.jpeg";
import popular6 from "../../assets/images/her1.jpeg";



export default function Tiles() {
  
 
  let myData = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8N8Aa10fjsZ3JS8UULGxMMchU6gCF1mE59w&s',
      title: "Residential",
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTshe_fGNTRjjyfpYmBckhd7abNef-j6ExlYQ&s',
      title: "Commercial",
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcABj3zVoOrHp_5lkiRVUXuTP5GbAHB56Fxw&s',
      title: "Residential",
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaE8pkwwVHUn1p3hamRjdFj17TYO02K4GD7A&s',
      title: "Residential",
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkwvaHBvEdRg8lSulCjSFFcL-0st2miAPluA&s',
      title: "Commercial",
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTdS3thCrA_Fv7Q4tzIKeOQFgppvgaWOsvoQ&s',
      title: "Residential",
    },
  ];

  

  return (
    <>
    <br/>
      <div className="p-10 flex flex-col lg:gap-10 gap-5 bg-secondary">
       
       

       

        <div>
          
         
        <div className="md:flex md:flex-col md:items-center">
  <div className="w-full md:w-auto md:flex md:flex-col md:items-center">
    
  <h1 className="text-[36px]  lg:text-[35px] font-bold text-center">
           Tiles & Natural Stones
        </h1>
  </div>

  
</div>



<div className="grid place-items-center md:grid md:grid-cols-3 md:gap-5">
  {myData?.map((item, index) => (
    <div key={index} className="mt-8 group">
      <div className="relative overflow-hidden rounded-3xl">
        <img
          src={item.image}
          alt=""
          className="w-full  h-[370px] md:h-[240px] lg:h-[370px] rounded-3xl scale-100 group-hover:scale-125 transition-all duration-200"
        />
        <div className="absolute w-full h-full bg-black/60 rounded-3xl bottom-0 opacity-0 group-hover:opacity-transition-all duration-500">
          <div className="absolute right-4 top-4"></div>
          {/* <div className="text-white absolute bottom-3 left-8">
            <h2 className="text-sm">Bedroom</h2>
            <p className="text-2xl">Innovation</p>
          </div> */}
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
    </>
  );
}