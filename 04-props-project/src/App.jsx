import React from 'react'
import {Bookmark} from 'lucide-react'
import Card from './components/Card'


const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://www.logo.dev/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fgoogle.com%3Ftoken%3Dlive_6a1a28fd-6420-4492-aeb0-b297461d9de2%26size%3D128%26retina%3Dfalse%26format%3Dwebp%26theme%3Dlight&w=128&q=75",
    company: "Google",
    datePosted: "2 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pack: "$65/hr",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://www.logo.dev/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmeta.com%3Ftoken%3Dlive_6a1a28fd-6420-4492-aeb0-b297461d9de2%26size%3D128%26retina%3Dfalse%26format%3Dwebp%26theme%3Dlight&w=128&q=75",
    company: "Meta",
    datePosted: "5 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pack: "$72/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://www.logo.dev/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Famazon.com%3Ftoken%3Dlive_6a1a28fd-6420-4492-aeb0-b297461d9de2%26size%3D128%26retina%3Dfalse%26format%3Dwebp%26theme%3Dlight&w=128&q=75",
    company: "Amazon",
    datePosted: "1 week ago",
    post: "Software Development Engineer I",
    tag1: "Full Time",
    tag2: "Junior Level",
    pack: "$58/hr",
    location: "Chennai, India",
  },
  {
    brandLogo: "https://www.logo.dev/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fapple.com%3Ftoken%3Dlive_6a1a28fd-6420-4492-aeb0-b297461d9de2%26size%3D128%26retina%3Dfalse%26format%3Dwebp%26theme%3Dlight&w=128&q=75",
    company: "Apple",
    datePosted: "3 days ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pack: "$90/hr",
    location: "Cupertino, USA",
  },
  {
    brandLogo: "https://www.logo.dev/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fnetflix.com%3Ftoken%3Dlive_6a1a28fd-6420-4492-aeb0-b297461d9de2%26size%3D128%26retina%3Dfalse%26format%3Dwebp%26theme%3Dlight&w=128&q=75",
    company: "Netflix",
    datePosted: "4 days ago",
    post: "Backend Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pack: "$105/hr",
    location: "Los Gatos, USA",
  },
  {
    brandLogo: "https://www.logo.dev/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmicrosoft.com%3Ftoken%3Dlive_6a1a28fd-6420-4492-aeb0-b297461d9de2%26size%3D128%26retina%3Dfalse%26format%3Dwebp%26theme%3Dlight&w=128&q=75",
    company: "Microsoft",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pack: "$70/hr",
    location: "Noida, India",
  },
  {
    brandLogo: "https://www.logo.dev/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Ftesla.com%3Ftoken%3Dlive_6a1a28fd-6420-4492-aeb0-b297461d9de2%26size%3D128%26retina%3Dfalse%26format%3Dwebp%26theme%3Dlight&w=256&q=75",
    company: "Tesla",
    datePosted: "1 day ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pack: "$60/hr",
    location: "Noida, India",
  },
  {
    brandLogo: "https://www.logo.dev/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fmercedes-benz.com%3Ftoken%3Dlive_6a1a28fd-6420-4492-aeb0-b297461d9de2%26size%3D128%26retina%3Dfalse%26format%3Dwebp%26theme%3Dlight&w=256&q=75",
    company: "Mercedes-Benz",
    datePosted: "2 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    package: "$75/hr",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://www.logo.dev/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fwalmart.com%3Ftoken%3Dlive_6a1a28fd-6420-4492-aeb0-b297461d9de2%26size%3D128%26retina%3Dfalse%26format%3Dwebp%26theme%3Dlight&w=256&q=75",
    company: "Walmart",
    datePosted: "3 days ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pack: "$68/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://www.logo.dev/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fnvidia.com%3Ftoken%3Dlive_6a1a28fd-6420-4492-aeb0-b297461d9de2%26size%3D128%26retina%3Dfalse%26format%3Dwebp%26theme%3Dlight&w=128&q=75",
    company: "NVIDIA",
    datePosted: "5 days ago",
    post: "AI Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pack: "$95/hr",
    location: "Pune, India",
  },
];
// export default jobOpenings;
console.log(jobOpenings);
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        console.log(idx);
        return <div key={idx}>
          <Card brandLogo={elem.brandLogo} company={elem.company} 
                datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} 
                tag2={elem.tag2} pack={elem.pack} location={elem.location} />
        </div>
       
      })}
    </div>
  )
}

export default App
